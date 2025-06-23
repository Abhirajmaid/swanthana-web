import { Heart, Users, Award, Smile } from "lucide-react";
import Image from "next/image";

export default function Impact() {
  const impactStats = [
    {
      icon: <Users className="w-7 h-7" />,
      number: "5000+",
      label: "Lives Touched",
      color: "bg-blue-100 text-blue-600",
      border: "border-blue-200",
    },
    {
      icon: <Heart className="w-7 h-7" />,
      number: "15+",
      label: "Programs",
      color: "bg-pink-100 text-pink-600",
      border: "border-pink-200",
    },
    {
      icon: <Award className="w-7 h-7" />,
      number: "25+",
      label: "Years Service",
      color: "bg-yellow-100 text-yellow-600",
      border: "border-yellow-200",
    },
    {
      icon: <Smile className="w-7 h-7" />,
      number: "100%",
      label: "Satisfaction",
      color: "bg-emerald-100 text-emerald-600",
      border: "border-emerald-200",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/10 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white/80">
              <Image
                src="/images/impact-vector.svg"
                alt="Impact Illustration"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
          {/* Right: Stats */}
          <div className="flex-1">
            <div className="mb-4">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-semibold text-sm tracking-wide mb-2">
                Our Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
                Transforming <span className="text-brand-primary">Lives</span>{" "}
                with Compassion &amp; Care
              </h2>
              <p className="text-brand-gray text-base md:text-lg mb-8 max-w-xl">
                At Swanthana, we are dedicated to making a real difference. Our
                programs, people, and passion have touched thousands of lives,
                bringing hope, healing, and happiness to families and
                communities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {impactStats.map((stat, idx) => (
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
    </section>
  );
}
