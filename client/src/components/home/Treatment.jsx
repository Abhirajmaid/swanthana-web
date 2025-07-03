import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Activity, Brain, MessageSquare, Users } from "lucide-react";
import { treatments } from "@/src/data/treatments";

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
        group relative overflow-hidden rounded-3xl bg-white
        transition-all duration-500 max-w-2xl mx-auto
        ${
          isActive
            ? "scale-105 shadow-xl ring-1 ring-brand-primary/20 z-10"
            : "opacity-50"
        }
        mx-2 sm:mx-0
      `}
      >
        {/* Card Header with Image */}
        <div className="relative h-48">
          <Image
            src={treatment.image}
            alt={treatment.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          {/* Floating Icon */}
          <div className="absolute -bottom-6 left-6 bg-white p-3 rounded-2xl shadow-lg border border-gray-100">
            <Icon className="w-8 h-8 text-brand-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-brand-dark">
              {treatment.title}
            </h3>
            <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
              {treatment.highlights?.[0] || treatment.features?.[0]}
            </span>
          </div>

          <p className="text-brand-gray/80 text-sm mb-4">
            {treatment.description}
          </p>

          {/* Features as badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(treatment.highlights || treatment.features || []).map(
              (feature, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-brand-primary/10 text-brand-primary text-xs px-3 py-1 rounded-full"
                >
                  {feature}
                </span>
              )
            )}
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <Link
              href={`/treatment/${treatment.slug}`}
              className="btn-primary rounded-full px-6 py-2 font-semibold text-sm shadow hover:scale-105 transition-transform"
            >
              Learn More
            </Link>
            <span className="text-xs text-brand-gray/60">View Treatment</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="badge badge-primary inline-flex mb-4">
            Our Treatments
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-brand-dark mb-4 sm:mb-6">
            Specialized <span className="text-brand-primary">Treatment</span>{" "}
            Programs
          </h2>
          <p className="text-base sm:text-lg text-brand-gray">
            Comprehensive rehabilitation services tailored to individual needs
          </p>
        </div>

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
