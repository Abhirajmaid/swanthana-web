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
import Disorders from "@/src/components/home/Disorders";
import InfiniteImageLoop from "@/src/components/home/InfiniteImageLoop";
import MissionVisionFounders from "@/src/components/home/MissionVisionFounders";
import Testimonials from "@/src/components/home/Testimonials";
import Blogs from "@/src/components/home/Blogs";

export default function Home() {
  return (
    <main className="bg-brand-background scroll-smooth">
      <div className="space-y-0 relative">
        <Hero data={homeData.hero} />
        <About data={homeData.about} />
        <MissionVisionFounders />
        <Treatment />
        <Disorders />
        {/* <Services data={homeData.services} /> */}
        <div className="bg-gradient-to-b from-transparent via-brand-light/20 to-transparent">
          <Impact />
          <Video />
          <Team />
          <Testimonials />
        </div>
        <Blogs />
        <Contact />
        <InfiniteImageLoop />
      </div>
    </main>
  );
}
