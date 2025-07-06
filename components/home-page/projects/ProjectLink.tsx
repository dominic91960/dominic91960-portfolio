import React from "react";
import Link from "next/link";

import { FiExternalLink } from "react-icons/fi";

const ProjectLink: React.FC<{ data: string }> = ({ data }) => {
  return (
    <div className="text-foreground border-foreground/30 flex items-center justify-center rounded-[calc(var(--radius)*0.8)] border p-[2em]">
      <Link href={data} target="_blank" rel="noopener noreferrer" className="">
        <button className="flex items-center gap-[0.5em] text-[22px] font-bold transition-opacity duration-300 hover:opacity-80 focus:opacity-80 sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
          Link To Site
          <FiExternalLink />
        </button>
      </Link>
    </div>
  );
};

export default ProjectLink;
