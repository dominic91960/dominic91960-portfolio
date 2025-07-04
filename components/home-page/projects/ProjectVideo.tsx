import React from "react";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

type ProjectVideoProps = {
  data: string;
};

const ProjectVideo: React.FC<ProjectVideoProps> = ({ data }) => {
  return (
    <div className="text-foreground border-foreground/30 row-span-2 flex items-center overflow-hidden rounded border">
      <CldVideoPlayer
        key={data}
        src={data}
        width="16"
        height="9"
        autoplay="on-scroll"
        controls={false}
        loop
        muted
        transformation={{
          quality: "auto",
          format: "auto",
          videoCodec: "auto",
        }}
      />
    </div>
  );
};

export default ProjectVideo;
