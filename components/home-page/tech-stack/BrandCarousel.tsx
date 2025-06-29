"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import { brandCarouselData } from "@/lib/constants";
import { cn } from "@/lib/utils";

const BrandCarousel: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from("#brand-carousel", {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-[1] flex flex-col justify-between gap-[2em] overflow-hidden",
        className,
      )}
    >
      {/* Top line */}
      <div className="via-foreground/30 h-px bg-gradient-to-r from-transparent to-transparent"></div>

      {/* Carousel */}
      <div
        id="brand-carousel"
        className="grid w-[800%] grid-cols-2 lg:w-[400%]"
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <div className="grid grid-cols-8" key={i}>
            {brandCarouselData.map(({ id, Icon }) => (
              <div
                key={id}
                tabIndex={-1}
                className="relative flex items-center justify-center opacity-100 transition-opacity duration-300 hover:opacity-100 focus:opacity-100"
              >
                <Icon className="h-fit w-3/5" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Side gradients to hide sudden clipping */}
      <div className="from-background absolute top-0 bottom-0 left-0 w-1/10 bg-gradient-to-r to-transparent"></div>
      <div className="from-background absolute top-0 right-0 bottom-0 w-1/10 bg-gradient-to-l to-transparent"></div>

      {/* Bottom line */}
      <div className="via-foreground/30 h-[1px] bg-gradient-to-r from-transparent to-transparent"></div>
    </div>
  );
};

export default BrandCarousel;
