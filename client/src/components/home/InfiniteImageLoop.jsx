import React from "react";
import { sliderImages } from "@/src/data/sliderImages";

const DURATION = 15000;
const ROWS = 3;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const ImageCard = ({ img }) => (
  <div className="w-[80vw] h-[70vw] max-w-[400px] max-h-[350px] min-w-[180px] min-h-[120px] sm:w-[260px] sm:h-[180px] md:w-[320px] md:h-[220px] lg:w-[400px] lg:h-[350px] px-1">
    <img
      src={img}
      alt="sahayata"
      className="w-full h-full object-cover rounded-xl"
      loading="lazy"
      onError={(e) => {
        // Hide the card if the image fails to load to avoid blank gaps
        const parent = e.currentTarget.parentElement;
        if (parent) parent.style.display = "none";
      }}
    />
  </div>
);

const InfiniteImageSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};

const InfiniteImageLoop = () => (
  <div className="tag-list">
    {[...new Array(ROWS)].map((_, i) => (
      <InfiniteImageSlider
        key={i}
        duration={random(DURATION - 5000, DURATION + 5000)}
        reverse={i % 2}
      >
        {shuffle(sliderImages)
          .filter((src) => typeof src === "string" && src.trim() !== "")
          .slice(0, TAGS_PER_ROW)
          .map((tag) => (
            <ImageCard img={tag} key={tag} />
          ))}
      </InfiniteImageSlider>
    ))}
  </div>
);

export default InfiniteImageLoop;
