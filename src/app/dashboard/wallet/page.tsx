"use client";
import bankIcon from "@/assets/icons/bank.svg";
import clockIcon from "@/assets/icons/clock.svg";
import copyIcon from "@/assets/icons/copy.svg";
import walletBalanceIcon from "@/assets/icons/wallet-balance.svg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import BalanceSkeleton from "@/features/wallet/components/BalanceSkeleton";
import PaymentOption from "@/features/wallet/components/PayNow";
import TransactionsTableSkeleton from "@/features/wallet/components/TransactionsTableSkeleton";
import Transfer from "@/features/wallet/components/Transfer";
import { useAppDispatch } from "@/hooks/redux";
import { useGetWalletBalance, useGetWalletTransactions } from "@/hooks/tansack-query/queries/use-wallet";
import useCopyToClipboard from "@/hooks/use-copy-to-clipboard";
import { closePayNow, closeTransfer, openPayNow, openTransfer } from "@/lib/redux/slices/dialogSlice";
import Image from "next/image";

const WalletPage = () => {
  const dispatch = useAppDispatch();
  const accountNumber = "010 210 2020";
  const copyToClipboard = useCopyToClipboard();
  const { balanceLoading, balanceData } = useGetWalletBalance();
  const { transactionsLoading, transactionsData } = useGetWalletTransactions();
  const balanceArray = balanceData?.balance.split(".");
  const balanceInteger = balanceArray ? balanceArray[0] : "0";
  const balanceDecimal = balanceArray ? balanceArray[1] : "0";

  const handlePayNowOpen = (open: boolean) => {
    dispatch(open ? openPayNow() : closePayNow());
  };

  const handleTransferOpen = (open: boolean) => {
    dispatch(open ? openTransfer() : closeTransfer());
  };

  return (
    <div>
      <p className="mb-10 text-2xl font-bold">Wallet</p>
      <Separator className="w-full" />
      <div className="flex gap-6 py-[2rem] pr-[2rem]">
        <div className="w-[23rem]">
          <div className="bg-[#F9F9F7] px-4 py-6">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-[#595957]">Actual balance</p>
              <Image src={walletBalanceIcon} alt="Wallet Icon" height={25} width={25} />
            </div>
            <Separator className="mt-4 mb-8 w-full bg-[#C8D9D1]" />
            <div className="text-xl font-semibold">
              {balanceLoading ? (
                <BalanceSkeleton />
              ) : (
                <>
                  {`₦${Number(balanceInteger).toLocaleString()}`}
                  <span className="text-base text-[#595957]">{`.${balanceDecimal}`}</span>
                </>
              )}
            </div>
            <Separator className="mt-8 mb-4 w-full bg-[#C8D9D1]" />
            <div className="flex items-center gap-4">
              <Image src={bankIcon} alt="Bank Icon" height={18} width={18} />
              <p className="text-xs font-medium">
                Wema Bank <span>{accountNumber}</span>
              </p>
              <Image
                src={copyIcon}
                alt="Copy Icon"
                height={18}
                width={18}
                className="cursor-pointer"
                onClick={() => copyToClipboard(accountNumber)}
              />
            </div>
          </div>
          <div className="w-[23rem] border-t border-dashed border-black bg-[#F9F9F7] px-4 pt-6 pb-16">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-[#595957]">Pending Amount</p>
              <Image src={clockIcon} alt="Clock Icon" height={24} width={24} />
            </div>
            <Separator className="mt-4 mb-8 w-full bg-[#C8D9D1]" />
            <p className="text-xl font-semibold">
              ₦0<span className="text-base text-[#595957]">.00</span>
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Button className="text-primary bg-beam-yellow hover:bg-beam-yellow/90 flex-1 text-xs font-medium" onClick={() => handlePayNowOpen(true)}>
              Add Funds
            </Button>
            <Button
              className="hover:border-beam-yellow flex-1 border border-[#D9D8D5] bg-transparent text-xs font-medium text-[#595957] hover:bg-transparent"
              onClick={() => handleTransferOpen(true)}
            >
              Transfer
            </Button>
          </div>
        </div>
        <div className="flex-1 border-l border-[#D9D8D5] px-[2rem]">
          <p className="mb-4 font-semibold text-[#1F384C]">Transaction History</p>
          {transactionsLoading ? (
            <TransactionsTableSkeleton />
          ) : (
            <>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button className="border border-[#D9D8D5] bg-transparent text-xs font-medium text-[#595957] hover:bg-transparent">3 years</Button>
                  <Button className="border border-[#D9D8D5] bg-transparent text-xs font-medium text-[#595957] hover:bg-transparent">Approved</Button>
                  <Button className="border border-[#D9D8D5] bg-transparent text-xs font-medium text-[#595957] hover:bg-transparent">Pending</Button>
                  <Button className="border-primary text-primary border bg-transparent text-xs font-medium hover:bg-transparent">History</Button>
                </div>
                <div>
                  <p className="text-sm text-[#8C8C89]">Filter by</p>
                </div>
              </div>
              <div className="mt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Transaction Type</TableHead>
                      <TableHead>Amount (₦)</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactionsData?.items.map(transaction => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.transactionId}</TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell>{`₦${Number(transaction.amount).toLocaleString()}`}</TableCell>
                        <TableCell>Approved</TableCell>
                        <TableCell>{String(transaction.createdAt).slice(0, 10)}</TableCell>
                        <TableCell>
                          <Button className="text-primary hover:border-beam-yellow border border-[#D9D8D5] bg-white text-sm font-normal hover:bg-white">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </>
          )}
        </div>
      </div>
      <PaymentOption handlePayNowOpen={handlePayNowOpen} />
      <Transfer handleTransferOpen={handleTransferOpen} />
    </div>
  );
};

export default WalletPage;
