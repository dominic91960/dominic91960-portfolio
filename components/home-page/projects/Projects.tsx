import React from "react";
import { MdArrowOutward } from "react-icons/md";

import ExpressIcon from "@/components/icons/ExpressIcon";
import NodeIcon from "@/components/icons/NodeIcon";
import ReactIcon from "@/components/icons/ReactIcon";

const Projects = () => {
  return (
    <section>
      <div className="p-container container mx-auto">
        <div className="grid grid-cols-3 gap-[1em]">
          {/* Row 1 */}
          {/* Tech stack */}
          <div className="text-foreground col-span-2 flex h-[200px] gap-[1em] rounded border border-white/30 p-[3em]">
            <h3 className="shrink-0 self-center text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
              Tech <br /> Stack
            </h3>
            <div className="flex grow items-center justify-center gap-[5em]">
              <ReactIcon className="h-[4em] opacity-30" />
              <NodeIcon className="h-[4em] opacity-30" />
              <ExpressIcon className="h-[4em] opacity-30" />
            </div>
          </div>

          {/* Link to site */}
          <div className="text-foreground flex items-center justify-around rounded border border-white/30 p-[2em]">
            <h3 className="text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
              Link <br /> To <br />
              Site
            </h3>
            <MdArrowOutward className="text-[8em]" />
          </div>

          {/* Row 2 */}
          {/* Project info */}
          <div className="text-foreground row-span-2 rounded border border-white/30 p-[2em]">
            <h3 className="text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
              Info
            </h3>

            <br />
            <p>
              I&apos;m an aspiring full-stack developer with a growing passion
              for web technologies and user experience design. My journey into
              web development began through online courses and personal
              projects, where I discovered my love for creating interactive
              applications.
            </p>

            <br />
            <p>
              I&apos;m currently focused on building a strong foundation in both
              frontend and backend technologies. Each project I work on teaches
              me something new, and I&apos;m constantly challenging myself to
              learn and apply new concepts.
            </p>

            <br />
            <p>
              I&apos;m eager to join a development team where I can continue
              learning, contribute to meaningful projects, and grow into a
              skilled full-stack developer.
            </p>
          </div>

          {/* Section title */}
          <div className="gradient-bg col-span-2 rounded py-[0.7em] text-[40px] sm:text-[47px] md:text-[54px] lg:text-[61px] xl:text-[68px] 2xl:text-[75px]">
            <h2 className="text-background text-center font-bold tracking-tighter">
              My Projects
            </h2>
          </div>

          {/* Row 3 */}
          {/* Project name */}
          <div className="text-foreground flex h-[200px] items-center justify-center rounded border border-white/30 p-[2em] text-center">
            <h3 className="text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[50px]">
              Espresso Zen
            </h3>
          </div>

          {/* List of projects */}
          <div className="text-foreground row-span-3 rounded border border-white/30 p-[2em]">
            <h3 className="text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
              List Of Projects
            </h3>

            <br />
            <ul className="mt-[0.3em] space-y-[1.5em] text-[1.2em]">
              <li>
                <div className="flex items-end border-b border-b-white/30 px-[0.2em] pb-[0.2em]">
                  <div className="gradient-bg mr-[0.4em] size-[0.6em] self-center rounded-full blur-[2px]"></div>
                  <p className="font-medium">Espresso Zen</p>
                  <p className="ms-auto text-[0.8em] font-light">ECOMMERCE</p>
                </div>
              </li>

              <li>
                <div className="flex items-end border-b border-b-white/30 px-[0.2em] pb-[0.2em]">
                  <p className="font-medium">Westvalley Montessori</p>
                  <p className="ms-auto text-[0.8em] font-light">ECOMMERCE</p>
                </div>
              </li>

              <li>
                <div className="flex items-end border-b border-b-white/30 px-[0.2em] pb-[0.2em]">
                  <p className="font-medium">Westvalley Montessori</p>
                  <p className="ms-auto text-[0.8em] font-light">ECOMMERCE</p>
                </div>
              </li>

              <li>
                <div className="flex items-end border-b border-b-white/30 px-[0.2em] pb-[0.2em]">
                  <p className="font-medium">Westvalley Montessori</p>
                  <p className="ms-auto text-[0.8em] font-light">ECOMMERCE</p>
                </div>
              </li>

              <li>
                <div className="flex items-end border-b border-b-white/30 px-[0.2em] pb-[0.2em]">
                  <p className="font-medium">Westvalley Montessori</p>
                  <p className="ms-auto text-[0.8em] font-light">ECOMMERCE</p>
                </div>
              </li>

              <li>
                <div className="flex items-end border-b border-b-white/30 px-[0.2em] pb-[0.2em]">
                  <p className="font-medium">Westvalley Montessori</p>
                  <p className="ms-auto text-[0.8em] font-light">ECOMMERCE</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Row 4 */}
          {/* Video area */}
          <div className="col-span-2 row-span-2 h-[400px] overflow-hidden rounded border border-white/30">
            <video
              autoPlay
              className="size-full object-cover object-top"
              disablePictureInPicture
              loop
              muted
              playsInline
              src="images/home-page/hero/hero.webm"
              poster="images/home-page/hero/hero-thumbnail.jpg"
            >
              <source src="images/home-page/hero/hero.mp4" type="video/mp4" />
              Your browser does not support videos
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
