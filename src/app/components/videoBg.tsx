import React from "react";

export function VideoSection() {
  return (
    <div className="video-background ">
      <iframe
        className="video-iframe absolute w-full h-full object-cover"
        src="https://www.youtube.com/embed/9c1kPE77AQw?autoplay=1&mute=1&loop=1"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Background Video"
      ></iframe>
      <div className="content">
        {/* Your content here, e.g., headings, buttons, etc. */}
        <div className="mb-5 text-extralight">
          Confira abaixo alguns de nossos projetos
        </div>
      </div>
    </div>
  );
}
