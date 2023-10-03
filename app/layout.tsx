import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Providers from "@/providers/Providers";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Barak Olshevizky",
  description: "Barak Olshevizky's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
