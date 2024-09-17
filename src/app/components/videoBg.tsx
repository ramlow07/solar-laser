import React from "react";

export function VideoSection() {
  return (
    <div className="video-background">
      <video
        autoPlay
        muted
        loop
        className="video-iframe rounded-xl"
        src="energiaSolar.mp4"
        title="Background Video"
      ></video>
      <div className="content">
        <div className="mb-20 ">
          <h1 className="text-center md:text-2xl sm:text-2xl text-2xl mb-20 font-sans flex items-center justify-center tracking-wider font-light text-stone-100 sm:mx-auto ml-3 mr-3 ">
            Confira abaixo alguns de nossos projetos já realizados:
          </h1>
        </div>
      </div>
    </div>
  );
}
