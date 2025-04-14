import { addFundSchema } from "@/schemas/wallet";
import { z } from "zod";

export type WalletBalanceData = {
  balance: `${string}.${string}`;
};

export type WalletTransactionsData = {
  items: WalletTransactionItem[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
};

export type WalletTransactionItem = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  transactionId: string;
  type: string;
  amount: string;
  description: string;
};

export type AddFundData = z.infer<typeof addFundSchema>;

export type PayNowProps = {
  handlePayNowOpen: (open: boolean) => void;
};
