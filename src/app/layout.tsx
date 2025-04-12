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
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
