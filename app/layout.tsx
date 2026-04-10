import { Outfit, Afacad } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
});

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${afacad.variable}`}>{children}</body>
    </html>
  );
}