"use client";

import React from "react";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

type MobileProjectVideoProps = {
  data: string;
};

const MobileProjectVideo: React.FC<MobileProjectVideoProps> = ({ data }) => {
  return (
    <div className="text-foreground border-foreground/30 flex items-center overflow-hidden rounded border">
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

export default MobileProjectVideo;
