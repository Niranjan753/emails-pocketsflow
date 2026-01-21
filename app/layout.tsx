import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";

const Basier = localfont({
  variable: "--font-basier",
  src: "../public/fonts/Basier.ttf",
});
export const metadata: Metadata = {
  title: "Emails | Pocketsflow",
  description: "Email templates for pocketsflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Basier.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
