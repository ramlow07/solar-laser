import React from "react";

export function VideoSection() {
  return (
    <div className="video-background">
      <video
        autoPlay
        muted
        loop
        className="video-iframe"
        src="energiaSolar.mp4"
        title="Background Video"
      ></video>
      <div className="content">
        <div className="mb-20 text-extralight">
          Confira abaixo alguns de nossos projetos
        </div>
      </div>
    </div>
  );
}
