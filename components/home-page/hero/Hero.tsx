import React from "react";

import { cn } from "@/lib/utils";
import classes from "@/styles/home-page/hero.module.css";

const Hero = () => {
  return (
    <section className="p-hero h-[600px] sm:h-auto lg:h-screen">
      {/* Wrapper with gradient bg */}
      <div className={cn("h-full overflow-hidden rounded", classes["hero-bg"])}>
        {/* Container */}
        <div
          className={cn(
            "text-background container mx-auto flex h-full flex-col items-center justify-end pt-[4em] text-center",
          )}
        >
          {/* Text content */}
          <p className="text-[13px] font-medium sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
            I&apos;m Dominic Brian
          </p>
          <h1 className="max-w-[9ch] text-[40px] font-bold tracking-tighter min-[420px]:max-w-[13ch] sm:text-[47px] md:text-[54px] lg:text-[61px] xl:text-[68px] 2xl:text-[75px]">
            Aspiring Full-Stack Developer
          </h1>
          <p className="mt-[0.5em] mb-[1.2em] max-w-[31ch] text-[14px] min-[400px]:max-w-[35ch] sm:max-w-[42ch] sm:text-[15px] md:text-[16px] lg:max-w-[70ch] lg:text-[17px] xl:text-[18px] 2xl:text-[19px]">
            I&apos;m learning frontend and backend technologies to become a
            full-stack developer. I love turning ideas into reality through code
            and am excited to grow my skills while building meaningful projects.
          </p>

          {/* CTA */}
          <div className="flex gap-[1em]">
            <button className="bg-background/40 hover:bg-background/60 focus:bg-background/60 text-foreground w-[15ch] rounded-[0.5em] py-[1em] font-medium backdrop-blur-sm transition-colors duration-300">
              My Projects
            </button>

            <button className="bg-foreground/40 hover:bg-foreground/60 focus:bg-foreground/60 text-background w-[15ch] rounded-[0.5em] py-[1em] font-medium backdrop-blur-sm transition-colors duration-300">
              Get In Touch
            </button>
          </div>

          {/* Video area */}
          <div className="bg-background mt-[2em] aspect-video w-4/5 max-w-[800px] overflow-hidden rounded-t-2xl sm:w-[450px] md:w-[550px] lg:w-3/5">
            <video
              autoPlay
              className="size-full object-cover object-top"
              disablePictureInPicture
              loop
              muted
              playsInline
            >
              <source src="home-page/hero/hero.mp4" type="video/mp4" />
              Your browser does not support videos
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
