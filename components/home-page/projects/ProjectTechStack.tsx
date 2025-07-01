import React from "react";
import ExpressIcon from "@/components/icons/ExpressIcon";
import NodeIcon from "@/components/icons/NodeIcon";
import ReactIcon from "@/components/icons/ReactIcon";

const ProjectTechStack = () => {
  return (
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
  );
};

export default ProjectTechStack;
