import Image from "next/image";
import Link from "next/link";
import { treatments } from "@/src/data/treatments";

export default function TreatmentsPage() {
  return (
    <section className="py-[150px] bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">
            Our <span className="text-brand-primary">Treatments</span>
          </h1>
          <p className="text-lg text-brand-gray">
            Explore our comprehensive rehabilitation and therapy programs.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {treatments.map((treatment) => (
            <div
              key={treatment.slug}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold text-brand-dark mb-2">
                  {treatment.title}
                </h2>
                <p className="text-sm text-brand-gray mb-4 flex-1">
                  {treatment.description}
                </p>
                <Link
                  href={`/treatment/${treatment.slug}`}
                  className="inline-block mt-auto bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-brand-primary/90 transition"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
