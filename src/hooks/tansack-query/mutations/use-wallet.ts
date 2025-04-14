import { fund } from "@/api/wallet";
import { AddFundData } from "@/features/wallet/types";
import { useAppDispatch } from "@/hooks/redux";
import { closePayNow } from "@/lib/redux/slices/dialogSlice";
import { invalidateQueries } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useFundWallet = () => {
  const dispatch = useAppDispatch();

  const {
    mutate: fundWallet,
    isPending: fundingWallet,
    isSuccess: fundWalletSuccess,
  } = useMutation({
    mutationFn: (formData: AddFundData) => fund(formData),
    onSuccess: (data: any) => {
      toast.success("Wallet funded successfully");
      invalidateQueries(["wallet-balance", "wallet-transactions"]);
      dispatch(closePayNow());
    },
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
        return;
      }
      toast.error("Unable fund wallet");
    },
  });

  return { fundingWallet, fundWallet, fundWalletSuccess };
};
