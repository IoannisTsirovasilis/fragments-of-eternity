import type { Metadata } from "next";
import "./globals.css";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import Navbar from "@/components/Navbar";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";
import { MedievalSharp } from "next/font/google";

const medievalSharp = MedievalSharp({
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Fragments of Eternity | A Journey into the Unknown | A Dungeons & Dragons Adventure Teaser",
  description:
    "Step into the land of Nulmaris, where ancient mysteries, forgotten legends, and untold adventures await. Explore a world rich in history and bound by fate, as you and your companions uncover the truths hidden beneath the surface. Prepare for an epic adventure that will challenge everything you know. Centuries Echoing Legends Eventually Shape The Ancient Ruins Around.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
        <body
          className={`${medievalSharp.className} antialiased bg-gray-800 text-white`}
        >
          <Navbar />
          <div className="min-h-screen bg-gray-800">{children}</div>
          <SubscribeSection />
          <Footer />
        </body>
      </ReCaptchaProvider>
    </html>
  );
}
