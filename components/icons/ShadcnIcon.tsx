import React from "react";

const ShadcnIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_83_6)">
        <path
          d="M208 128L128 208"
          stroke="var(--color-foreground)"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M192 40L40 192"
          stroke="var(--color-foreground)"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_83_6">
          <rect width="256" height="256" fill="none" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ShadcnIcon;
