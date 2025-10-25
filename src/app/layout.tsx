import type { Metadata } from "next";
import { Inter, Georgia } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const georgia = Georgia({
  variable: "--font-georgia",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Therosa Counseling",
  description: "Professional counseling services specializing in mental health support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${georgia.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
