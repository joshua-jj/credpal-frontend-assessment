import { Toaster } from "@/components/ui/sonner";
import Providers from "@/providers";
import type { Metadata } from "next";
import { Suspense } from "react";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beam",
  description: "Credpal frontend assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Suspense>{children}</Suspense>
          <Toaster
            position="top-right"
            toastOptions={{
              unstyled: true,
              classNames: {
                error: "bg-red-500 text-white w-[20rem] p-2 rounded flex items-center gap-2 h-[3.5rem]",
                success: "bg-green-500 text-white w-[20rem] p-2 rounded flex items-center gap-2 h-[3.5rem]",
                warning: "bg-yellow-500 text-white w-[20rem] p-2 rounded flex items-center gap-2 h-[3.5rem]",
                info: "bg-blue-500 text-white w-[20rem] p-2 rounded flex items-center gap-2 h-[3.5rem]",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
