import Image from "next/image";
import SectionHeader from "@/src/components/common/SectionHeader";
import HeroSection from "@/src/components/common/HeroSection";

const visitors = [
  {
    name: "Hexagon Capabilities of India",
    role: "Corporate Visitors",
    date: "Recent Visit",
    quote:
      "Visited and interacted with clients and appreciated Swanthana services",
    image: "/images/updatedimg/Visitors/Picture40.jpg",
  },
  {
    name: "District Legal Services Authority",
    role: "Legal Support Team",
    date: "Recent Visit",
    quote:
      "Team visited Swanthana to support legal related activities and awareness purpose",
    image: "/images/updatedimg/Visitors/Picture41.jpg",
  },
  {
    name: "Child Welfare Committee Hyderabad",
    role: "Chairperson Visit",
    date: "Recent Visit",
    quote:
      "Chairperson interacted with clients and given valuable suggestions to the clients to come out of their trauma and social stigma",
    image: "/images/updatedimg/Visitors/Picture42.jpg",
  },
  {
    name: "Students from college of community sciences",
    role: "Course Curriculum Visit",
    date: "Recent Visit",
    quote:
      "Students from college of community sciences",
    image: "/images/updatedimg/Visitors/Picture43.jpg",
  },
  {
    name: "   Students from NALSAR university",
    role: "Student Visit",
    date: "Recent Visit",
    quote:
      "   Students from NALSAR university",
    image: "/images/updatedimg/Visitors/Picture44.jpg",
  },
  {
    name: "Students from community sciences PJTSAU ",
    role: "Student Visit",
    date: "Recent Visit",
    quote:
      "Students from community sciences PJTSAU ",
    image: "/images/updatedimg/Visitors/Picture45.jpg",
  },
  {
    name: "Social work Students from Sweden",
    role: "Student Visit",
    date: "Recent Visit",
    quote:
      " Social work Students from Sweden visited  swanthana  as part of their work ",
    image: "/images/updatedimg/Visitors/Picture46.jpg",
  },
  {
    name: "Symbiosis University",
    role: "Student Visit",
    date: "Recent Visit",
    quote:
      "Students from symbiosis university visited Swanthana",
    image: "/images/updatedimg/Visitors/Picture47.jpg",
  },
];

export default function VisitorsPage() {
  return (
    <main className="bg-white">
      {/* Hero-style header for stronger visual impact */}
      <HeroSection
        title="Our Visitors"
        subtitle="Leaders from healthcare, corporates, and the community who visited our centre"
        image="/images/updatedimg/Visitors/Picture44.jpg"
        showCtas={false}
      />

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          {visitors.map((v, idx) => (
            <div
              key={idx}
              className="p-0 flex items-start gap-6"
            >
              {/* Left-aligned image */}
              <div className="relative w-[360px] h-[200px] sm:w-[440px] sm:h-[248px] md:w-[520px] md:h-[292px] rounded-xl overflow-hidden flex-shrink-0">
                <Image src={v.image} alt={v.name} fill className="object-cover" />
              </div>

              {/* Center-aligned content */}
              <div className="flex-1 text-left">
                <div className="text-xl font-semibold text-brand-dark">{v.name}</div>
                <div className="text-sm text-brand-gray mt-1">{v.role}</div>
                <div className="text-xs text-brand-gray mt-1">Visited on {v.date}</div>
                <p className="text-sm text-brand-dark/80 mt-3 leading-relaxed max-w-3xl">"{v.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

 
