import React from "react";

import * as Acc from "@radix-ui/react-accordion";
import { FaChevronDown } from "react-icons/fa";

const Accordion = () => {
  return (
    <section>
      <div className="px-container text-foreground container mx-auto my-[50px]">
        <Acc.Root type="single" collapsible>
          <Acc.Item value="item-1">
            <Acc.Header>
              <Acc.Trigger className="group flex w-full items-center justify-between">
                Is it accessible?{" "}
                <FaChevronDown className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" />
              </Acc.Trigger>
            </Acc.Header>
            <Acc.Content className="data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down overflow-hidden">
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern. Yes. It adheres to the WAI-ARIA design pattern.
              Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
              the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA
              design pattern.
            </Acc.Content>
            <div className="h-[2px] bg-white"></div>
          </Acc.Item>
        </Acc.Root>
      </div>
    </section>
  );
};

export default Accordion;
