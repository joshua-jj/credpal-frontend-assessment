import { fund, transfer } from "@/api/wallet";
import { AddFundData, TransferData } from "@/features/wallet/types";
import { useAppDispatch } from "@/hooks/redux";
import { closePayNow, closeTransfer } from "@/lib/redux/slices/dialogSlice";
import { invalidateQueries } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useFundWallet = () => {
  const dispatch = useAppDispatch();

  const { mutate: fundWallet, isPending: fundingWallet } = useMutation({
    mutationFn: (formData: AddFundData) => fund(formData),
    onSuccess: () => {
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

  return { fundingWallet, fundWallet };
};

export const useTransfer = () => {
  const dispatch = useAppDispatch();

  const { mutate: transferMoney, isPending: transferringMoney } = useMutation({
    mutationFn: (formData: TransferData) => transfer(formData),
    onSuccess: () => {
      toast.success("Transfer successful");
      invalidateQueries(["wallet-balance", "wallet-transactions"]);
      dispatch(closeTransfer());
    },
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
        return;
      }
      toast.error("Unable fund wallet");
    },
  });

  return { transferringMoney, transferMoney };
};
