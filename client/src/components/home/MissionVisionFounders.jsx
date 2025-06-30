import React from "react";
import { missionVisionFoundersData } from "@/src/data/missionVisionFounders";

export default function MissionVisionFounders() {
  return (
    <>
      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {missionVisionFoundersData.missionVision.map((item, idx) => (
            <div
              key={idx}
              className="bg-brand-primary/10 rounded-2xl shadow p-8 flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-bold text-brand-primary mb-3">
                {item.title}
              </h3>
              <p className="text-brand-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Founders Section */}
      <section className="py-16 bg-brand-light/30">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-8">
            {missionVisionFoundersData.foundersSectionTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {missionVisionFoundersData.founders.map((founder, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow p-8 flex flex-col items-center"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-28 h-28 rounded-full object-cover mb-4 shadow"
                />
                <h3 className="text-xl font-bold text-brand-dark mb-1">
                  {founder.name}
                </h3>
                <p className="text-brand-primary font-medium mb-2">
                  {founder.role}
                </p>
                <p className="text-brand-gray text-sm">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
