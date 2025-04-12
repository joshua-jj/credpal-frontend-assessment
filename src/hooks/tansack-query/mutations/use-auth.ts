import { signUp } from "@/api/auth";
import { SignUpServerData } from "@/features/auth/types";
import { useMutation } from "@tanstack/react-query";
import { on } from "events";

export const useSignUp = () => {
  const { mutate: signUpUser, isPending: signUpLoading } = useMutation({
    mutationFn: (formData: SignUpServerData) => signUp(formData),
    onSuccess: data => {
      const { accessToken } = data?.data?.data;
      localStorage.setItem("userToken", accessToken);
    },
  });

  return { signUpLoading, signUpUser };
};

//  const {
//    mutate: singleInstantPay,
//    isPending: isSingleInstantPaying,
//    isSuccess: isSingleInstantPaySuccess,
//  } = useMutation({
//    mutationFn: (formData: InstantPaymentServerData) => initiateInstantPayment(formData),
//    onSuccess: () => {
//      invalidateQueries(["payment-queue"]);
//      dispatch(closeConfirmationDialog());
//      dispatch(openSuccessDialog());
//    },
//    onError: (error: unknown) => {
//      if (error instanceof AxiosError) {
//        toast({
//          description: error?.response?.data?.error,
//        });
//        return;
//      }
//      toast({
//        description: "Failed to initiate payment",
//      });
//    },
//  });
