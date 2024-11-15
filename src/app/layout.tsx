import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Coding Exercise",
  description: "Generated for coding exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={'antialiased h-[100vh] bg-[hsl(180,_52%,_96%)] font-["Spartan"]'}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
