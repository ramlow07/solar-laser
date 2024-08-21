import React from "react";

export function VideoSection() {
  return (
    <div className="video-background">
      <iframe
        className="video-iframe w-full h-full"
        src="https://www.youtube.com/embed/9c1kPE77AQw?autoplay=1&mute=1&loop=1"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Background Video"
      ></iframe>
      <div className="content">
        {/* Your content here, e.g., headings, buttons, etc. */}
        <h1>Welcome to Our Site</h1>
        <p>This is a video background example.</p>
      </div>
    </div>
  );
}
