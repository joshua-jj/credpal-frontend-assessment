"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AddFundData } from "@/features/wallet/types";
import { useFundWallet } from "@/hooks/tansack-query/queries/use-wallet";
import { addFundSchema } from "@/schemas/wallet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";

const PayNow = () => {
  const { fundingWallet, fundWallet } = useFundWallet();

  const defaultValues = {
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    amount: "",
  };

  const form = useForm<AddFundData>({
    defaultValues,
    resolver: zodResolver(addFundSchema),
  });

  const {
    formState: { errors },
  } = form;

  const handlePaymentOptionOpen = (open: boolean) => {};

  const handleSubmit = (data: AddFundData) => {
    fundWallet(data);
  };

  return (
    <div>
      <Dialog open onOpenChange={handlePaymentOptionOpen}>
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
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold text-[#474D66]">Card Number</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={`w-full focus:outline-none ${errors.cardNumber ? "border-destructive" : "border-[#D8DAE5]"}`}
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="expiryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold text-[#474D66]">Expiry Date</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={`w-full focus:outline-none ${errors.cardNumber ? "border-destructive" : "border-[#D8DAE5]"}`}
                            placeholder="MM/YY"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold text-[#474D66]">CVV</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={`w-full focus:outline-none ${errors.cardNumber ? "border-destructive" : "border-[#D8DAE5]"}`}
                            placeholder="536"
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
                            className={`w-full focus:outline-none ${errors.cardNumber ? "border-destructive" : "border-[#D8DAE5]"}`}
                            placeholder="5000.00"
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
                    disabled={fundingWallet}
                  >
                    {fundingWallet ? <ClipLoader color={"#101840"} size={25} /> : "Pay Now"}
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

export default PayNow;
