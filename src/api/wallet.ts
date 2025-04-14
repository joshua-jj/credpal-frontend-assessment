import { AddFundData, TransferData } from "@/features/wallet/types";
import { beamApi } from "./axios";

export const getWalletBalance = async () => {
  const response = await beamApi("/wallets/balance");
  return response?.data?.data;
};

export const getWalletTransactions = async () => {
  const response = await beamApi("/wallets/transactions");
  return response?.data?.data;
};

export const fund = async (formData: AddFundData) => {
  const response = await beamApi.post("/wallets/fund", formData);
  return response?.data;
};

export const transfer = async (formData: TransferData) => {
  const response = await beamApi.post("/wallets/transfer", formData);
  return response?.data;
};
