import React from "react";

const ProjectInfo: React.FC<{ data: string }> = ({ data }) => {
  return (
    <div className="text-foreground row-span-2 rounded border border-white/30 p-[2em]">
      <h3 className="text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
        Info
      </h3>

      <br />
      <p className="whitespace-pre-wrap">{data}</p>
    </div>
  );
};

export default ProjectInfo;
