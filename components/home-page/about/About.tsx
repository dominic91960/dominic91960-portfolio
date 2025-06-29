import React from "react";

const About = () => {
  return (
    <section>
      {/* Container grid */}
      <div className="p-container container mx-auto grid grid-cols-1 gap-[1em] pt-0 lg:grid-cols-2">
        {/* Sub grid 1 */}
        <div className="flex flex-col gap-[1em]">
          {/* Title row */}
          <div className="gradient-bg rounded py-[0.7em] text-[40px] sm:text-[47px] md:text-[54px] lg:text-[61px] xl:text-[68px] 2xl:text-[75px]">
            <h1 className="text-background text-center font-bold tracking-tighter">
              About Me
            </h1>
          </div>

          {/* Text row */}
          <div className="gradient-bg grow rounded p-[2px]">
            <div className="bg-background text-foreground h-full rounded p-[2em]">
              hello
            </div>
          </div>
        </div>

        {/* Sub grid 2 */}
        <div className="grid grid-cols-2 gap-[1em]">
          {/* Column 1 */}
          <div className="grid grid-cols-1 grid-rows-12 gap-[1em]">
            {/* Text row */}
            <div className="gradient-bg row-span-8 rounded p-[2px]">
              <div className="bg-background text-foreground h-[600px] rounded p-[2em]">
                hello
              </div>
            </div>

            {/* Image row */}
            <div className="gradient-bg row-span-4 rounded"></div>
          </div>

          {/* Column 2 */}
          <div className="grid grid-cols-1 grid-rows-12 gap-[1em]">
            {/* Image row */}
            <div className="gradient-bg row-span-4 rounded"></div>

            {/* Text row */}
            <div className="gradient-bg relative row-span-8 rounded p-[2px]">
              <div className="bg-background text-foreground h-[600px] rounded p-[2em]">
                hello
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
