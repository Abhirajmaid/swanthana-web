import { disorderDetails } from "@/src/data/disorders";
import HeroSection from "@/src/components/common/HeroSection";
import Image from "next/image";

export default function DisorderDetail({ params }) {
  const { slug } = params;
  const disorder = disorderDetails[slug];

  if (!disorder) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Not found.</p>
      </div>
    );
  }

  return (
    <>
      <HeroSection
        title={disorder.title}
        subtitle={disorder.description}
        image={disorder.image}
      />
      <section className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <nav className="text-sm text-brand-primary/80 mb-2">
              <a href="/" className="hover:underline">
                Home
              </a>{" "}
              &gt;{" "}
              <a href="/disorders" className="hover:underline">
                Disorders
              </a>{" "}
              &gt; <span className="font-semibold">{disorder.title}</span>
            </nav>
          </div>
          <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-8 shadow-lg">
            <Image
              src={disorder.image}
              alt={disorder.title}
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
              {disorder.highlights.map((item, idx) => (
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
            className="prose max-w-none text-brand-dark"
            dangerouslySetInnerHTML={{ __html: disorder.longDescription }}
          />
          <div className="mt-10">
            <a
              href="/disorders"
              className="inline-block bg-brand-primary text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-brand-primary/90 transition"
            >
              Back to Disorders
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
