import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { teamCategories } from "@/src/data/team";
import HeroSection from "@/src/components/common/HeroSection";

// Add extra data for the page
const mission = `To provide compassionate, evidence-based healthcare and rehabilitation services that empower individuals and families to achieve their fullest potential.`;
const vision = `To be a leading center of excellence in holistic child development, therapy, and inclusive care, recognized for innovation, integrity, and impact.`;
const values = [
  "Compassion & Empathy",
  "Excellence in Care",
  "Integrity & Trust",
  "Collaboration",
  "Continuous Learning",
  "Family-Centered Approach",
];
const goals = [
  "Deliver world-class, multidisciplinary care for children and families.",
  "Promote early intervention and inclusive education.",
  "Support ongoing professional development for our team.",
  "Foster community awareness and advocacy for special needs.",
];

const doctorCategories = [
  { id: "doctors", label: "Doctors" },
  { id: "psychologists", label: "Psychologists" },
  { id: "nursing", label: "Nursing Head" },
];

export default function DoctorsPage() {
  const doctors = teamCategories.doctors;

  return (
    <>
      <HeroSection
        title="Meet Our Doctors & Team"
        subtitle="Our multidisciplinary team is dedicated to providing compassionate, expert care for every child and family."
        image="https://images.unsplash.com/photo-1503437313881-503a91226419?auto=format&fit=crop&w=1200&q=80"
      />
      <section className="py-[150px] bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              Our <span className="text-brand-primary">Doctors</span>
            </h1>
            <p className="text-lg text-brand-gray">
              Meet our experienced and compassionate medical professionals.
            </p>
          </div>

          {/* Mission, Vision, Values, Goals */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-2xl font-bold text-brand-primary mb-3">
                Our Mission
              </h2>
              <p className="text-brand-gray">{mission}</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-2xl font-bold text-brand-primary mb-3">
                Our Vision
              </h2>
              <p className="text-brand-gray">{vision}</p>
            </div>
          </div>
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-2xl font-bold text-brand-primary mb-3">
                Our Values
              </h2>
              <ul className="list-disc pl-5 text-brand-gray space-y-1">
                {values.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-2xl font-bold text-brand-primary mb-3">
                Our Goals
              </h2>
              <ul className="list-disc pl-5 text-brand-gray space-y-1">
                {goals.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl bg-white p-2 shadow-sm">
              {doctorCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 text-brand-gray hover:text-brand-primary focus:text-brand-primary"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </div>

          {/* Category-wise Doctors */}
          {doctorCategories.map((cat) => (
            <div key={cat.id} id={cat.id} className="mb-20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-brand-dark mb-2">
                  {cat.label}
                </h2>
                <p className="text-brand-gray">
                  {cat.label === "Doctors" &&
                    "Our doctors are leaders in their fields, dedicated to holistic care and lifelong learning."}
                  {cat.label === "Psychologists" &&
                    "Our psychologists provide expert mental health support and therapy."}
                  {(cat.label === "Nursing" || cat.label === "Nursing Head") &&
                    "Our nursing team ensures compassionate, round-the-clock care."}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {teamCategories[cat.id]?.length > 0 ? (
                  teamCategories[cat.id].map((member, index) => (
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
                            {Object.entries(member.social).map(
                              ([platform, url]) => (
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
                                  {platform === "email" && (
                                    <Mail className="w-4 h-4" />
                                  )}
                                </a>
                              )
                            )}
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
                  ))
                ) : (
                  <div className="col-span-full text-center text-brand-gray py-8">
                    No {cat.label} found.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
