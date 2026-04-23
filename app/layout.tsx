import type { Metadata } from "next";
import { Fraunces, Source_Serif_4, Caveat } from "next/font/google";
import { PaperGrain } from "@/components/PaperGrain";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "POPCORN 2026 Impact Report",
  description:
    "A pan-Canadian pediatric research network studying children's and families' health at 16 hospitals across Canada. Funded by CIHR and CBRF.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSerif4.variable} ${caveat.variable} h-full`}
    >
      <body className="min-h-full antialiased">
          <PaperGrain />
          {children}
        </body>
    </html>
  );
}
