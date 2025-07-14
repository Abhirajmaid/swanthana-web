import {
  Users,
  Heart,
  Award,
  Smile,
  Globe,
  UserCheck,
  Activity,
  BookOpen,
  Star,
  TrendingUp,
} from "lucide-react";

import Image from "next/image";
import { useState } from "react";
import SectionHeader from "@/src/components/common/SectionHeader";

export const impactTabs = [
  {
    label: "Overview",
    description:
      "At Swanthana, our impact is defined by the transformation of lives—women recovering from addiction, trauma, and mental illness. Through structured care, compassion, and commitment, we help them reintegrate with strength and dignity.",
    stats: [
      {
        icon: <Users className="w-7 h-7" />,
        number: "55+",
        label: "Women Rehabilitated",
        color: "bg-blue-100 text-blue-600",
        border: "border-blue-200",
      },
      {
        icon: <Heart className="w-7 h-7" />,
        number: "7+",
        label: "Disorders Treated",
        color: "bg-pink-100 text-pink-600",
        border: "border-pink-200",
      },
      {
        icon: <Award className="w-7 h-7" />,
        number: "1+",
        label: "Year of Service",
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
      "Swanthana began in Hyderabad, but our mission is expanding. Through local partnerships and word-of-mouth referrals, we are creating a safe space for women in need of mental health and addiction recovery services across Telangana.",
    stats: [
      {
        icon: <Globe className="w-7 h-7" />,
        number: "1",
        label: "Center in Hyderabad",
        color: "bg-indigo-100 text-indigo-600",
        border: "border-indigo-200",
      },
      {
        icon: <UserCheck className="w-7 h-7" />,
        number: "10+",
        label: "Medical & Support Staff",
        color: "bg-green-100 text-green-600",
        border: "border-green-200",
      },
      {
        icon: <Activity className="w-7 h-7" />,
        number: "60+",
        label: "Sessions/Month",
        color: "bg-orange-100 text-orange-600",
        border: "border-orange-200",
      },
      {
        icon: <BookOpen className="w-7 h-7" />,
        number: "5+",
        label: "Awareness Events",
        color: "bg-cyan-100 text-cyan-600",
        border: "border-cyan-200",
      },
    ],
  },
  {
    label: "Recognition",
    description:
      "Though young, Swanthana is gaining recognition through real success stories, family testimonials, and collaborations with health professionals who trust our care model.",
    stats: [
      {
        icon: <Award className="w-7 h-7" />,
        number: "5+",
        label: "Public Mentions",
        color: "bg-yellow-100 text-yellow-600",
        border: "border-yellow-200",
      },
      {
        icon: <Star className="w-7 h-7" />,
        number: "4.9/5",
        label: "Average Family Rating",
        color: "bg-purple-100 text-purple-600",
        border: "border-purple-200",
      },
      {
        icon: <Smile className="w-7 h-7" />,
        number: "98%",
        label: "Positive Recovery Rate",
        color: "bg-emerald-100 text-emerald-600",
        border: "border-emerald-200",
      },
      {
        icon: <Users className="w-7 h-7" />,
        number: "20+",
        label: "Partner Referrals",
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
            <div className="relative w-[350px] md:w-full max-w-md md:h-[700px] h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white/80">
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
            <SectionHeader
              badge={{ icon: <TrendingUp />, text: "Our Impact" }}
              title="Transforming"
              gradientText="Lives"
              description="Swanthana is more than a center—it's a movement for hope, inclusion, and lifelong growth. Discover how our programs, people, and partnerships are making a difference."
              alignment="left"
            />
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
