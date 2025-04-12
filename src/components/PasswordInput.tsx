"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { type ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

const PasswordInput = forwardRef<HTMLInputElement, ComponentProps<"input">>(({ className, placeholder, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="space-y-2">
      <div className="relative">
        <Input type={showPassword ? "text" : "password"} placeholder={placeholder} className={cn("pr-10", className)} ref={ref} {...props} />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute top-0 right-0 h-full w-fit px-3 py-2 hover:bg-transparent"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeIcon className="h-4 w-4" /> : <EyeOffIcon className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
