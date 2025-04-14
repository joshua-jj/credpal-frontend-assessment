import { getWalletBalance, getWalletTransactions } from "@/api/wallet";
import { WalletBalanceData, WalletTransactionsData } from "@/features/wallet/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGetWalletBalance = () => {
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

export const useGetWalletTransactions = () => {
  const {
    isLoading: transactionsLoading,
    data: transactionsData,
    error: transactionsError,
  } = useQuery<WalletTransactionsData, AxiosError>({
    queryKey: ["wallet-transactions"],
    queryFn: () => getWalletTransactions(),
  });
  return { transactionsLoading, transactionsData, transactionsError };
};
