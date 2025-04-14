import { fund, getWalletBalance, getWalletTransactions } from "@/api/wallet";
import { AddFundData, WalletBalanceData, WalletTransactionsData } from "@/features/wallet/types";
import { invalidateQueries } from "@/lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { toast } from "sonner";

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

