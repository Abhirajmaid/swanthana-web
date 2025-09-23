import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Activity,
  Brain,
  MessageSquare,
  Users,
  Stethoscope,
} from "lucide-react";
import { treatments } from "@/src/data/treatments";
import SectionHeader from "@/src/components/common/SectionHeader";

export default function Treatment({ variant = "default" }) {
  const icons = {
    "De-Addiction Treatment": Activity,
    "Psychiatric Care": Brain,
    "Counseling & Therapy": MessageSquare,
    "Rehabilitation & Life Skills": Users,
  };

  const renderCard = (treatment, isActive) => {
    const Icon = icons[treatment.title] || Activity;

    return (
      <div
        className={`
          group relative overflow-hidden rounded-3xl
          transition-all duration-500 max-w-2xl mx-auto
          ${isActive ? "scale-105 shadow-2xl z-10" : "opacity-60"}
          mx-2 sm:mx-0
        `}
      >
        {/* Image takes full exposure */}
        <div className="relative h-[420px] sm:h-[480px] md:h-[520px]">
          <Image
            src={treatment.image}
            alt={treatment.title}
            fill
            className="object-cover"
            priority={isActive}
          />
          {/* Bottom overlay with concise content */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white/90 p-2 rounded-xl shadow">
                <Icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{treatment.title}</h3>
            </div>
            <p className="text-white/90 text-sm sm:text-base mb-4 line-clamp-2">
              {treatment.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {(treatment.highlights || treatment.features || [])
                .slice(0, 3)
                .map((feature, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-white/90 text-brand-primary text-xs px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
            </div>
            <div className="flex items-center justify-between">
              <Link
                href={`/treatment/${treatment.slug}`}
                className="btn-primary rounded-full px-5 py-2 text-sm shadow"
              >
                Learn More
              </Link>
              <span className="text-xs text-white/80">View Treatment</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <SectionHeader
          badge={{ icon: <Stethoscope />, text: "Our Treatments" }}
          title="Specialized"
          gradientText="Treatment Programs"
          description="Comprehensive rehabilitation services tailored to individual needs"
        />

        <div className="relative -mx-2 sm:mx-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1.1 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
            }}
            className="treatment-slider !overflow-visible px-2 sm:px-12"
          >
            {treatments.map((treatment, index) => (
              <SwiperSlide key={index} className="py-8 sm:py-12">
                {({ isActive }) => renderCard(treatment, isActive)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx global>{`
          .treatment-slider {
            padding: 1rem 0 3rem;
          }
          .treatment-slider .swiper-slide {
            transition: all 0.3s ease;
            transform-origin: center center;
          }
          .treatment-slider .swiper-slide-active {
            z-index: 10;
          }
          .treatment-slider .swiper-button-next,
          .treatment-slider .swiper-button-prev {
            color: #ae4887;
            background: white;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .treatment-slider .swiper-button-next:after,
          .treatment-slider .swiper-button-prev:after {
            font-size: 1.1rem;
          }
          .treatment-slider .swiper-pagination-bullet-active {
            background: #ae4887;
          }
          @media (max-width: 640px) {
            .treatment-slider .swiper-button-next,
            .treatment-slider .swiper-button-prev {
              display: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
