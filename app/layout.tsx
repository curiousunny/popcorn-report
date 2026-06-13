import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import { PaperGrain } from "@/components/PaperGrain";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "POPCORN 2025 Impact Report",
  description:
    "Research shaping the future of maternal and child health. A pan-Canadian pediatric research network at 16 hospitals across Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunitoSans.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <PaperGrain />
        {children}
      </body>
    </html>
  );
}
