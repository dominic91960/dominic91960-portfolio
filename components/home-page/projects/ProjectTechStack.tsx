import React from "react";

type ProjectTechStackProps = {
  data: {
    id: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
};

const ProjectTechStack: React.FC<ProjectTechStackProps> = ({ data }) => {
  const colCount = data.length > 0 ? data.length : 4;
  return (
    <div className="text-foreground border-foreground/30 col-span-2 flex items-center gap-[3em] rounded-[calc(var(--radius)*0.8)] border p-[2em]">
      <h3 className="shrink-0 self-center text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
        Tech <br /> Stack
      </h3>
      <div
        className="grid h-[60px] w-full grow gap-[2em]"
        style={{
          gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
        }}
      >
        {data.map(({ id, Icon }) => (
          <Icon key={id} className="size-full opacity-30" />
        ))}
      </div>
    </div>
  );
};

export default ProjectTechStack;
