"use client";
import Navbar from "@/src/components/common/Navbar";
import Footer from "@/src/components/common/Footer";

export default function PrimaryLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
