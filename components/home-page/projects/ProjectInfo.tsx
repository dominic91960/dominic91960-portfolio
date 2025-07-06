import React from "react";

const ProjectInfo: React.FC<{ data: string }> = ({ data }) => {
  return (
    <div className="text-foreground border-foreground/30 col-span-2 row-span-2 rounded border p-[2em] 2xl:h-[320px]">
      <h3 className="text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
        Info
      </h3>

      <br />
      <p className="whitespace-pre-wrap">{data}</p>
    </div>
  );
};

export default ProjectInfo;
