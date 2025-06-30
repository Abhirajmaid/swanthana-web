import { Play } from "lucide-react";

export default function Video() {
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

          <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
              <Play className="w-8 h-8 text-brand-primary ml-1" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
