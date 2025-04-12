import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-[38rem]"></div>
      {children}
    </div>
  );
};

export default AuthLayout;
