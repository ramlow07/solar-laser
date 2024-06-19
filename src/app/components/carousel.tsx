"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import wegLogo from "..public/wegLogo.png";
import komecoLogo from "..public/komecoLogo.png";
import intelbrasLogo from "..public/intelbrasLogo.png";
import { Space_Mono } from "next/font/google";

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    // TODO: add style to the h1
    <div>
      <h1>
        Somos credenciados pelas maiores referências em tecnologia solar do
        Brasil.
      </h1>
      <div
        className="embla mx-auto overflow-hidden max-w-2xl mt-12 mb-12 h-96 border"
        ref={emblaRef}
      >
        <div className="embla__container flex h-full">
          <div className="embla__slide min-w-0 flex h-full items-center justify-center ">
            <img src="wegLogo.png" alt="Image 1" />
          </div>
          <div className="embla__slide min-w-0 flex w-full items-center justify-center ">
            <img src="intelbrasLogo.png" alt="slide2" />
          </div>
          <div className="embla__slide min-w-0 flex w-full items-center justify-center ">
            <img src="komecoLogo.png" alt="slide3" />
          </div>
        </div>
      </div>
    </div>
  );
}
