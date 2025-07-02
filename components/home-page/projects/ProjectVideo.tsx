import React, { useEffect, useRef } from "react";

type ProjectVideoProps = {
  data: {
    thumbnail: string;
    mp4Link: string;
    webmLink: string;
  };
};

const ProjectVideo: React.FC<ProjectVideoProps> = ({ data }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [data.mp4Link]);

  return (
    <div className="col-span-2 row-span-2 h-[400px] overflow-hidden rounded border border-white/30">
      <video
        ref={videoRef}
        autoPlay
        className="size-full object-cover object-top"
        disablePictureInPicture
        loop
        muted
        playsInline
        // src={data.webmLink}
        poster={data.thumbnail}
      >
        <source src={data.mp4Link} type="video/mp4" />
        Your browser does not support videos
      </video>
    </div>
  );
};

export default ProjectVideo;
