// app/layout.tsx - Root layout

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Parab - Developer & AI Enthusiast",
  description: "Building immersive experiences at the intersection of AI, web, and robotics",
  keywords: ["developer", "AI", "machine learning", "web development", "portfolio"],
  authors: [{ name: "Aryan Parab" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
