import { cn } from "@/lib/utils";
import React from "react";

type MobileProjectTechStackProps = {
  data: {
    id: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
};

const MobileProjectTechStack: React.FC<MobileProjectTechStackProps> = ({
  data,
}) => {
  const colCount = `grid-cols-${data.length}`;

  return (
    <div
      className={cn(
        "grid h-[20px] grow gap-[2em] sm:h-[25px] md:h-[28px]",
        colCount,
      )}
    >
      {data.map(({ id, Icon }) => (
        <Icon key={id} className="size-full opacity-30" />
      ))}
    </div>
  );
};

export default MobileProjectTechStack;
