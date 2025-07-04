import React from "react";

import Hero from "@/components/home-page/hero/Hero";
import About from "@/components/home-page/about/About";
import TechStack from "@/components/home-page/tech-stack/TechStack";
import Projects from "@/components/home-page/projects/Projects";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
    </main>
  );
};

export default HomePage;
