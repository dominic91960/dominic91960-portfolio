import React from "react";
import Link from "next/link";

import * as Acc from "@radix-ui/react-accordion";
import { FaChevronDown } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { mainProjectsData } from "@/lib/constants";
import MobileProjectVideo from "./MobileProjectVideo";

const ProjectAccordion = () => {
  return (
    <div className="text-foreground lg:hidden">
      {/* Title */}
      <div className="gradient-bg rounded py-[0.7em] text-[40px] sm:text-[47px] md:text-[54px]">
        <h2 className="text-background text-center font-bold tracking-tighter">
          My Projects
        </h2>
      </div>

      <Acc.Root type="single" collapsible>
        {mainProjectsData.map(
          ({ id, info, name, siteLink, type, videoLink }) => (
            <Acc.Item key={id} value={id}>
              <Acc.Header className="px-[1em]">
                {/* Trigger */}
                <Acc.Trigger className="group flex w-full items-center justify-between py-[1em] text-[16px] font-semibold sm:text-[20px] md:text-[22px]">
                  <div className="text-left">
                    <p>{name}</p>
                    <p className="mt-[0.1em] text-[13px] font-light uppercase">
                      {type}
                    </p>
                  </div>
                  <FaChevronDown className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" />
                </Acc.Trigger>
              </Acc.Header>

              <Acc.Content className="data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down mb-[1em] flex flex-col gap-[1.5em] overflow-hidden px-[1em]">
                <div className="flex flex-col gap-[1.5em]">
                  <MobileProjectVideo data={videoLink} />
                </div>
                <p className="col-span-3 whitespace-pre-wrap">{info}</p>
                <Link
                  href={siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-auto w-fit"
                >
                  <button className="flex items-center gap-[0.5em] text-[16px] font-bold transition-opacity duration-300 hover:opacity-80 focus:opacity-80 sm:text-[20px] md:text-[22px]">
                    Link To Site
                    <FiExternalLink />
                  </button>
                </Link>
              </Acc.Content>
              <div className="gradient-bg h-[1px]"></div>
            </Acc.Item>
          ),
        )}
      </Acc.Root>
    </div>
  );
};

export default ProjectAccordion;
