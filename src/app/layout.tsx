import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Gold Peptides - Personalized Health & Wellness",
  description: "Premium prescriptions at the lowest prices. GLP-1s, weight loss, intimacy health, daily wellness, and hair growth solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${oswald.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
