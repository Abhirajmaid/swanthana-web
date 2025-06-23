import Image from "next/image";
import HeroSection from "@/src/components/common/HeroSection";

// Dummy data (should be replaced with real data source or API)
const treatments = [
  {
    title: "Physiotherapy",
    slug: "physiotherapy",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    description:
      "Our physiotherapy program is designed to restore movement and function when someone is affected by injury, illness, or disability. We use evidence-based techniques to help patients regain strength, flexibility, and independence.",
    highlights: [
      "Musculoskeletal Rehabilitation",
      "Sports Injury",
      "Post-Surgery Care",
      "Pain Management",
      "Mobility Enhancement",
    ],
    longDescription: `
      <p>At Swanthana, our <b>Physiotherapy</b> services are tailored to each individual's needs, focusing on restoring optimal movement and function. Our experienced therapists use a combination of manual therapy, exercise, and advanced modalities to address a wide range of conditions.</p>
      <ul>
        <li>Comprehensive assessment and personalized treatment plans</li>
        <li>State-of-the-art equipment and rehabilitation techniques</li>
        <li>Focus on patient education and long-term wellness</li>
      </ul>
      <p>Whether recovering from surgery, injury, or managing a chronic condition, our team is dedicated to helping you achieve your rehabilitation goals.</p>
    `,
    meta: {
      title: "Physiotherapy Treatment | Swanthana",
      description:
        "Comprehensive physiotherapy services for rehabilitation, injury recovery, and mobility enhancement at Swanthana.",
    },
  },
  {
    title: "Speech Therapy",
    slug: "speech-therapy",
    image:
      "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80",
    description:
      "Our speech therapy services help individuals improve their verbal and non-verbal communication skills, as well as address swallowing difficulties.",
    highlights: [
      "Language Development",
      "Fluency Therapy",
      "Voice Disorders",
      "Articulation Therapy",
      "Swallowing Therapy",
    ],
    longDescription: `
      <p>Our <b>Speech Therapy</b> program supports children and adults with communication and swallowing disorders. We use evidence-based approaches to improve speech, language, and cognitive-communication abilities.</p>
      <ul>
        <li>Individual and group therapy sessions</li>
        <li>Parent and caregiver training</li>
        <li>Specialized programs for various speech and language disorders</li>
      </ul>
      <p>We believe in empowering our clients to communicate confidently and effectively in all aspects of life.</p>
    `,
    meta: {
      title: "Speech Therapy | Swanthana",
      description:
        "Expert speech therapy for communication and swallowing disorders at Swanthana.",
    },
  },
  // ...add other treatments as needed...
];

export default function TreatmentDetail({ params }) {
  const { slug } = params;
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Not found.</p>
      </div>
    );
  }

  return (
    <>
      <HeroSection
        title={treatment.title}
        subtitle={treatment.description}
        image={treatment.image}
      />
      <section className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          {/* Remove duplicate h1/description, keep breadcrumbs and details */}
          <div className="mb-8">
            <nav className="text-sm text-brand-primary/80 mb-2">
              <a href="/" className="hover:underline">
                Home
              </a>{" "}
              &gt;{" "}
              <a href="/treatment" className="hover:underline">
                Treatments
              </a>{" "}
              &gt; <span className="font-semibold">{treatment.title}</span>
            </nav>
          </div>
          <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-8 shadow-lg">
            <Image
              src={treatment.image}
              alt={treatment.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-primary mb-3">
              Key Highlights
            </h2>
            <ul className="flex flex-wrap gap-3">
              {treatment.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="prose max-w-none text-brand-gray"
            dangerouslySetInnerHTML={{ __html: treatment.longDescription }}
          />
          <div className="mt-10">
            <a
              href="/treatment"
              className="inline-block bg-brand-primary text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-brand-primary/90 transition"
            >
              Back to Treatments
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
