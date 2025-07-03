import Image from "next/image";
import { teamCategories } from "@/src/data/team";
import { aboutData } from "@/src/data/about";
import Contact from "@/src/components/home/Contact";

export default function AboutUsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-[160px] md:py-[220px] overflow-hidden">
        {/* Background image covers the whole hero section */}
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
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-end justify-between relative z-10">
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              {aboutData.hero.title}
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl md:max-w-xl mb-8 md:mb-0 drop-shadow">
              {aboutData.hero.subtitle}
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end mt-10 md:mt-0">
            {/* Optionally, you can remove this image or replace with a logo/graphic */}
          </div>
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-2xl -z-1" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-brand-secondary/10 rounded-full blur-2xl -z-1" />
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src={aboutData.story.image}
              alt="Our Story"
              width={500}
              height={350}
              className="rounded-2xl shadow"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-primary mb-4">
              {aboutData.story.title}
            </h2>
            <ul className="space-y-6 text-brand-gray text-base md:text-lg list-disc pl-5">
              {aboutData.story.points.map((point, i) => (
                <li key={i}>
                  <span className="font-semibold text-brand-primary">
                    {point.heading}
                  </span>{" "}
                  {point.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-xl font-bold text-brand-primary mb-2">
              Our Mission
            </h3>
            <p className="text-brand-gray">{aboutData.mission}</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-xl font-bold text-brand-primary mb-2">
              Our Vision
            </h3>
            <p className="text-brand-gray">{aboutData.vision}</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-xl font-bold text-brand-primary mb-2">
              Our Values
            </h3>
            <ul className="text-brand-gray space-y-1 text-left inline-block">
              {aboutData.values.map((v, i) => (
                <li key={i}>• {v}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.whatWeDo.map((item, i) => (
              <div
                key={i}
                className="bg-brand-primary/10 rounded-2xl p-6 shadow text-center"
              >
                <h4 className="text-lg font-semibold text-brand-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-brand-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-brand-primary mb-2 leading-tight">
              Our Approach
            </h2>
            <p className="text-lg text-brand-gray">
              {aboutData.approach.subtitle}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            {/* Steps Left */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                {aboutData.approach.heading}
              </h3>
              <p className="text-brand-gray mb-6">{aboutData.approach.intro}</p>
              <ul className="space-y-8 relative">
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-brand-primary/10 rounded-full z-0" />
                {aboutData.approach.steps.map((step, idx) => (
                  <li className="relative pl-14 z-10" key={idx}>
                    <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold shadow">
                      <span>{idx + 1}</span>
                    </div>
                    <div className="mb-1 text-brand-primary font-semibold">
                      {step.title}
                    </div>
                    <div className="text-brand-dark font-bold mb-1">
                      {step.subtitle}
                    </div>
                    <div className="text-brand-gray text-sm">{step.text}</div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Illustration Right */}
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="relative w-[350px] h-[350px] md:w-[420px] md:h-[420px] rounded-3xl shadow-xl overflow-hidden border-8 border-white bg-white flex items-center justify-center">
                <Image
                  src={aboutData.approach.image}
                  alt="Our Approach"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          {/* Facility Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/stocks/8.jpg"
                alt="Swanthana Facility"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent" />
            </div>
          </div>
          {/* Facility Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-brand-primary mb-4">
              Our Facility
            </h2>
            <p className="text-brand-gray mb-4 text-lg">
              Swanthana operates a dedicated, women-exclusive rehabilitation
              center in Hyderabad, offering a safe, supportive, and healing
              environment for women in need of psychiatric care, de-addiction,
              and trauma recovery.
            </p>
            <ul className="space-y-3 text-brand-dark text-base mb-6 list-disc pl-5">
              <li>Comfortable therapy and counseling rooms</li>
              <li>24/7 medical observation and support</li>
              <li>Group activity zones for skill-building and recreation</li>
              <li>Secure, private, and homely atmosphere</li>
              <li>Holistic care with a multidisciplinary team</li>
            </ul>
            <div className="flex gap-4">
              <a
                href="/contact-us"
                className="btn-primary px-6 py-2 rounded-full font-semibold shadow hover:bg-brand-primary/90 transition"
              >
                Book a Visit
              </a>
              <a
                href="/gallery"
                className="btn-border px-6 py-2 rounded-full font-semibold shadow"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-brand-light/30">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-8">
            Meet Our Team
          </h2>
          <p className="text-brand-gray mb-8">
            Our multidisciplinary team includes doctors, therapists, special
            educators, and support staff, all dedicated to your child’s growth
            and well-being.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamCategories.doctors.map((member, idx) => (
              <div
                key={idx}
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

      {/* Impact Section */}
      <section className="py-16 bg-brand-primary/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">
            Our Impact
          </h2>
          <p className="text-brand-gray mb-8">
            Swanthana has touched the lives of hundreds of children and
            families, helping them overcome challenges and celebrate
            achievements.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {aboutData.impact.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow p-8 min-w-[180px]"
              >
                <div className="text-3xl font-bold text-brand-primary mb-2">
                  {item.value}
                </div>
                <div className="text-brand-gray">{item.label}</div>
              </div>
            ))}
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
