"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="">
      <h1 className="md:text-3xl sm:text-3xl text-3xl mb-5 mt-3 mx-96 font-sans flex items-center justify-center tracking-tight font-normal text-stone-100 sm:text-xl">
        Trabalhamos com as maiores referências de produtos em energia solar do
        Brasil.
      </h1>

      <p className=" text-2xl mb-5 mt-3 mx-96 font-sans flex items-center justify-center tracking-tight text-wrap font-extralight text-stone-100">
        Seu negócio é o nosso compromisso. Para podermos melhor atender às
        necessidades de sua propriedade ou empresa, a qualidade precisa ser
        garantida desde os primeiros passos. E por isso, trabalhamos com as
        melhores marcas do Brasil, das quais somos também credenciados.
      </p>

      <div
        className="embla mx-auto overflow-hidden max-w-10xl mt-12 mb-12 h-40 border-dashed"
        ref={emblaRef}
      >
        <div className="embla__container flex h-full ">
          <div className="embla__slide min-w-0 flex w-full items-center justify-center  ">
            <img src="wegLogo.png" alt="Image 1" />
          </div>
          <div className="embla__slide min-w-0 flex h-full items-center justify-center ">
            <img src="intelbrasLogo1.png" alt="slide2" />
          </div>
          <div className="embla__slide min-w-0 flex w-full items-center justify-center ">
            <img src="komecoLogo2.png" alt="slide3" />
          </div>
          <div className="embla__slide min-w-0 flex w-full items-center justify-center  ">
            <img src="wegLogo.png" alt="Image 1" />
          </div>
          <div className="embla__slide min-w-0 flex h-full items-center justify-center ">
            <img src="intelbrasLogo1.png" alt="slide2" />
          </div>
          <div className="embla__slide min-w-0 flex w-full items-center justify-center ">
            <img src="komecoLogo2.png" alt="slide3" />
          </div>
        </div>
      </div>
    </div>
  );
}
