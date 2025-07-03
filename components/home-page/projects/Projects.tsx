"use client";

import React, { useMemo, useState } from "react";

import { mainProjectsData } from "@/lib/constants";

import ProjectTechStack from "./ProjectTechStack";
import ProjectLink from "./ProjectLink";
import ProjectInfo from "./ProjectInfo";
import ProjectList from "./ProjectList";
import ProjectVideo from "./ProjectVideo";
import ProjectName from "./ProjectName";

const Projects = () => {
  const [selectedProjectID, setSelectedProjectID] = useState(
    mainProjectsData[0].id,
  );
  const projectListData = useMemo(
    () =>
      mainProjectsData.map((p) => ({
        id: p.id,
        name: p.name,
        type: p.type,
      })),
    [],
  );
  const selectedProjectData =
    mainProjectsData.find(({ id }) => id === selectedProjectID) ||
    mainProjectsData[0];

  return (
    <section>
      <div className="p-container container mx-auto">
        <div className="grid grid-cols-3 gap-[1em]">
          {/* Row 1 */}
          <ProjectTechStack data={selectedProjectData.techStack} />
          <ProjectLink data={selectedProjectData.siteLink} />

          {/* Row 2 */}

          <ProjectVideo data={selectedProjectData.videoLink} />
          <div className="gradient-bg col-span-2 rounded py-[0.7em] text-[40px] sm:text-[47px] md:text-[54px] lg:text-[61px] xl:text-[68px] 2xl:text-[75px]">
            {/* Section title */}
            <h2 className="text-background text-center font-bold tracking-tighter">
              My Projects
            </h2>
          </div>

          {/* Row 3 */}
          <ProjectName data={selectedProjectData.displayName} />
          <ProjectList
            data={projectListData}
            selectedProject={selectedProjectID}
            handleProjectSelect={setSelectedProjectID}
          />

          {/* Row 4 */}
          <ProjectInfo data={selectedProjectData.info} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
