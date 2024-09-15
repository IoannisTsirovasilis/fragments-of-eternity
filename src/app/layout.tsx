import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReCaptchaProvider } from "next-recaptcha-v3";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
        >
          {children}
        </body>
      </ReCaptchaProvider>
    </html>
  );
}
