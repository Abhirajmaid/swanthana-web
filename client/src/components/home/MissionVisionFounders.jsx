import React from "react";
import { missionVisionFoundersData } from "@/src/data/missionVisionFounders";
import SectionHeader from "@/src/components/common/SectionHeader";
import { Target, Eye, Heart, Users } from "lucide-react";

export default function MissionVisionFounders() {
  return (
    <>
      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-white via-brand-background to-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            badge={{
              icon: <Heart />,
              text: "Our Foundation",
            }}
            title="Mission &"
            gradientText="Vision"
            description="Our core purpose and aspirations that drive everything we do at Swanthana"
          />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {missionVisionFoundersData.missionVision.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 border border-gray-100 hover:border-brand-primary/20 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {idx === 0 ? (
                      <Target className="w-8 h-8 text-white" />
                    ) : (
                      <Eye className="w-8 h-8 text-white" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Founders Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/3 via-white to-brand-primary/3"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            badge={{
              icon: <Users />,
              text: "Leadership",
            }}
            title="Our"
            gradientText="Founders"
            description="Meet the visionary leaders who founded Swanthana with a mission to transform women's mental health care"
          />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {missionVisionFoundersData.founders.map((founder, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 border border-gray-100 hover:border-brand-primary/20 text-center relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Image */}
                  <div className="relative mb-6 inline-block">
                    <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-xl ring-4 ring-white group-hover:ring-brand-primary/20 transition-all duration-300">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300">
                    {founder.name}
                  </h3>
                  <div className="inline-block bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent font-semibold text-lg mb-4">
                    {founder.role}
                  </div>

                  {/* Bio */}
                  <p className="text-brand-gray leading-relaxed">
                    {founder.bio}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
