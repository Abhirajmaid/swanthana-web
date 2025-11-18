import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Video() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const scrollerRef = useRef(null);

  const videos = [
    {
      type: "mp4",
      src: "/videos/swanthana.mp4",
      title: "Swanthana Overview",
      thumb: "/images/updatedimg/rehabilitation_and_lifeskills/Picture36.jpg",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/et9g9mOdCHE",
      title: "Swanthana Video 1",
      thumb: "https://img.youtube.com/vi/et9g9mOdCHE/hqdefault.jpg",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/y5oyMg27AUE",
      title: "Swanthana Video 2",
      thumb: "https://img.youtube.com/vi/y5oyMg27AUE/hqdefault.jpg",
    },
  ];

  // Auto-scroll thumbnails to create a moving, infinite carousel effect
  useEffect(() => {
    const container = scrollerRef.current;
    if (!container) return;
    let animationFrameId;
    let position = 0;
    let paused = false;

    const step = () => {
      if (!container) return;
      const segment = container.scrollWidth / 3; // rendering items thrice
      if (!paused) {
        position += 0.2; // slower speed
      }
      if (position >= segment) position -= segment; // seamless loop
      container.scrollLeft = position;
      animationFrameId = window.requestAnimationFrame(step);
    };

    animationFrameId = window.requestAnimationFrame(step);
    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      paused = false;
    };
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-background" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="badge badge-primary inline-flex mb-4">
            Watch Our Story
          </div>
          <h2 className="text-heading mb-6">
            See How We Make a{" "}
            <span className="text-brand-primary">Difference</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-[40px] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 group-hover:opacity-75 transition-opacity duration-300" />
          <img
            src={videos[activeVideo].thumb}
            alt={videos[activeVideo].title}
            className="w-full aspect-video object-cover"
          />
          <button
            className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            onClick={() => setShowVideo(true)}
            aria-label="Play Video"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
              <Play className="w-8 h-8 text-brand-primary ml-1" />
            </div>
          </button>
        </div>

        {/* Moving carousel of thumbnails (no scrollbar) */}
        <div className="mt-8 relative">
          {/* Arrows */}
          <button
            className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-white shadow hover:shadow-md border border-gray-200"
            onClick={() => scrollerRef.current?.scrollBy({ left: -240, behavior: "smooth" })}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-brand-primary" />
          </button>
          <button
            className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-white shadow hover:shadow-md border border-gray-200"
            onClick={() => scrollerRef.current?.scrollBy({ left: 240, behavior: "smooth" })}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-brand-primary" />
          </button>

          <div ref={scrollerRef} className="flex gap-4 overflow-x-hidden py-2 px-1">
            {[...videos, ...videos, ...videos].map((vid, idx) => (
              <button
                key={`${vid.src}-${idx}`}
                className={`shrink-0 w-60 aspect-video rounded-2xl overflow-hidden border transition-transform hover:scale-105 ${
                  idx % videos.length === activeVideo
                    ? "border-brand-primary"
                    : "border-transparent"
                }`}
                onClick={() => setActiveVideo(idx % videos.length)}
                aria-label={`Play ${vid.title}`}
              >
                <img src={vid.thumb} alt={vid.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for video */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative w-full max-w-3xl mx-4">
            <button
              className="absolute top-2 right-2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10"
              onClick={() => setShowVideo(false)}
              aria-label="Close"
            >
              <X className="w-6 h-6 text-brand-primary" />
            </button>
            {videos[activeVideo].type === "youtube" ? (
              <iframe
                src={`${videos[activeVideo].src}?autoplay=1&rel=0`}
                className="w-full aspect-video rounded-2xl bg-black"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={videos[activeVideo].title}
              />
            ) : (
              <video
                src={videos[activeVideo].src}
                controls
                autoPlay
                className="w-full aspect-video rounded-2xl bg-black"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
