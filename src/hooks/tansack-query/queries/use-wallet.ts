import { getWalletBalance } from "@/api/wallet";
import { WalletBalanceData } from "@/features/wallet/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGetWallet = () => {
  const {
    isLoading: balanceLoading,
    data: balanceData,
    error: balanceError,
  } = useQuery<WalletBalanceData, AxiosError>({
    queryKey: ["wallet-balance"],
    queryFn: () => getWalletBalance(),
  });
  return { balanceLoading, balanceData, balanceError };
};
