import { signIn, signUp } from "@/api/auth";
import { SigninFormData, SignupFormData } from "@/features/auth/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useSignUp = () => {
  const router = useRouter();
  const { mutate: signUpUser, isPending: signUpLoading } = useMutation({
    mutationFn: (formData: SignupFormData) => signUp(formData),
    onSuccess: data => {
      const { accessToken } = data?.data;
      localStorage.setItem("userToken", accessToken);
      router.push("/dashboard/wallet");
    },
  });

  return { signUpLoading, signUpUser };
};

export const useSignIn = () => {
  const router = useRouter();
  const { mutate: signInUser, isPending: signInLoading } = useMutation({
    mutationFn: (formData: SigninFormData) => signIn(formData),
    onSuccess: data => {
      const { accessToken } = data?.data;
      localStorage.setItem("userToken", accessToken);
      router.push("/dashboard/wallet");
    },
  });

  return { signInLoading, signInUser };
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
