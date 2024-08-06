"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function FeedbackCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    // TODO: add bv logo inside the slider
    <div className="">
      <h1 className="font-sans flex items-center justify-center mb-4 text-xl font-normal bg-white leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
        E trabalhamos também com as maiores financeiras do Brasil.
      </h1>

      <div
        className="embla mx-auto overflow-hidden max-w-10xl mt-12 mb-12 h-40 border"
        ref={emblaRef}
      >
        <div className="embla__container flex h-full">
          <div className="embla__slide min-w-0 flex w-full items-center justify-center ">
            <img src="santanderLogo.png" alt="slide2" />
          </div>
          <div className="embla__slide min-w-0 flex w-full items-center justify-center ">
            <img src="sicoobLogo.png" alt="slide3" />
          </div>
          <div className="embla__slide min-w-0 flex w-full items-center justify-center ">
            <img src="sicrediLogo.png" alt="slide4" />
          </div>
        </div>
      </div>
    </div>
  );
}
