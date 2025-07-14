import Image from "next/image";

export default function HeroSection({ title, subtitle, image }) {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary/5 via-brand-primary/10 to-brand-primary/5 py-16 md:py-24 mb-8 overflow-hidden md:pt-[200px]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-brand-secondary/20 to-brand-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-brand-primary"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 text-brand-primary border border-brand-primary/20 backdrop-blur-sm">
              ✨ Welcome to Swanthana
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-brand-dark via-brand-primary to-brand-dark bg-clip-text text-transparent mb-6 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl text-brand-gray mb-8 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="inline-flex items-center px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
            <button className="inline-flex items-center px-8 py-4 rounded-full text-brand-primary font-semibold bg-white/80 backdrop-blur-sm hover:bg-white border border-brand-primary/20 hover:border-brand-primary/30 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>
        </div>

        {image && (
          <div className="flex-1 hidden md:block">
            <div className="relative">
              {/* Decorative background for image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-3xl blur-2xl"></div>

              <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Image overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent"></div>
              </div>

              {/* Floating elements around image */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary/80 rounded-2xl shadow-lg animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-secondary/80 rounded-2xl shadow-lg animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-primary/80 rounded-xl shadow-lg animate-bounce delay-500"></div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-8"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
