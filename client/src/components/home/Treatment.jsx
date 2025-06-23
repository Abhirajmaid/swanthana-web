import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Activity, Brain, MessageSquare, Users } from "lucide-react";

export default function Treatment({ variant = "default" }) {
  const icons = {
    Physiotherapy: Activity,
    "Speech Therapy": MessageSquare,
    "Occupational Therapy": Brain,
    "Developmental Therapy": Users,
  };

  const treatments = [
    {
      title: "Physiotherapy",
      slug: "physiotherapy",
      description:
        "Specialized physical rehabilitation and therapy. Our physiotherapy program is designed to restore movement and function when someone is affected by injury, illness, or disability. We use evidence-based techniques to help patients regain strength, flexibility, and independence.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      features: [
        "Musculoskeletal Rehabilitation",
        "Sports Injury",
        "Post-Surgery Care",
        "Pain Management",
        "Mobility Enhancement",
      ],
    },
    {
      title: "Speech Therapy",
      slug: "speech-therapy",
      description:
        "Communication and swallowing disorders treatment. Our speech therapy services help individuals improve their verbal and non-verbal communication skills, as well as address swallowing difficulties. We tailor our approach to each individual's unique needs.",
      image:
        "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80",
      features: [
        "Language Development",
        "Fluency Therapy",
        "Voice Disorders",
        "Articulation Therapy",
        "Swallowing Therapy",
      ],
    },
    {
      title: "Occupational Therapy",
      slug: "occupational-therapy",
      description:
        "Helping regain independence in daily activities. Our occupational therapy program focuses on enabling people to participate in the activities of everyday life. We assist with life skills, sensory integration, and cognitive rehabilitation.",
      image:
        "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80",
      features: [
        "Life Skills Training",
        "Sensory Integration",
        "Cognitive Rehabilitation",
        "Hand Therapy",
        "Adaptive Equipment Training",
      ],
    },
    {
      title: "Developmental Therapy",
      slug: "developmental-therapy",
      description:
        "Supporting children's developmental needs. Our developmental therapy program provides early intervention and support for children with developmental delays, focusing on motor skills, cognitive development, and social-emotional growth.",
      image:
        "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&q=80",
      features: [
        "Early Intervention",
        "Motor Skills",
        "Cognitive Development",
        "Social Skills Training",
        "Behavioral Support",
      ],
    },
  ];

  const renderCard = (treatment, isActive) => {
    const Icon = icons[treatment.title];

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
              {treatment.features[0]}
            </span>
          </div>

          <p className="text-brand-gray/80 text-sm mb-4">
            {treatment.description}
          </p>

          {/* Features as badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {treatment.features.map((feature, idx) => (
              <span
                key={idx}
                className="inline-block bg-brand-primary/10 text-brand-primary text-xs px-3 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <Link
              href={`/treatment/${treatment.slug}`}
              className="text-brand-primary font-medium text-sm group-hover:text-brand-primary/70 transition-colors flex items-center gap-2"
            >
              Learn More
              <span className="w-4 h-4 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
            <span className="text-xs text-brand-gray/60">View Treatment</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge badge-primary inline-flex mb-4">
            Our Treatments
          </div>
          <h2 className="text-4xl font-bold text-brand-dark mb-6">
            Specialized <span className="text-brand-primary">Treatment</span>{" "}
            Programs
          </h2>
          <p className="text-lg text-brand-gray">
            Comprehensive rehabilitation services tailored to individual needs
          </p>
        </div>

        <div className="relative -mx-4 sm:mx-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 1.8 },
              1024: { slidesPerView: 2 },
            }}
            className="treatment-slider !overflow-visible px-4 sm:px-12"
          >
            {treatments.map((treatment, index) => (
              <SwiperSlide key={index} className="py-12">
                {({ isActive }) => renderCard(treatment, isActive)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx global>{`
          .treatment-slider {
            padding: 1rem 0 4rem;
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
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .treatment-slider .swiper-button-next:after,
          .treatment-slider .swiper-button-prev:after {
            font-size: 1.2rem;
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
