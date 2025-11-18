import { HandHeart, Users, Sparkles, Info, Brain, Award } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/src/components/common/SectionHeader";

export default function About() {
  const stats = [
    {
      icon: <Award className="w-6 h-6" />,
      number: "2+ years",
      label: "of Service",
      color: "text-brand-primary",
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "164",
      label: "Members Treated",
      color: "text-brand-secondary",
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      number: "97",
      label: "Addiction Cases",
      color: "text-brand-primary",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      number: "67",
      label: "Psychiatric Cases",
      color: "text-brand-primary",
    },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-b from-white to-brand-background">
      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        {/* Content Section */}
        <div className="text-center space-y-8 sm:space-y-12">
          <SectionHeader
            badge={{ icon: <Info />, text: "About Us" }}
            title="Empowering Women through"
            gradientText="Compassionate Rehabilitation"
            useGradient={false}
            description="Swanthana is a women-exclusive de-addiction and counseling center located in Hyderabad. Founded in May 2023 by Ms. Manjula Mummula and Dr. Mamatha Raghuveer Achanta, Swanthana was created to address the alarming gap in women-centered mental health services."
            alignment="center"
          />

          {/* Stats Section */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-brand-dark mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-brand-gray">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Approach & Commitment Cards */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                </div>
                Our Approach
              </h3>
              <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
                Personalized care plans, medical checkups, psychiatric
                treatment, and daily counseling
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand-secondary/5 to-brand-primary/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-brand-secondary/10 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-secondary/20 rounded-lg flex items-center justify-center">
                  <HandHeart className="w-4 h-4 text-brand-secondary" />
                </div>
                Our Commitment
              </h3>
              <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
                Safe recovery, social reintegration, and long-term well-being
                for every woman
              </p>
            </div>
          </div>

          {/* Action Buttons removed as requested */}
        </div>
      </div>
    </section>
  );
}
