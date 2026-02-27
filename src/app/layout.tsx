import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "dowozimy.net — White Glove Delivery w Europie",
  description:
    "Profesjonalna dostawa i montaż mebli w całej Europie. Transport, wniesienie i montaż z gwarancją bezpieczeństwa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
