"use client";
import { Heart, Brain, Users, HandHeart, Baby, Puzzle } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Mental Health Support",
      description: "Professional counseling and therapeutic interventions",
      color: "from-rose-500/20 to-pink-500/20 text-rose-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Special Education",
      description: "Personalized learning programs for special needs",
      color: "from-blue-500/20 to-indigo-500/20 text-blue-500",
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Early Intervention",
      description: "Early childhood development support services",
      color: "from-amber-500/20 to-orange-500/20 text-amber-500",
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Behavioral Therapy",
      description: "Specialized behavioral intervention programs",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Skills",
      description: "Group therapy and social interaction programs",
      color: "from-violet-500/20 to-purple-500/20 text-violet-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Family Support",
      description: "Comprehensive family counseling services",
      color: "from-red-500/20 to-rose-500/20 text-red-500",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-secondary/10 to-brand-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="badge badge-primary inline-flex mb-4">
            Our Services
          </div>
          <h2 className="text-heading mb-6">Comprehensive Care Solutions</h2>
          <p className="text-body text-brand-gray">
            We provide specialized services tailored to individual needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-black/20 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-2xl transition-opacity group-hover:opacity-30`}
              />
              <div className="relative">
                <div
                  className={`p-4 rounded-xl bg-white inline-block mb-4 ${service.color}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-gray">{service.description}</p>

                <div className="mt-6 flex items-center text-sm font-medium text-brand-primary opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
