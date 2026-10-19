import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "International OTP API Starter",
  description: "A starter dashboard for an authorized OTP verification service."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
