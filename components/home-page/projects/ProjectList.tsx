import React from "react";

const ProjectList = () => {
  return (
    <div className="text-foreground row-span-3 rounded border border-white/30 p-[2em]">
      <h3 className="text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
        List Of Projects
      </h3>

      <br />
      <ul className="mt-[0.3em] space-y-[1.5em] text-[1.2em]">
        <li>
          <div className="flex items-end border-b border-b-white/30 px-[0.2em] pb-[0.2em]">
            <div className="gradient-bg mr-[0.4em] size-[0.6em] self-center rounded-full blur-[2px]"></div>
            <p className="font-medium">St George Montessori</p>
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
            <p className="font-medium">Maria&apos;s Montessori</p>
            <p className="ms-auto text-[0.8em] font-light">ECOMMERCE</p>
          </div>
        </li>

        <li>
          <div className="flex items-end border-b border-b-white/30 px-[0.2em] pb-[0.2em]">
            <p className="font-medium">The Casa Dei Maria Montessori</p>
            <p className="ms-auto text-[0.8em] font-light">ECOMMERCE</p>
          </div>
        </li>

        <li>
          <div className="flex items-end border-b border-b-white/30 px-[0.2em] pb-[0.2em]">
            <p className="font-medium">Wolvista</p>
            <p className="ms-auto text-[0.8em] font-light">ECOMMERCE</p>
          </div>
        </li>

        <li>
          <div className="flex items-end border-b border-b-white/30 px-[0.2em] pb-[0.2em]">
            <p className="font-medium">The Vingame</p>
            <p className="ms-auto text-[0.8em] font-light">ECOMMERCE</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectList;
