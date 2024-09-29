import type { Metadata } from "next";
import {Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"], variable: "--font-inter"});
const ibmPlexSarif = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-ibm-plex-sarif"
});

export const metadata: Metadata = {
  title: "SF Bank",
  description: "Modern SF Banking platform for everyone.",
  icons: {
    icon: './public/icons/logo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSarif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
