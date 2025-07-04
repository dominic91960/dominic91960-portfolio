import React from "react";
import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";

const ProjectLink: React.FC<{ data: string }> = ({ data }) => {
  return (
    <div className="text-foreground border-foreground/30 flex items-center justify-around rounded border p-[2em]">
      <h3 className="text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
        Link <br /> To <br />
        Site
      </h3>
      <Link href={data} target="_blank" rel="noopener noreferrer">
        <MdArrowOutward className="text-[8em] opacity-30 transition-opacity duration-300 hover:opacity-100 focus:opacity-100" />
      </Link>
    </div>
  );
};

export default ProjectLink;
