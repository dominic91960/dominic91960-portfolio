import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectLink = () => {
  return (
    <div className="text-foreground flex items-center justify-around rounded border border-white/30 p-[2em]">
      <h3 className="text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
        Link <br /> To <br />
        Site
      </h3>
      <MdArrowOutward className="text-[8em]" />
    </div>
  );
};

export default ProjectLink;
