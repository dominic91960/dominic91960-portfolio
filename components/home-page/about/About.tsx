import React from "react";
import Link from "next/link";
import Image from "next/image";

import nibmLogo from "@/public/home-page/about/nibm.svg";
import sphiriaLogo from "@/public/home-page/about/sphiria.png";

const About = () => {
  return (
    <section>
      {/* Container grid */}
      <div className="p-container container mx-auto grid grid-cols-1 gap-[1em] pt-0 lg:grid-cols-10">
        {/* Sub grid 1 */}
        <div className="flex flex-col gap-[1em] lg:col-span-4">
          {/* Title row */}
          <div className="gradient-bg rounded py-[0.7em] text-[40px] sm:text-[47px] md:text-[54px] lg:text-[61px] xl:text-[68px] 2xl:text-[75px]">
            <h2 className="text-background text-center font-bold tracking-tighter">
              About Me
            </h2>
          </div>

          {/* Text row */}
          <div className="gradient-bg grow rounded p-[2px]">
            <div className="bg-background text-foreground h-full rounded-[calc(var(--radius)-3px)] p-[2em]">
              <p>
                I&apos;m an aspiring full-stack developer with a growing passion
                for web technologies and user experience design. My journey into
                web development began through online courses and personal
                projects, where I discovered my love for creating interactive
                applications.
              </p>

              <br />
              <p>
                I&apos;m currently focused on building a strong foundation in
                both frontend and backend technologies. Each project I work on
                teaches me something new, and I&apos;m constantly challenging
                myself to learn and apply new concepts.
              </p>

              <br />
              <p>
                I&apos;m eager to join a development team where I can continue
                learning, contribute to meaningful projects, and grow into a
                skilled full-stack developer.
              </p>
            </div>
          </div>
        </div>

        {/* Sub grid 2 */}
        <div className="grid grid-cols-1 gap-[1em] sm:grid-cols-10 lg:col-span-6">
          {/* Column 1 */}
          <div className="grid grid-cols-1 grid-rows-12 gap-[1em] sm:col-span-6">
            {/* Text row */}
            <div className="gradient-bg row-span-8 rounded p-[2px]">
              <div className="bg-background text-foreground h-full rounded-[calc(var(--radius)-3px)] p-[2em]">
                <h3 className="text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
                  Work <br /> Experience
                </h3>

                <br />
                <p>
                  I worked as an <strong>Intern Full-Stack Developer</strong>{" "}
                  at&nbsp;
                  <Link
                    href="https://sphiriadigital.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative underline"
                  >
                    Sphiria Digital Studio
                    <span className="sr-only"> (opens in new tab)</span>
                  </Link>
                  &nbsp; from July to October 2024, working on client projects
                  with responsive UI components, building REST APIs with Node.js
                  and MongoDB, and learning professional development workflows
                  including GitHub and Jira.
                </p>

                <br />
                <p>
                  I continued working as a&nbsp;
                  <strong>Trainee Full-Stack Developer</strong> from October
                  2024 to April 2025, developing interfaces and dashboards with
                  Next.js and React, collaborating on code reviews and features,
                  and gaining experience across diverse projects including
                  e-commerce and management systems.
                </p>

                <br />
                <p>
                  I currently serve as an&nbsp;
                  <strong>Associate Full-Stack Developer</strong>, continuing my
                  frontend work with Next.js and React while expanding my
                  backend development responsibilities using Nest.js and
                  MongoDB.
                </p>
              </div>
            </div>

            {/* Image row */}
            <div className="gradient-bg row-span-4 rounded p-[2em]">
              <div className="relative h-full">
                <Image
                  alt="Logo of Sphiria Digital Studios"
                  className="object-contain object-center"
                  fill
                  src={sphiriaLogo}
                />
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="grid grid-cols-1 grid-rows-12 gap-[1em] sm:col-span-4">
            {/* Image row */}
            <div className="gradient-bg row-span-4 rounded p-[2em]">
              <div className="relative mx-auto h-full w-4/5">
                <Image
                  alt="Logo of National Institude of Business Management"
                  className="object-contain object-center"
                  fill
                  src={nibmLogo}
                />
              </div>
            </div>

            {/* Text row */}
            <div className="gradient-bg relative row-span-8 row-start-1 rounded p-[2px] sm:row-start-auto">
              <div className="bg-background text-foreground h-full rounded-[calc(var(--radius)-3px)] p-[2em]">
                <h3 className="text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
                  Education
                </h3>

                <br />
                <p>
                  I completed my Diploma in Software Engineering at The National
                  Institute of Business Management (2022 to 2023).
                </p>

                <br />
                <p>
                  Then, I completed my Higher National Diploma in Software
                  Engineering at The National Institute of Business Management
                  (2023 to 2024).
                </p>

                <br />
                <p>
                  I am currently pursuing my BSc (Hons) in Computer Science with
                  Artificial Intelligence (Awarded by Coventry University) at
                  The National Institute of Business Management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
