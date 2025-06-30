import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Anannya Gavade",
    avatar: "/avatars/avatar1.svg",
    text: "I did not want to go to the rehab center after the accident being anxious, but Swanthana was helpful. It is all very organized and the staff are very friendly and did not rush me through the process of each treatment. It was great to have sessions with a qualified physical therapist.",
  },
  {
    name: "Alok Paranjape",
    avatar: "/avatars/avatar2.svg",
    text: "At first, my brother refused to go to rehab, but the staff at Swanthana changed his mind and he liked their optimism and professionalism. They developed a unique treatment plan that would meet his demands and special needs. It was really gratifying to see his progress.",
  },
  {
    name: "Alok Paranjape",
    avatar: "/avatars/avatar2.svg",
    text: "At first, my brother refused to go to rehab, but the staff at Swanthana changed his mind and he liked their optimism and professionalism. They developed a unique treatment plan that would meet his demands and special needs. It was really gratifying to see his progress.",
  },
  {
    name: "Alok Paranjape",
    avatar: "/avatars/avatar2.svg",
    text: "At first, my brother refused to go to rehab, but the staff at Swanthana changed his mind and he liked their optimism and professionalism. They developed a unique treatment plan that would meet his demands and special needs. It was really gratifying to see his progress.",
  },
  {
    name: "Alok Paranjape",
    avatar: "/avatars/avatar2.svg",
    text: "At first, my brother refused to go to rehab, but the staff at Swanthana changed his mind and he liked their optimism and professionalism. They developed a unique treatment plan that would meet his demands and special needs. It was really gratifying to see his progress.",
  },
  {
    name: "Alok Paranjape",
    avatar: "/avatars/avatar2.svg",
    text: "At first, my brother refused to go to rehab, but the staff at Swanthana changed his mind and he liked their optimism and professionalism. They developed a unique treatment plan that would meet his demands and special needs. It was really gratifying to see his progress.",
  },
  {
    name: "Alok Paranjape",
    avatar: "/avatars/avatar2.svg",
    text: "At first, my brother refused to go to rehab, but the staff at Swanthana changed his mind and he liked their optimism and professionalism. They developed a unique treatment plan that would meet his demands and special needs. It was really gratifying to see his progress.",
  },
  {
    name: "Sandeep Koul",
    avatar: "/avatars/avatar2.svg",
    text: "My daughter was not able to handle the emotional part of her injury together with the physical part which she also had to endure. All the therapists I met at Swanthana were professional and knowledgeable but what made a real impression was how caring they were.",
  },
  {
    name: "Sweta Deshmukh",
    avatar: "/avatars/avatar3.svg",
    text: "First of all the environment at Swanthana was very welcoming and friendly, I did not even feel awkward or uncomfortable when I first got there. The equipment is advanced and the staff are professional and well informed. I also liked the usage of different games and interesting tasks.",
  },
  {
    name: "Kanchan Gadka",
    avatar: "/avatars/avatar3.svg",
    text: "Of all the places, Swanthana has been a place where people do care for your recovery and get well soon. The therapists are experienced and ask the patient and family for feedback at every stage.",
  },
  // Add more testimonials if needed for better carousel effect
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
