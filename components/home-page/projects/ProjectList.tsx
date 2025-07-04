import { cn } from "@/lib/utils";
import React from "react";

type ProjectListProps = {
  data: { id: string; name: string; type: string }[];
  selectedProject: string;
  handleProjectSelect: (id: string) => void;
};

const ProjectList: React.FC<ProjectListProps> = ({
  data,
  selectedProject,
  handleProjectSelect,
}) => {
  return (
    <div className="text-foreground border-foreground/30 row-span-3 rounded border p-[2em]">
      <h3 className="text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
        List Of Projects
      </h3>

      <br />
      <ul className="mt-[0.3em] space-y-[1.5em] text-[1.2em]">
        {data.map(({ id, name, type }) => {
          const isSelected = id === selectedProject;

          return (
            <li
              key={id}
              className="border-b-foreground/30 flex items-end justify-end gap-[1em] border-b px-[0.2em] pb-[0.4em]"
            >
              <button
                className={cn(
                  "relative grow ps-0 text-left font-medium transition-all duration-500",
                  isSelected && "ps-[1.3em]",
                )}
                onClick={() => handleProjectSelect(id)}
              >
                <div
                  className={cn(
                    "gradient-bg absolute top-0 bottom-0 left-[0.2em] my-auto mr-[0.4em] size-[0.6em] rounded-full opacity-0 blur-[2px] transition-opacity duration-300",
                    isSelected && "opacity-100",
                  )}
                ></div>

                <span className="relative">{name}</span>
              </button>
              <p className="max-w-[12ch] shrink-0 text-right text-[0.8em] font-light uppercase">
                {type}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
