import React from "react";

type ProjectTechStackProps = {
  data: {
    id: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
};

const ProjectTechStack: React.FC<ProjectTechStackProps> = ({ data }) => {
  return (
    <div className="text-foreground col-span-2 flex h-[200px] gap-[1em] rounded border border-white/30 p-[3em]">
      <h3 className="shrink-0 self-center text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
        Tech <br /> Stack
      </h3>
      <div className="flex grow items-center justify-center gap-[5em]">
        {data.map(({ id, Icon }) => (
          <Icon className="h-[4em] max-w-1/5 opacity-30" key={id} />
        ))}
      </div>
    </div>
  );
};

export default ProjectTechStack;
