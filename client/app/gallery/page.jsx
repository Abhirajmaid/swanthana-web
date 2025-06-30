"use client";
import Image from "next/image";
import { useState } from "react";

// Example gallery images (replace with your own or fetch from API)
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    alt: "Therapy Session",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Child Smiling",
  },
  {
    src: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=600&q=80",
    alt: "Group Activity",
  },
  {
    src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    alt: "Rehab Center",
  },
  {
    src: "https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&w=600&q=80",
    alt: "Inclusive Classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&w=600&q=80",
    alt: "Therapist with Child",
  },
  {
    src: "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=600&q=80",
    alt: "Speech Therapy",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    alt: "Physiotherapy",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Play Area",
  },
  {
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    alt: "Founder",
  },
  {
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    alt: "Founder",
  },
  {
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    alt: "Founder",
  },

  // ...add more images as needed
];

export default function GalleryPage() {
  const [modal, setModal] = useState(null);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-[120px] md:py-[180px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
            alt="Gallery Hero"
            className="w-full h-full object-cover object-center"
            priority
            sizes="100vw"
            width={1500}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-brand-dark/60 to-white/80" />
        </div>
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg text-center">
            Gallery
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mb-0 drop-shadow text-center">
            Explore moments from our journey, events, therapies, and the smiles
            of our Swanthana family.
          </p>
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-2xl -z-1" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-brand-secondary/10 rounded-full blur-2xl -z-1" />
      </section>
      <section className="py-16 bg-white">
        {/* Responsive grid, keep original image aspect ratio and size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-2">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full rounded-2xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer flex items-center justify-center bg-[#f8fafc]"
              onClick={() => setModal(idx)}
              tabIndex={0}
              aria-label="View image"
              style={{ minHeight: "120px" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "unset",
                }}
                className="transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
      {/* Modal for full image */}
      {modal !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setModal(null)}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10"
              onClick={() => setModal(null)}
              aria-label="Close"
            >
              <span className="text-2xl font-bold text-brand-primary">
                &times;
              </span>
            </button>
            <Image
              src={galleryImages[modal].src}
              alt={galleryImages[modal].alt}
              width={900}
              height={600}
              className="w-full h-auto rounded-2xl object-contain bg-white"
              priority
            />
            <div className="text-center text-white mt-4">
              {galleryImages[modal].alt}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
