"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function FeedbackCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="">
      <h1 className=" text-center mr-2 ml-2 font-sans flex items-center justify-center mb-4 text-xl font-light text-stone-100 leading-none tracking-wide text-gray-900 sm:text-xl md:text-3xl lg:text-3xl dark:text-white">
        E trabalhamos também com as maiores financeiras do Brasil
      </h1>

      <div
        className="embla mx-auto overflow-hidden mt-12 mb-12 h-40 border-none"
        ref={emblaRef}
      >
        <div className="embla__container flex h-full">
          <div className="embla__slide min-w-0 flex w-full items-center justify-center border-none">
            <img src="santanderLogo1.png" alt="slide2" />
          </div>

          <div className="embla__slide min-w-0 flex w-full items-center justify-center ">
            <img src="sicoobLogo1.png" alt="slide3" />
          </div>
          <div className="embla__slide min-w-0 flex w-full items-center justify-center ">
            <img src="sicrediLogo2.png" alt="slide4" />
          </div>
          <div className="embla__slide min-w-0 flex w-full items-center justify-center ">
            <img src="santanderLogo1.png" alt="slide2" />
          </div>
          <div className="embla__slide min-w-0 flex w-full items-center justify-center ">
            <img src="sicoobLogo1.png" alt="slide3" />
          </div>
          <div className="embla__slide min-w-0 flex w-full items-center justify-center ">
            <img src="sicrediLogo2.png" alt="slide4" />
          </div>
        </div>
      </div>
    </div>
  );
}
