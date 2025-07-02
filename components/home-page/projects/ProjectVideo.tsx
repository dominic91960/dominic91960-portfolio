import React from "react";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

type ProjectVideoProps = {
  data: string;
};

const ProjectVideo: React.FC<ProjectVideoProps> = ({ data }) => {
  return (
    <div className="col-span-2 row-span-2 h-[400px] overflow-hidden rounded border border-white/30">
      <CldVideoPlayer
        key={data}
        src={data}
        width="16"
        height="9"
        autoplay="on-scroll"
        controls={false}
        loop
        muted
      />
    </div>
  );
};

export default ProjectVideo;
