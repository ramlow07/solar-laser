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
      <h1 class="font-inter flex items-center justify-center mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
        Trabalhamos com as{" "}
        <span class="text-orange-600 dark:text-black-500 mx-2">
          maiores referências
        </span>{" "}
        de produtos em energia solar do Brasil.
      </h1>
      <p className=" mt-3 mx-5 font-inter flex items-center justify-center tracking-tight">
        Seu negócio, nosso compromisso. Para podermos melhor atender às
        necessidades de sua propriedade ou empresa, a qualidade precisa ser
        garantida desde os primeiros passos. E por isso, trabalhamos com as
        melhores marcas do Brasil, das quais somos também credenciados.
      </p>

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
