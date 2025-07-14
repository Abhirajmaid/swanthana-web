import Image from "next/image";
import { teamCategories } from "@/src/data/team";
import { aboutData } from "@/src/data/about";
import Contact from "@/src/components/home/Contact";
import SectionHeader from "@/src/components/common/SectionHeader";
import {
  BookOpen,
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Brain,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Info,
  UserCheck,
  Building,
  Stethoscope,
  Clock,
  Medal,
  MapPin,
  Phone,
  Calendar,
} from "lucide-react";

export default function AboutUsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-dark py-[160px] md:py-[220px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={aboutData.hero.image}
            alt="About Swanthana"
            className="w-full h-full object-cover object-center"
            priority
            sizes="100vw"
            width={2500}
            height={2500}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-brand-dark/60 to-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-end justify-between relative z-10">
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              {aboutData.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl md:max-w-3xl mb-8 md:mb-0 drop-shadow leading-relaxed">
              {aboutData.hero.subtitle}
            </p>
          </div>
        </div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl" />
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-white via-brand-background to-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            badge={{
              icon: <BookOpen />,
              text: "Our Journey",
            }}
            title="Our"
            gradientText="Story"
            description="The inspiring journey of how Swanthana was born from a vision to transform women's mental health care in India"
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={aboutData.story.image}
                  alt="Our Story"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-brand-secondary/20 to-brand-primary/20 rounded-2xl blur-xl"></div>
            </div>

            <div className="space-y-6">
              <div className="space-y-6">
                {aboutData.story.points.map((point, i) => (
                  <div
                    key={i}
                    className="group flex gap-4 p-4 rounded-2xl hover:bg-white/50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-brand-primary text-lg block mb-1 group-hover:text-brand-secondary transition-colors duration-300">
                        {point.heading}
                      </span>
                      <p className="text-brand-gray leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/3 via-white to-brand-primary/3"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            badge={{
              icon: <Target />,
              text: "Our Foundation",
            }}
            title="Mission, Vision &"
            gradientText="Values"
            description="The core principles and aspirations that guide our work in transforming women's mental health care"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-brand-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                  Our Mission
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {aboutData.mission}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-brand-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                  Our Vision
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {aboutData.vision}
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-brand-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                  Our Values
                </h3>
                <ul className="text-brand-gray space-y-2">
                  {aboutData.values.map((value, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex-shrink-0"></div>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-br from-white via-brand-background to-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            badge={{
              icon: <Heart />,
              text: "Our Method",
            }}
            title="Our"
            gradientText="Approach"
            description={aboutData.approach.subtitle}
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-6">
                {aboutData.approach.heading}
              </h3>
              <p className="text-brand-gray mb-8 text-lg leading-relaxed">
                {aboutData.approach.intro}
              </p>

              <div className="space-y-6">
                {aboutData.approach.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="group relative flex gap-6 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg">{idx + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-brand-primary font-bold text-lg mb-1 group-hover:text-brand-secondary transition-colors duration-300">
                        {step.title}
                      </h4>
                      <h5 className="text-brand-dark font-semibold mb-2">
                        {step.subtitle}
                      </h5>
                      <p className="text-brand-gray leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                <div className="relative w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-3xl shadow-2xl overflow-hidden">
                  <Image
                    src={aboutData.approach.image}
                    alt="Our Approach"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-brand-secondary/20 to-brand-primary/20 rounded-2xl blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Facility Combined */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/3 via-white to-brand-primary/3"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            badge={{
              icon: <Stethoscope />,
              text: "Our Services",
            }}
            title="What We Do &"
            gradientText="Where We Do It"
            description="Comprehensive care services delivered in a safe, supportive environment designed specifically for women's recovery"
          />

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {aboutData.whatWeDo.map((item, i) => {
              const icons = [Shield, Brain, UserCheck];
              const IconComponent = icons[i];

              return (
                <div
                  key={i}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-brand-primary/20 relative overflow-hidden text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl flex items-center justify-center shadow-lg mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-brand-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              );
            })}
          </div>

          {/* Facility */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/stocks/8.jpg"
                  alt="Swanthana Facility"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-brand-secondary/20 to-brand-primary/20 rounded-2xl blur-xl"></div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-brand-dark">
                  Our Facility
                </h3>
              </div>

              <p className="text-brand-gray mb-6 text-lg leading-relaxed">
                Swanthana operates a dedicated, women-exclusive rehabilitation
                center in Hyderabad, offering a safe, supportive, and healing
                environment for women in need of psychiatric care, de-addiction,
                and trauma recovery.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Comfortable therapy and counseling rooms",
                  "24/7 medical observation and support",
                  "Group activity zones for skill-building and recreation",
                  "Secure, private, and homely atmosphere",
                  "Holistic care with a multidisciplinary team",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-brand-gray">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Visit
                </a>
                <a
                  href="/gallery"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-primary text-brand-primary font-semibold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300"
                >
                  <Building className="w-5 h-5 mr-2" />
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-white via-brand-background to-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            badge={{
              icon: <Users />,
              text: "Our People",
            }}
            title="Meet Our"
            gradientText="Team"
            description="Our multidisciplinary team of doctors, therapists, and support staff dedicated to women's recovery and empowerment"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamCategories.doctors.map((member, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-brand-primary/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-brand-primary font-semibold mb-3 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text">
                      {member.role}
                    </p>
                    <p className="text-sm text-brand-gray leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/3 via-white to-brand-primary/3"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            badge={{
              icon: <TrendingUp />,
              text: "Our Results",
            }}
            title="Our"
            gradientText="Impact"
            description="Transforming lives and creating lasting change in women's mental health and recovery journey"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {aboutData.impact.map((item, i) => {
              const icons = [Medal, Clock, TrendingUp];
              const IconComponent = icons[i];

              return (
                <div
                  key={i}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-brand-primary/20 text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-2">
                      {item.value}
                    </div>
                    <div className="text-brand-gray font-medium">
                      {item.label}
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-white border-t border-brand-primary/10">
        <Contact />
      </section>
    </main>
  );
}
