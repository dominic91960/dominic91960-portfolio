import React from "react";

import Hero from "@/components/home-page/hero/Hero";
import About from "@/components/home-page/about/About";
import TechStack from "@/components/home-page/tech-stack/TechStack";
import Projects from "@/components/home-page/projects/Projects";
// import Accordion from "@/components/ui/Accordion";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      {/* <Accordion /> */}
    </main>
  );
};

export default HomePage;
