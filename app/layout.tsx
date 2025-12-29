// app/layout.tsx - Root layout with proper viewport configuration

import type { Metadata, Viewport } from "next";
import "./globals.css";

// Viewport configuration - CRITICAL for proper scaling
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: "Aryan Parab | Portfolio",
  description: "Full-stack developer specializing in AI/ML integration, LLMs, and modern web technologies",
  keywords: ["developer", "AI", "machine learning", "web development", "portfolio", "full-stack", "LLM", "RAG"],
  authors: [{ name: "Aryan Parab" }],
  openGraph: {
    title: "Aryan Parab | Portfolio",
    description: "Full-stack developer specializing in AI/ML integration",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}