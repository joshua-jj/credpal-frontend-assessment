"use client";
import PasswordInput from "@/components/PasswordInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupFormData } from "@/features/signup/types";
import { signupSchema } from "@/schemas/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const [termsAgreed, setTermsAgreed] = useState(false);

  const defaultValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const form = useForm<SignupFormData>({
    defaultValues,
    resolver: zodResolver(signupSchema),
  });

  const {
    formState: { errors },
  } = form;

  const signupButtonDisabled = !termsAgreed || form.formState.isSubmitting;

  const handleSubmit = (data: SignupFormData) => {};

  const handleTermsAgreedToggle = (checked: boolean) => {
    setTermsAgreed(checked => !checked);
  };

  return (
    <div className="px-[8rem] pt-[8rem]">
      <p className="text-4xl font-semibold">Create an account</p>
      <p className="text-muted-foreground mt-2">
        Already have an account?{" "}
        <Link href="/signin" className="underline">
          Login
        </Link>
      </p>
      <div className="mt-6 w-[27rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={`w-full border ${errors.fullName ? "border-destructive" : "border-input"}`}
                        placeholder="Enter Full Name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={`w-full border ${errors.fullName ? "border-destructive" : "border-input"}`}
                        placeholder="Enter Email Address"
                      />
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
                      <PasswordInput
                        {...field}
                        className={`w-full border ${errors.fullName ? "border-destructive" : "border-input"}`}
                        placeholder="Enter Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Checkbox onCheckedChange={handleTermsAgreedToggle} className="data-[state=checked]:border-none data-[state=checked]:bg-[#1F3D99]" />
              <div className="text-muted-foreground text-sm">
                I agree to BeamMarkets <span className="text-[#1F3D99] underline">Terms of Service</span> and{" "}
                <span className="text-[#1F3D99] underline">Privacy Policy</span>
              </div>
            </div>
            <div className="mt-8">
              <Button
                type="submit"
                className="disabled:bg-primary-green bg-primary h-[3rem] w-full rounded-[50px] disabled:border-transparent"
                disabled={signupButtonDisabled}
              >
                Register
                {/* {loggingDnp ? <ClipLoader color={"#fff"} size={30} /> : "Submit"} */}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
