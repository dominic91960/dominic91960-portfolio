import React from "react";

const ProjectVideo = () => {
  return (
    <div className="col-span-2 row-span-2 h-[400px] overflow-hidden rounded border border-white/30">
      <video
        autoPlay
        className="size-full object-cover object-top"
        disablePictureInPicture
        loop
        muted
        playsInline
        src="images/home-page/hero/hero.webm"
        poster="images/home-page/hero/hero-thumbnail.jpg"
      >
        <source src="images/home-page/hero/hero.mp4" type="video/mp4" />
        Your browser does not support videos
      </video>
    </div>
  );
};

export default ProjectVideo;
