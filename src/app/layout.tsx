import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shri Sanvariya Taxi Service | Indore's Trusted Taxi Service",
  description:
    "24x7 Taxi Service in Indore. Airport Pickup & Drop, Railway Station, Outstation, Wedding, Corporate & All India Tour.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
