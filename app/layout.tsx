import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";

const Basier = localfont({
  src: "/../public/fonts/Basier.ttf",
  variable: "--font-basier"
})

export const metadata: Metadata = {
  title: "Emails | Pocketsflow",
  description: "Email Builder for Pocketsflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={Basier.className}
      >
        {children}
      </body>
    </html>
  );
}