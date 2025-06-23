import { Award, Heart, Target, Users, Sparkles, HandHeart } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    {
      icon: <HandHeart className="w-6 h-6" />,
      number: "25+",
      label: "Years of Excellence",
      color: "text-brand-primary",
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "1000+",
      label: "Lives Transformed",
      color: "text-brand-secondary",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      number: "100%",
      label: "Patient Satisfaction",
      color: "text-brand-primary",
    },
  ];

  return (
    <section className="py-24 overflow-hidden bg-gradient-to-b from-white to-brand-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden">
              <Image
                src="/images/stocks/swanthana_1.jpg"
                alt="About Swanthana"
                width={600}
                height={700}
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
            </div>

            {/* Stats Strip */}
            <div className="absolute -bottom-10 left-10 right-10">
              <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`${stat.color} mb-2`}>{stat.icon}</div>
                    <div className="text-2xl font-bold text-brand-dark mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-brand-gray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 lg:mt-20">
            <div>
              <div className="badge badge-primary inline-flex mb-4">
                About Us
              </div>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">
                Transforming Lives Through
                <span className="text-brand-primary block mt-2">
                  Rehabilitation Excellence
                </span>
              </h2>
              <div className="space-y-4 text-brand-gray">
                <p>
                  Founded in 1998, Swanthana Rehabilitation Center has been at
                  the forefront of providing comprehensive rehabilitation
                  services with a holistic approach to healthcare.
                </p>
                <p>
                  Our state-of-the-art facility combines modern therapeutic
                  techniques with compassionate care to ensure optimal recovery
                  and enhanced quality of life for our patients.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-brand-gray-light/20">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  Our Approach
                </h3>
                <p className="text-brand-gray">
                  Patient-centered rehabilitation programs tailored to
                  individual needs
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-brand-gray-light/20">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  Our Promise
                </h3>
                <p className="text-brand-gray">
                  Dedicated support throughout the rehabilitation journey
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary">Learn More</button>
              <button className="btn-border">Our Facilities</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
