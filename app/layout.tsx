import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import Footer from "./footer";
import Header from "./header";

import "./globals.css";

const mainFont = Rubik({
  subsets: ["latin"],
  variable: "--font-main-font",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Health Tracker",
  description:
    "Health tracker that track all your food calories and eating routines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont.variable} font-sans`}>
        <main className="min-h-screen w-full flex flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
