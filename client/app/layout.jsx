import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/common/Navbar";
import Footer from "@/src/components/common/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Swanthana Rehabilitation Center | Empowering Children & Families",
  description:
    "Swanthana is a leading rehabilitation center dedicated to transforming lives through physiotherapy, speech therapy, occupational therapy, and developmental therapy for children with special needs. Discover our holistic approach, expert team, and inspiring stories.",
  keywords:
    "Swanthana, Rehabilitation, Physiotherapy, Speech Therapy, Occupational Therapy, Developmental Therapy, Children, Special Needs, India, Inclusive Care, NGO",
  authors: [{ name: "Swanthana Rehabilitation Center" }],
  openGraph: {
    title: "Swanthana Rehabilitation Center",
    description:
      "Empowering children and families through holistic rehabilitation and inclusive care.",
    url: "https://swanthana.org",
    siteName: "Swanthana Rehabilitation Center",
    images: [
      {
        url: "/images/swanthana_hero.png",
        width: 1200,
        height: 630,
        alt: "Swanthana Rehabilitation Center",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
