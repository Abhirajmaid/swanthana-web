"use client";
import { homeData } from "@/src/constants/pageData";
import Hero from "@/src/components/home/Hero";
import About from "@/src/components/home/About";
import Services from "@/src/components/home/Services";
import Impact from "@/src/components/home/Impact";
import Team from "@/src/components/home/Team";
import Contact from "@/src/components/home/Contact";
import Video from "@/src/components/home/Video";
import Treatment from "@/src/components/home/Treatment";
import InfiniteImageLoop from "@/src/components/home/InfiniteImageLoop";

export default function Home() {
  return (
    <main className="bg-brand-background scroll-smooth">
      <div className="space-y-0 relative">
        <Hero data={homeData.hero} />
        <About data={homeData.about} />
        <Treatment />
        {/* <Services data={homeData.services} /> */}
        <div className="bg-gradient-to-b from-transparent via-brand-light/20 to-transparent">
          <Impact />
          <Video />
          <Team />
        </div>
        <Contact />
        <InfiniteImageLoop />
      </div>
    </main>
  );
}
