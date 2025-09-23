import Image from "next/image";
import SectionHeader from "@/src/components/common/SectionHeader";

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
    name: "Student Internships",
    role: "Course Curriculum Visit",
    date: "Recent Visit",
    quote:
      "Student's internships and visiting Swanthana as part of their course curriculum",
    image: "/images/updatedimg/Visitors/Picture43.jpg",
  },
  {
    name: "College of Community Sciences",
    role: "Student Visit",
    date: "Recent Visit",
    quote:
      "Students from college of community sciences",
    image: "/images/updatedimg/Visitors/Picture44.jpg",
  },
  {
    name: "NALSAR University",
    role: "Student Visit",
    date: "Recent Visit",
    quote:
      "Students from NALSAR university",
    image: "/images/updatedimg/Visitors/Picture45.jpg",
  },
  {
    name: "Community Sciences PJTSAU",
    role: "Student Visit",
    date: "Recent Visit",
    quote:
      "Students from community sciences PJTSAU",
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
      <section className="pt-[180px] pb-12 bg-brand-light/20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Our Visitors"
            subtitle="Leaders from healthcare, corporates and the community who visited our centre"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          {visitors.map((v, idx) => (
            <div
              key={idx}
              className="p-0 flex items-start gap-6"
            >
              {/* Left-aligned image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl overflow-hidden flex-shrink-0">
                <Image src={v.image} alt={v.name} fill className="object-cover" />
              </div>

              {/* Center-aligned content */}
              <div className="flex-1 text-left">
                <div className="text-xl font-semibold text-brand-dark">{v.name}</div>
                <div className="text-sm text-brand-gray mt-1">{v.role}</div>
                <div className="text-xs text-brand-gray mt-1">Visited on {v.date}</div>
                <p className="text-sm text-brand-dark/80 mt-3 leading-relaxed max-w-3xl">“{v.quote}”</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

 
