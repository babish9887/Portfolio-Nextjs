import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
  title: {
    default: "Babish Chaudhary | Web Developer Portfolio",
    template: "%s | Babish Chaudhary",
  },
  description:
    "Babish Chaudhary is a web developer specializing in MERN stack, Next.js, and modern web applications. View projects, skills, and contact details.",
  keywords: [
    "Babish Chaudhary",
    "Web Developer",
    "Next.js Developer",
    "MERN Stack",
    "React Developer",
    "Portfolio",
  ],
  authors: [{ name: "Babish Chaudhary" }],
  creator: "Babish Chaudhary",
  metadataBase: new URL("https://your-portfolio-domain.com"), // update if deployed
  openGraph: {
    title: "Babish Chaudhary | Web Developer Portfolio",
    description:
      "Portfolio of Babish Chaudhary – Web Developer skilled in Next.js, React, MERN stack, and modern UI development.",
    url: "https://your-portfolio-domain.com",
    siteName: "Babish Portfolio",
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "lTVEEfr7vgHhLB7OC2njkmLD4KUDFLYKhtHX2l_npqw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#ededed]`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
