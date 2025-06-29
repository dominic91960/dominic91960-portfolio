import React from "react";
import BrandCarousel from "./BrandCarousel";

const TechStack = () => {
  return (
    <section>
      <div className="p-container container mx-auto grid grid-cols-1 gap-[2em] sm:grid-cols-11 sm:gap-0">
        <div className="gradient-bg rounded py-[0.7em] text-[40px] sm:col-span-5 sm:text-[47px] md:text-[54px] lg:col-span-4 lg:text-[61px] xl:text-[68px] 2xl:text-[75px]">
          <h2 className="text-background text-center font-bold tracking-tighter">
            My Tech <br className="hidden sm:inline" /> Stack
          </h2>
        </div>
        <BrandCarousel className="sm:col-span-6 sm:row-start-1 lg:col-span-7" />
      </div>
    </section>
  );
};

export default TechStack;
