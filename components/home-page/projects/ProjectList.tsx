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
    <div className="text-foreground row-span-3 rounded border border-white/30 p-[2em]">
      <h3 className="text-[22px] font-bold sm:text-[24px] md:text-[27px] lg:text-[29px] xl:text-[31px] 2xl:text-[32px]">
        List Of Projects
      </h3>

      <br />
      <ul className="mt-[0.3em] space-y-[1.5em] text-[1.2em]">
        {data.map(({ id, name, type }) => {
          const isSelected = id === selectedProject;

          return (
            <li key={id}>
              <div className="flex items-end border-b border-b-white/30 px-[0.2em] pb-[0.4em]">
                {isSelected && (
                  <div className="gradient-bg mr-[0.4em] size-[0.6em] self-center rounded-full blur-[2px]"></div>
                )}
                <button
                  className="max-w-3/5 text-left font-medium"
                  onClick={() => handleProjectSelect(id)}
                >
                  {name}
                </button>
                <p className="ms-auto text-[0.8em] font-light uppercase">
                  {type}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
