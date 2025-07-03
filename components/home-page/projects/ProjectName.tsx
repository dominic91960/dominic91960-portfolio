import React from "react";

const ProjectName: React.FC<{ data: string }> = ({ data }) => {
  return (
    <div className="text-foreground flex items-center justify-center rounded border border-white/30 p-[2em] text-center">
      <h3 className="flex h-[2.2em] items-center text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[50px]">
        {data}
      </h3>
    </div>
  );
};

export default ProjectName;
