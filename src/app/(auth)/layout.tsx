import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-[29rem] bg-primary"></div>
      {children}
    </div>
  );
};

export default AuthLayout;
