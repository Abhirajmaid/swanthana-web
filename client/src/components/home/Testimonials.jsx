import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const testimonials = [
  {
    name: "Parent of a 38-year-old",
    avatar: "/images/avatar.jpg",
    text: "My daughter had schizophrenia for 8 years and struggled with hallucinations and daily life. After 3 months of treatment at Swanthana, she recovered and is now happily living with her family. We are deeply grateful to the Swanthana team.",
  },
  {
    name: "Daughter of a patient",
    avatar: "/images/avatar.jpg",
    text: "My mother was suffering from dementia and we had seen many doctors over 2 years. After 90 days at Swanthana, she recovered and is now actively participating in family life. Thank you Swanthana team!",
  },
  {
    name: "Father of a young woman",
    avatar: "/images/avatar.jpg",
    text: "I had joined my daughter in many rehab centers for drug and alcohol addiction, but she never recovered—until Swanthana. Now she’s living happily. I am thankful to Manjula ma’am and the team for their support.",
  },
  {
    name: "Sibling of a patient",
    avatar: "/images/avatar.jpg",
    text: "My sister had schizophrenia from the age of 15. When we came to Swanthana, we were impressed with the environment, classes, and care. Manjula was very warm and treated us like family. I highly recommend Swanthana.",
  },
  {
    name: "Caregiver",
    avatar: "/images/avatar.jpg",
    text: "My mother had schizophrenia. After one month at Swanthana, she returned to her baseline. The care and attention were exceptional. We are so thankful for the team's efforts.",
  },
  {
    name: "Son of a patient",
    avatar: "/images/avatar.jpg",
    text: "My mother had a fall and was in critical condition with a head wound and liver infection. After 3 months at Swanthana, she recovered fully. We appreciated the regular updates and professional treatment.",
  },
  {
    name: "Parent of a 22-year-old",
    avatar: "/images/avatar.jpg",
    text: "My daughter was addicted to alcohol and tobacco. A doctor recommended Swanthana, and she has since recovered, resumed her studies, and is now leading a normal life. Thank you Swanthana Rehab.",
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="bg-white rounded-2xl border border-brand-primary/10 shadow-sm p-6 flex flex-col justify-between min-h-[220px] h-full">
      <p className="text-brand-dark mb-6 line-clamp-5">{t.text}</p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center overflow-hidden">
          <Image
            src={t.avatar}
            alt={t.name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <span className="font-bold text-brand-dark uppercase text-sm">
          {t.name}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Split testimonials into two rows
  const mid = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, mid);
  const row2 = testimonials.slice(mid);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-brand-primary text-center mb-2">
          82000+ <span className="text-brand-dark">Lives Touched</span>
        </h2>
        <p className="text-lg text-brand-gray text-center mb-12">
          Hear from our patients and their families
        </p>
        <div className="space-y-10">
          {/* First row - infinite smooth scroll left to right */}
          <div className="overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={24}
              loop={true}
              speed={10000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              allowTouchMove={false}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!overflow-visible"
              style={{
                "--swiper-autoplay-speed": "linear",
                transitionTimingFunction: "linear",
              }}
            >
              {row1.concat(row1).map((t, idx) => (
                <SwiperSlide key={idx} className="h-full flex">
                  <TestimonialCard t={t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Second row - infinite smooth scroll right to left */}
          <div className="overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={24}
              loop={true}
              speed={10000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
                pauseOnMouseEnter: true,
              }}
              allowTouchMove={false}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!overflow-visible"
              style={{
                "--swiper-autoplay-speed": "linear",
                transitionTimingFunction: "linear",
              }}
            >
              {row2.concat(row2).map((t, idx) => (
                <SwiperSlide key={idx} className="h-full flex">
                  <TestimonialCard t={t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
