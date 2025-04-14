import { beamApi } from "./axios";

export const getWalletBalance = async () => {
  const response = await beamApi('/wallets/balance');
  return response?.data?.data;
};
