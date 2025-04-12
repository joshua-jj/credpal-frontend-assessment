"use client";
import PasswordInput from "@/components/PasswordInput";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SigninFormData } from "@/features/auth/types";
import { useSignIn } from "@/hooks/tansack-query/mutations/use-auth";
import Link from "next/link";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";

const SignInPage = () => {
  const { signInLoading, signInUser } = useSignIn();

  const defaultValues = {
    email: "",
    password: "",
  };

  const form = useForm({ defaultValues });
  const { getValues } = form;

  const loginButtonDisabled = !getValues("email") || !getValues("password");

  const handleSubmit = (data: SigninFormData) => {};

  return (
    <div className="px-[8rem] pt-[8rem]">
      <p className="text-4xl font-semibold">Sign in to Beam.</p>
      <p className="text-muted-foreground mt-2">Please sign in with the your assigned login details.</p>
      <p className="text-muted-foreground mt-2">
        Don't have an account?{" "}
        <Link href="/signup" className="underline">
          Sign Up
        </Link>
      </p>
      <div className="mt-6 w-[27rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input {...field} className="w-full" placeholder="Enter Email Address" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput {...field} className="w-full" placeholder="Enter Password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-2 flex justify-end">
              <p className="text-muted-foreground text-sm">Forgot password?</p>
            </div>
            <div className="mt-8">
              <Button
                type="submit"
                className="disabled:bg-primary-green bg-primary h-[3rem] w-full rounded-[50px] disabled:border-transparent"
                disabled={loginButtonDisabled}
              >
                {signInLoading ? <ClipLoader color={"#fff"} size={25} /> : "Login"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignInPage;
