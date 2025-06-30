import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { useState } from "react";
import { teamCategories } from "@/src/data/team";

export default function Team() {
  const [activeTab, setActiveTab] = useState("doctors");

  const tabs = [
    { id: "doctors", label: "Doctors" },
    { id: "psychologists", label: "Psychologists" },
    { id: "nursing", label: "Nursing Head" },
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge badge-primary inline-flex mb-4">Our Team</div>
          <h2 className="text-4xl font-bold text-brand-dark mb-6">
            Meet Our <span className="text-brand-primary">Experts</span>
          </h2>
          <p className="text-lg text-brand-gray">
            Our dedicated team of professionals is committed to providing
            exceptional care and support
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-white p-2 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "bg-brand-primary text-white shadow-md"
                      : "text-brand-gray hover:text-brand-dark"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamCategories[activeTab].map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-center gap-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {platform === "linkedin" && (
                          <Linkedin className="w-4 h-4" />
                        )}
                        {platform === "twitter" && (
                          <Twitter className="w-4 h-4" />
                        )}
                        {platform === "email" && <Mail className="w-4 h-4" />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-brand-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-brand-gray">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
