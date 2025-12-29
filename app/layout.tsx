// app/layout.tsx - Enhanced layout with multiple zoom fixes

import type { Metadata, Viewport } from "next";
import "./globals.css";

// VIEWPORT CONFIGURATION - Multiple approaches
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
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
  // Prevent search engines from caching old version
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ fontSize: '16px' }}>
      <head>
        {/* Additional viewport meta tag (belt and suspenders approach) */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, user-scalable=yes, viewport-fit=cover" />
        
        {/* Prevent zoom on iOS */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* Favicon support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        
        {/* Preconnect to font sources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" style={{ fontSize: '16px', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  );
}