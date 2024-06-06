"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide min-w-0 flex-none w-full ">
          Slide 1
          <img
            src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 1"
          />
        </div>
        <div className="embla__slide">
          Slide 2
          <img
            src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide2"
          />
        </div>
        <div className="embla__slide">
          Slide 3
          <img
            src="https://plus.unsplash.com/premium_photo-1666345065313-751740249365?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide3"
          />
        </div>
      </div>
    </div>
  );
}
