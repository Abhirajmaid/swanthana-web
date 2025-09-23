import Image from "next/image";
import { Linkedin, Twitter, Mail, Users2 } from "lucide-react";
import { teamCategories } from "@/src/data/team";
import SectionHeader from "@/src/components/common/SectionHeader";

export default function Team() {
  // Use only the doctors array since we removed psychologists and nursing
  const allTeamMembers = teamCategories.doctors;

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          badge={{ icon: <Users2 />, text: "Our Team" }}
          title="Meet Our"
          gradientText="Experts"
          description="Our dedicated team of professionals is committed to providing exceptional care and support"
        />

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {allTeamMembers.map((member, index) => (
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
