import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIC Platform",
  description: "Bright Interpreting Connect — Built by StarBound · DEVGEP+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}