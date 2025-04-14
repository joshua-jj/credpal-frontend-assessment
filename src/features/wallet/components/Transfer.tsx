"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AddFundData, PayNowProps, TransferData, TransferProps } from "@/features/wallet/types";
import { useAppSelector } from "@/hooks/redux";
import { useFundWallet, useTransfer } from "@/hooks/tansack-query/mutations/use-wallet";
import { addFundSchema, transferSchema } from "@/schemas/wallet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";

const Transfer = ({ handleTransferOpen }: TransferProps) => {
  const { transferringMoney, transferMoney } = useTransfer();
  const isPayNowOpen = useAppSelector(state => state.dialog.isPayNowOpen);

  const defaultValues = {
    walletId: "",
    amount: "",
  };

  const form = useForm<TransferData>({
    defaultValues,
    resolver: zodResolver(transferSchema),
  });

  const {
    formState: { errors },
    reset,
  } = form;

  const handleSubmit = (data: TransferData) => {
    transferMoney(data);
  };

  useEffect(() => {
    isPayNowOpen || reset(defaultValues);
  }, [isPayNowOpen, form]);

  return (
    <div>
      <Dialog open={isPayNowOpen} onOpenChange={handleTransferOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
          </DialogHeader>
          <div className="-mx-6 grid gap-4 border-t border-[#E6E8F0] px-6 py-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="walletId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold text-[#474D66]">Wallet ID</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={`w-full focus:outline-none ${errors.walletId ? "border-destructive" : "border-[#D8DAE5]"}`}
                            placeholder="W-12345678"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold text-[#474D66]">Amount</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={`w-full focus:outline-none ${errors.amount ? "border-destructive" : "border-[#D8DAE5]"}`}
                            placeholder="5000.00"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold text-[#474D66]">Description (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={`w-full focus:outline-none ${errors.description ? "border-destructive" : "border-[#D8DAE5]"}`}
                            placeholder="Optional Description"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-8">
                  <Button
                    type="submit"
                    className="bg-beam-yellow hover:bg-beam-yellow/[98%] h-[3.5rem] w-full rounded-[5px] text-[#101840] hover:opacity-50"
                    disabled={transferringMoney}
                  >
                    {transferringMoney ? <ClipLoader color={"#101840"} size={25} /> : "Transfer"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Transfer;
