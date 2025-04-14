"use client";
import bankIcon from "@/assets/icons/bank.svg";
import clockIcon from "@/assets/icons/clock.svg";
import copyIcon from "@/assets/icons/copy.svg";
import walletBalanceIcon from "@/assets/icons/wallet-balance.svg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useCopyToClipboard from "@/hooks/use-copy-to-clipboard";
import Image from "next/image";

const WalletPage = () => {
  const accountNumber = "010 210 2020";
  const copyToClipboard = useCopyToClipboard();

  return (
    <div>
      <p className="mb-10 text-2xl font-bold">Wallet</p>
      <Separator className="w-full" />
      <div className="flex justify-between gap-6 py-[2rem]">
        <div className="w-[23rem]">
          <div className="bg-[#F9F9F7] px-4 py-6">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-[#595957]">Actual balance</p>
              <Image src={walletBalanceIcon} alt="Wallet Icon" height={25} width={25} />
            </div>
            <Separator className="mt-4 mb-8 w-full bg-[#C8D9D1]" />
            <p className="text-xl font-semibold">
              ₦200,000<span className="text-base text-[#595957]">.00</span>
            </p>
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
          <div className="mt-4 flex w-full items-center justify-between">
            <Button className="text-primary bg-beam-yellow hover:bg-beam-yellow text-xs font-medium">Add Funds</Button>
            <Button className="border border-[#D9D8D5] bg-transparent text-xs font-medium text-[#595957] hover:bg-transparent">Withdrawal</Button>
          </div>
        </div>
        <Separator className="w-[30rem]" orientation="vertical" />
        <div className="px-[2rem]">
          <p className="mb-4 font-semibold text-[#1F384C]">Transaction History</p>
          <div className="flex items-center">
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
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
