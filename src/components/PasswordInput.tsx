"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { ComponentProps, useState } from "react";
import { cn } from "../lib/utils";

const PasswordInput = ({ className, placeholder }: ComponentProps<"input">) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="space-y-2">
      <div className="relative">
        <Input type={showPassword ? "text" : "password"} placeholder={placeholder} className="pr-10" />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={cn("absolute top-0 right-0 h-full px-3 py-2 text-gray-400 hover:text-gray-600", className)}
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default PasswordInput;
