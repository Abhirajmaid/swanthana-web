import { navLinks } from "@/src/constants/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { X } from "lucide-react";
import { AlertTriangle, Brain, Smile, Activity } from "lucide-react";
import { disorderDetails as staticDisorderDetails } from "@/src/data/disorders";
import { useEffect, useState } from "react";
import { loadDisordersFromXlsx } from "@/src/lib/disordersLoader";
import SectionHeader from "@/src/components/common/SectionHeader";

// Build disorders from runtime data
function useDisorders() {
  const [details, setDetails] = useState(staticDisorderDetails);
  useEffect(() => {
    (async () => {
      const loaded = await loadDisordersFromXlsx();
      if (loaded && Object.keys(loaded).length) setDetails(loaded);
    })();
  }, []);
  return Object.entries(details)
    .filter(([, data]) => data.title !== "Emotional & Trauma Recovery")
    .map(([slug, data]) => ({
      ...data,
      href: `/disorders/${slug}`,
    }));
}

// Icon mapping for demo (customize as needed)
const disorderIcons = {
  "Autism Spectrum Disorder": Smile,
  "Cerebral Palsy": Activity,
  "Down Syndrome": Brain,
  ADHD: AlertTriangle,
};

function DisorderCard({ title, href, isActive, onLearnMore }) {
  const Icon = disorderIcons[title] || Brain;
  return (
    <div
      className={`
        group relative overflow-hidden rounded-3xl bg-white transition-all duration-500 max-w-2xl mx-auto flex flex-col
        border border-brand-primary/10
        ${
          isActive
            ? "scale-105 shadow-xl ring-1 ring-brand-primary/20 z-10"
            : "opacity-60"
        }
      `}
    >
      {/* Card Header with Icon */}
      <div className="relative h-32 flex items-center justify-center bg-gradient-to-tr from-brand-primary/10 to-brand-secondary/10">
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-brand-primary/10" />
        <div className="z-10 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
          <Icon className="w-8 h-8 text-brand-primary" />
        </div>
      </div>
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-brand-dark mb-2 text-center">
          {title}
        </h3>
        <div className="w-10 h-1 bg-brand-primary/20 rounded-full mx-auto mb-4" />
        <div className="flex-1" />
        {/* Action Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4">
          <button
            onClick={onLearnMore}
            className="btn-primary rounded-full px-6 py-2 font-semibold text-sm shadow hover:scale-105 transition-transform"
          >
            Learn More
          </button>
          <Link href={href} className="text-xs text-brand-primary/70 hover:underline">
            View Disorder Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Disorders() {
  const disorders = useDisorders();
  const [active, setActive] = useState(null);
  return (
    <section className="py-10 sm:py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <SectionHeader
          badge={{ icon: <Brain />, text: "Disorders We Address" }}
          title="Our"
          gradientText="Specialized Care"
          description="Comprehensive support for a wide range of developmental and neurological disorders"
        />
        <div className="relative -mx-2 sm:mx-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1.1 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
            }}
            className="disorder-slider !overflow-visible px-2 sm:px-12"
          >
            {disorders.map((disorder, index) => (
              <SwiperSlide key={disorder.href} className="py-8 sm:py-12">
                {({ isActive }) => (
                  <DisorderCard
                    title={disorder.title}
                    href={disorder.href}
                    isActive={isActive}
                    onLearnMore={() => setActive(disorder)}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {active && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center" onClick={() => setActive(null)}>
            <div className="bg-white max-w-2xl w-full mx-4 rounded-2xl shadow-xl relative" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-3 right-3 p-2 bg-gray-100 rounded-full" onClick={() => setActive(null)} aria-label="Close">
                <X className="w-5 h-5 text-brand-primary" />
              </button>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">{active.title}</h3>
                <p className="text-brand-gray mb-4">{active.description}</p>
                {active.highlights?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {active.highlights.slice(0, 8).map((h, i) => (
                      <span key={i} className="bg-brand-primary/10 text-brand-primary text-xs px-3 py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-3">
                  <Link href={active.href} className="btn-primary px-5 py-2 rounded-full">Open Full Page</Link>
                  <button onClick={() => setActive(null)} className="btn-border px-5 py-2 rounded-full">Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
        <style jsx global>{`
          .disorder-slider {
            padding: 1rem 0 3rem;
          }
          .disorder-slider .swiper-slide {
            transition: all 0.3s ease;
            transform-origin: center center;
          }
          .disorder-slider .swiper-slide-active {
            z-index: 10;
          }
          .disorder-slider .swiper-button-next,
          .disorder-slider .swiper-button-prev {
            color: #ae4887;
            background: white;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .disorder-slider .swiper-button-next:after,
          .disorder-slider .swiper-button-prev:after {
            font-size: 1.1rem;
          }
          .disorder-slider .swiper-pagination-bullet-active {
            background: #ae4887;
          }
          @media (max-width: 640px) {
            .disorder-slider .swiper-button-next,
            .disorder-slider .swiper-button-prev {
              display: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
