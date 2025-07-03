import { Play, X } from "lucide-react";
import { useState } from "react";

export default function Video() {
  const [showVideo, setShowVideo] = useState(false);

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
            src="/images/stocks/swanthana_1.jpg"
            alt="Video Thumbnail"
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
            <video
              src="/videos/swanthana.mp4"
              controls
              autoPlay
              className="w-full aspect-video rounded-2xl bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}
