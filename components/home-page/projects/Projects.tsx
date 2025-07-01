import React from "react";

import ProjectTechStack from "./ProjectTechStack";
import ProjectLink from "./ProjectLink";
import ProjectInfo from "./ProjectInfo";
import ProjectList from "./ProjectList";
import ProjectVideo from "./ProjectVideo";
import ProjectName from "./ProjectName";

const Projects = () => {
  return (
    <section>
      <div className="p-container container mx-auto">
        <div className="grid grid-cols-3 gap-[1em]">
          {/* Row 1 */}
          <ProjectTechStack />
          <ProjectLink />

          {/* Row 2 */}
          <ProjectInfo />
          <div className="gradient-bg col-span-2 rounded py-[0.7em] text-[40px] sm:text-[47px] md:text-[54px] lg:text-[61px] xl:text-[68px] 2xl:text-[75px]">
            {/* Section title */}
            <h2 className="text-background text-center font-bold tracking-tighter">
              My Projects
            </h2>
          </div>

          {/* Row 3 */}
          <ProjectName />
          <ProjectList />

          {/* Row 4 */}
          <ProjectVideo />
        </div>
      </div>
    </section>
  );
};

export default Projects;
