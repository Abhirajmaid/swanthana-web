import { navLinks } from "@/src/constants/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { AlertTriangle, Brain, Smile, Activity } from "lucide-react";
import { disorderDetails } from "@/src/data/disorders";

// Build disorders array from disorderDetails keys
const disorders = Object.entries(disorderDetails).map(([slug, data]) => ({
  ...data,
  href: `/disorders/${slug}`,
}));

// Icon mapping for demo (customize as needed)
const disorderIcons = {
  "Autism Spectrum Disorder": Smile,
  "Cerebral Palsy": Activity,
  "Down Syndrome": Brain,
  ADHD: AlertTriangle,
};

function DisorderCard({ title, href, isActive }) {
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
          <Link
            href={href}
            className="btn-primary rounded-full px-6 py-2 font-semibold text-sm shadow hover:scale-105 transition-transform"
          >
            Learn More
          </Link>
          <span className="text-xs text-brand-gray/60">View Disorder</span>
        </div>
      </div>
    </div>
  );
}

export default function Disorders() {
  return (
    <section className="py-10 sm:py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="badge badge-primary inline-flex mb-4">
            Disorders We Address
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-brand-dark mb-4 sm:mb-6">
            <span className="text-brand-primary">Disorders</span> We Address
          </h2>
          <p className="text-base sm:text-lg text-brand-gray">
            Comprehensive support for a wide range of developmental and
            neurological disorders.
          </p>
        </div>
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
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
