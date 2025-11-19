import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NIYO BLESSINGTECH SERVICES - Empowering Rural Rwanda with Technology",
  description:
    "IT Services, Web Development, Digital Training, Photography & Equipment Supply in Nyamasheke, Rwanda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className="min-h-screen">
            <Navbar />

            {children}
            <Footer />
          </main>

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
