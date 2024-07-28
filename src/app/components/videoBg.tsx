import React from "react";

export function VideoSection() {
  return (
    <video className="h-full w-full rounded-lg" controls autoPlay muted>
      <source
        src="https://www.youtube.com/watch?v=9c1kPE77AQw"
        type="video/mp4"
      />
    </video>
  );
}
