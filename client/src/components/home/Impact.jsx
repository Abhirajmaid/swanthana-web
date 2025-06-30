import {
  Heart,
  Users,
  Award,
  Smile,
  UserCheck,
  Activity,
  BookOpen,
  Globe,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const impactTabs = [
  {
    label: "Overview",
    description:
      "At Swanthana, our impact is measured not just in numbers, but in the lives we transform every day. Through our holistic programs, expert team, and community outreach, we empower children and families to achieve their fullest potential.",
    stats: [
      {
        icon: <Users className="w-7 h-7" />,
        number: "82000+",
        label: "Lives Touched",
        color: "bg-blue-100 text-blue-600",
        border: "border-blue-200",
      },
      {
        icon: <Heart className="w-7 h-7" />,
        number: "15+",
        label: "Specialized Programs",
        color: "bg-pink-100 text-pink-600",
        border: "border-pink-200",
      },
      {
        icon: <Award className="w-7 h-7" />,
        number: "25+",
        label: "Years of Service",
        color: "bg-yellow-100 text-yellow-600",
        border: "border-yellow-200",
      },
      {
        icon: <Smile className="w-7 h-7" />,
        number: "100%",
        label: "Family Satisfaction",
        color: "bg-emerald-100 text-emerald-600",
        border: "border-emerald-200",
      },
    ],
  },
  {
    label: "Our Reach",
    description:
      "With a growing network of centers and outreach programs, Swanthana is making a difference across India. Our inclusive approach ensures that children from all backgrounds receive the care and support they deserve.",
    stats: [
      {
        icon: <Globe className="w-7 h-7" />,
        number: "15+",
        label: "Centers Nationwide",
        color: "bg-indigo-100 text-indigo-600",
        border: "border-indigo-200",
      },
      {
        icon: <UserCheck className="w-7 h-7" />,
        number: "120+",
        label: "Expert Staff",
        color: "bg-green-100 text-green-600",
        border: "border-green-200",
      },
      {
        icon: <Activity className="w-7 h-7" />,
        number: "2000+",
        label: "Therapy Sessions/Month",
        color: "bg-orange-100 text-orange-600",
        border: "border-orange-200",
      },
      {
        icon: <BookOpen className="w-7 h-7" />,
        number: "50+",
        label: "Community Workshops",
        color: "bg-cyan-100 text-cyan-600",
        border: "border-cyan-200",
      },
    ],
  },
  {
    label: "Recognition",
    description:
      "Our commitment to excellence has been recognized by leading organizations and the families we serve. We are proud to be a trusted partner in rehabilitation and inclusive care.",
    stats: [
      {
        icon: <Award className="w-7 h-7" />,
        number: "10+",
        label: "National Awards",
        color: "bg-yellow-100 text-yellow-600",
        border: "border-yellow-200",
      },
      {
        icon: <Star className="w-7 h-7" />,
        number: "4.9/5",
        label: "Average Rating",
        color: "bg-purple-100 text-purple-600",
        border: "border-purple-200",
      },
      {
        icon: <Smile className="w-7 h-7" />,
        number: "98%",
        label: "Positive Outcomes",
        color: "bg-emerald-100 text-emerald-600",
        border: "border-emerald-200",
      },
      {
        icon: <Users className="w-7 h-7" />,
        number: "500+",
        label: "Community Partners",
        color: "bg-blue-100 text-blue-600",
        border: "border-blue-200",
      },
    ],
  },
];

export default function Impact() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-24 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/10 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md h-[700px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white/80">
              <Image
                src="/images/stocks/swanthana_1.jpg"
                alt="Impact Illustration"
                fill
                className="object-cover h-full w-full"
                priority
              />
            </div>
          </div>
          {/* Right: Stats & Tabs */}
          <div className="flex-1">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-semibold text-sm tracking-wide mb-2">
                Our Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
                Transforming <span className="text-brand-primary">Lives</span>{" "}
                with Compassion &amp; Care
              </h2>
              <p className="text-brand-gray text-base md:text-lg mb-6 max-w-xl">
                Swanthana is more than a center—it's a movement for hope,
                inclusion, and lifelong growth. Discover how our programs,
                people, and partnerships are making a difference.
              </p>
            </div>
            {/* Tabs */}
            <div className="mb-8 flex flex-wrap gap-3">
              {impactTabs.map((tab, idx) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all border ${
                    activeTab === idx
                      ? "bg-brand-primary text-white border-brand-primary shadow"
                      : "bg-white text-brand-primary border-brand-primary/20 hover:bg-brand-primary/10"
                  }`}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/* Tab Content */}
            <div>
              <p className="text-brand-gray mb-8">
                {impactTabs[activeTab].description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {impactTabs[activeTab].stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center justify-center rounded-2xl border ${stat.border} bg-white shadow-md hover:shadow-xl transition-all duration-300 py-8 px-4 group`}
                  >
                    <div
                      className={`mb-4 p-3 rounded-full ${stat.color} flex items-center justify-center shadow`}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-extrabold text-brand-primary mb-1 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-base font-medium text-brand-dark">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
