import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import classes from "@/styles/home-page/hero.module.css";
import hero from "@/public/home-page/hero/hero.png";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto flex h-screen w-full items-center justify-center p-[50px]">
        <div
          className={cn(
            "text-background flex size-full flex-col items-center justify-center rounded-2xl text-center",
            classes["hero-bg"],
          )}
        >
          <div className="flex grow flex-col items-center justify-center">
            <p className="font-medium 2xl:text-[30px]">
              I&apos;m Dominic Brian
            </p>
            <p className="text-[100px] font-bold tracking-tighter">
              Aspiring Full-Stack <br />
              Developer
            </p>
            <p className="mt-[0.5em] mb-[1em] 2xl:text-[24px]">
              I&apos;m learning frontend and backend technologies to become a
              full-stack developer. I love turning ideas into <br /> reality
              through code and am excited to grow my skills while building
              meaningful projects.
            </p>

            <div className="flex items-center gap-[1em]">
              <button className="bg-background/50 text-foreground rounded-[0.5em] px-[2.5em] py-[1em] font-medium backdrop-blur-sm">
                My Projects
              </button>
              <button className="bg-foreground/50 text-background rounded-[0.5em] px-[2.5em] py-[1em] font-medium backdrop-blur-sm">
                Get In Touch
              </button>
            </div>
          </div>

          <div className="bg-background h-45/100 w-3/5 overflow-hidden rounded-t-2xl">
            <Image src={hero} alt="Code" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
