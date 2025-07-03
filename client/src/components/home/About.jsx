import { HandHeart, Users, Sparkles } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    {
      icon: <HandHeart className="w-6 h-6" />,
      number: "55+",
      label: "Women Rehabilitated",
      color: "text-brand-primary",
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "7+",
      label: "Conditions Treated",
      color: "text-brand-secondary",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      number: "1 Year",
      label: "of Service",
      color: "text-brand-primary",
    },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-b from-white to-brand-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden">
              <Image
                src="/images/stocks/swanthana_1.jpg"
                alt="About Swanthana"
                width={600}
                height={700}
                className="w-full h-[300px] xs:h-[400px] sm:h-[500px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
            </div>

            {/* Stats Strip */}
            <div className="absolute -bottom-8 left-2 right-2 sm:-bottom-10 sm:left-10 sm:right-10">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 grid grid-cols-3 gap-4 sm:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`${stat.color} mb-2`}>{stat.icon}</div>
                    <div className="text-lg sm:text-2xl font-bold text-brand-dark mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-brand-gray">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 sm:space-y-8 lg:mt-20">
            <div>
              <div className="badge badge-primary inline-flex mb-4">
                About Us
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-brand-dark mb-4 sm:mb-6">
                Empowering Women through
                <span className="text-brand-primary block mt-2">
                  Compassionate Rehabilitation
                </span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-brand-gray">
                <p>
                  Swanthana is a women-exclusive de-addiction and counseling
                  center located in Hyderabad. Founded in May 2023 by Ms.
                  Manjula Mummula and Dr. Mamatha Raghuveer Achanta, Swanthana
                  was created to address the alarming gap in women-centered
                  mental health services.
                </p>
                <p>
                  Our mission is to restore hope, dignity, and health for women
                  facing challenges like addiction, schizophrenia, dementia, and
                  trauma through evidence-based therapies and holistic support.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-brand-gray-light/20">
                <h3 className="text-lg sm:text-xl font-semibold text-brand-dark mb-2 sm:mb-3">
                  Our Approach
                </h3>
                <p className="text-brand-gray text-sm sm:text-base">
                  Personalized care plans, medical checkups, psychiatric
                  treatment, and daily counseling
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-brand-gray-light/20">
                <h3 className="text-lg sm:text-xl font-semibold text-brand-dark mb-2 sm:mb-3">
                  Our Commitment
                </h3>
                <p className="text-brand-gray text-sm sm:text-base">
                  Safe recovery, social reintegration, and long-term well-being
                  for every woman
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button className="btn-primary w-full sm:w-auto">
                Learn More
              </button>
              <button className="btn-border w-full sm:w-auto">
                Our Facilities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
