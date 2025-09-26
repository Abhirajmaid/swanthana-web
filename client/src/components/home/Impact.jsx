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
import SectionHeader from "@/src/components/common/SectionHeader";

export const impactTabs = [
  {
    label: "Overview",
    description:
      "At Swanthana, our impact is defined by the transformation of lives—women recovering from addiction, trauma, and mental illness. Through structured care, compassion, and commitment, we help them reintegrate with strength and dignity.",
    stats: [
      {
        icon: <Award className="w-7 h-7" />,
        number: "2+ years",
        label: "of Service",
        color: "bg-yellow-100 text-yellow-600",
        border: "border-yellow-200",
      },
      {
        icon: <Heart className="w-7 h-7" />,
        number: "164",
        label: "Members Treated",
        color: "bg-pink-100 text-pink-600",
        border: "border-pink-200",
      },
      {
        icon: <Users className="w-7 h-7" />,
        number: "97",
        label: "Addiction Cases",
        color: "bg-blue-100 text-blue-600",
        border: "border-blue-200",
      },
      {
        icon: <Activity className="w-7 h-7" />,
        number: "67",
        label: "Psychiatric Cases",
        color: "bg-emerald-100 text-emerald-600",
        border: "border-emerald-200",
      },
    ],
  },
];

export default function Impact() {

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
                src="/images/updatedimg/councelling_and_therepy.jpg"
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
            {/* Content */}
            <div>
              <p className="text-brand-gray mb-8">
                {impactTabs[0].description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {impactTabs[0].stats.map((stat, idx) => (
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
