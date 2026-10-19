import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";

const headline = Plus_Jakarta_Sans({
  variable: "--font-jakart-sans", // Check exact variable name!
  subsets: ["latin"],
});

const body = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paw Haven",
  description: "Cute pet shop frontend only",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // MUST include both variables in className here:
      className={`${body.variable} ${headline.variable} h-full antialiased`}
    >
      <body className="min-h-full suppressHydrationWarning">{children}</body>
    </html>
  );
}
