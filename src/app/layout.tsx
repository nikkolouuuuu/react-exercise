import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

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
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={'h-[100vh] bg-[hsl(180,_52%,_96%)] font-["Spartan"] text-[15px]'}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
