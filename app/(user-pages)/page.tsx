import React from "react";

import Hero from "@/components/home-page/hero/Hero";
import About from "@/components/home-page/about/About";
import TechStack from "@/components/home-page/tech-stack/TechStack";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
    </main>
  );
};

export default HomePage;
