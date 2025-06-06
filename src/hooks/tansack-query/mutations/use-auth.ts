import { signIn, signUp } from "@/api/auth";
import { SigninFormData, SignupFormData } from "@/features/auth/types";
import { setToken } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useSignUp = () => {
  const router = useRouter();
  const { mutate: signUpUser, isPending: signUpLoading } = useMutation({
    mutationFn: (formData: SignupFormData) => signUp(formData),
    onSuccess: (data: any) => {
      const { accessToken } = data?.data;
      setToken(accessToken);
      setTimeout(() => {
        toast.success("Signup successful");
      });
      router.push("/dashboard/wallet");
    },
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
        return;
      }
      toast.error("Unable to sign up");
    },
  });

  return { signUpLoading, signUpUser };
};

export const useSignIn = () => {
  const router = useRouter();
  const { mutate: signInUser, isPending: signInLoading } = useMutation({
    mutationFn: (formData: SigninFormData) => signIn(formData),
    onSuccess: (data: any) => {
      const { accessToken } = data?.data;
      setToken(accessToken);
      setTimeout(() => {
        toast.success("Login successful");
      });
      router.push("/dashboard/wallet");
    },
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
        return;
      }
      toast.error("Unable to sign in");
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
