import type { Metadata } from "next";
import { Fraunces, Poppins, Coming_Soon } from "next/font/google";
import { PaperGrain } from "@/components/PaperGrain";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const comingSoon = Coming_Soon({
  variable: "--font-coming-soon",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "POPCORN 2026 Impact Report",
  description:
    "Pandemic Readiness Research Shaping the Future of Maternal and Child Health. A pan-Canadian pediatric research network at 16 hospitals across Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${poppins.variable} ${comingSoon.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <PaperGrain />
        {children}
      </body>
    </html>
  );
}
