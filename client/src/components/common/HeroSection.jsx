import Image from "next/image";

export default function HeroSection({ title, subtitle, image }) {
  return (
    <section className="relative bg-brand-primary/5 py-12 md:py-[140px] mb-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-brand-gray mb-4">{subtitle}</p>
          )}
        </div>
        {image && (
          <div className="flex-1 hidden md:block">
            <div className="relative w-full h-56 md:h-72 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
