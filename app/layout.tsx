import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import MagneticCursor from "@/components/MagneticCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hearing Aid Nepal",
  description: "Rediscover Sound, Reconnect Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <div className="noise-overlay"></div>
        <MagneticCursor />
        <SmoothScrolling>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
