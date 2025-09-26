import { disorderDetails as staticDisorderDetails } from "@/src/data/disorders";
import { loadDisordersFromXlsx } from "@/src/lib/disordersLoader";
import HeroSection from "@/src/components/common/HeroSection";
import Image from "next/image";
import { disorderSummaries } from "@/src/data/disorderSummaries";
import DisorderInfoButton from "@/src/components/common/DisorderInfoButton.client";

export default async function DisorderDetail({ params }) {
  const { slug } = params;
  const loaded = await loadDisordersFromXlsx();
  const disorderDetails = (loaded && Object.keys(loaded).length ? loaded : staticDisorderDetails);
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
        showCtas={false}
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
          <div className="relative w-full h-[26rem] md:h-[36rem] rounded-3xl overflow-hidden mb-8 shadow-lg" style={{ aspectRatio: '1.3/1' }}>
            <Image
              src={disorder.contentImage || disorder.image}
              alt={disorder.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-brand-primary mb-3">Key Highlights</h2>
            {disorderSummaries[slug] && (
              <DisorderInfoButton
                title={disorderSummaries[slug].title}
                html={disorderSummaries[slug].html}
                modalId={`disorder-info-modal-${slug}`}
              />
            )}
          </div>
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
