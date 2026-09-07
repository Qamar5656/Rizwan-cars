import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex Drive | Premium Car Rental",
  description: "Premium and reliable car rentals for every journey. Verified models, transparent tariffs, and 24/7 priority roadside dispatch.",
  keywords: "car rental, premium cars, rent a car, Apex Drive, chauffeur, self drive",
  openGraph: {
    title: "Apex Drive | Premium Car Rental",
    description: "From economical city drives to luxury adventures. 100% Guaranteed Model Dispatch.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        
        {/* Floating WhatsApp Action Button */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          <WhatsAppButton
            phoneNumber="923174248579"
            message="Hello Apex Drive, I want to rent a car"
            className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#22C35E] text-on-secondary flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all transform hover:scale-110 active:scale-95"
          >
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-error border-2 border-surface-container-lowest"></span>
            <span className="material-symbols-outlined text-[30px]">chat</span>
          </WhatsAppButton>
        </div>
      </body>
    </html>
  );
}
