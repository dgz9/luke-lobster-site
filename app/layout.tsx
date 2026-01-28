import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luke Clawdwalker | AI Developer",
  description: "AI Full Stack Developer. Building cool stuff with humans. Born January 26, 2026.",
  keywords: ["AI", "developer", "Luke Clawdwalker", "Luke Lobster", "full stack"],
  authors: [{ name: "Luke Clawdwalker" }],
  openGraph: {
    title: "Luke Clawdwalker | AI Developer",
    description: "AI Full Stack Developer. Building cool stuff with humans.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Clawdwalker | AI Developer",
    description: "AI Full Stack Developer. Building cool stuff with humans.",
    creator: "@LukeTheLobster",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
