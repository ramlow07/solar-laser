"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../components/ui/EmblaCarouselArrowButtons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "../../components/ui/EmblaCarouselSelectedSnapDisplay";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const FeedbackSection: React.FC<PropType> = (props) => {
  const { slides, options } = props;

  // Initialize EmblaCarousel with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    ClassNames(),
    Autoplay({ delay: 3000 }), // Auto slide every 3 seconds
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <div className="feedbackBg bg-gradient-to-r from-blue-800 to-blue-400">
      <section className="embla__feedback">
        <div className="flex justify-center mt-10">
          <h1 className="text-center md:text-2xl sm:text-2xl text-2xl mb-5 mt-3 mx-96 font-sans flex items-center justify-center tracking-wider font-light text-stone-100 sm:mx-auto ml-3 mr-3 ">
            A Solar Laser é a empresa mais bem avaliada da região da Grande
            Florianópolis no Google. Confira abaixo o que nossos clientes falam
            sobre o nosso trabalho:
          </h1>
        </div>
        <div className="embla__slider_feedback">
          <div className="embla__viewport mt-10 mb-10" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div
                  className="embla__slide"
                  key={index}
                  style={{ width: "100%" }}
                >
                  <img
                    className="embla__slide__feedback"
                    src={`feedbacks/feedback${index + 1}.png`}
                    alt={`Feedback ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-2xl mx-auto my-5 space-x-7 max-w-2xl px-20 lg:px-50 justify-between">
          <a href="https://api.whatsapp.com/send/?phone=5548996954614&text=Ol%C3%A1+gostaria+de+um+or%C3%A7amento&type=phone_number&app_absent=0">
            <button className=" px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
              CLIQUE AQUI E FALE COM UM ESPECIALISTA.
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FeedbackSection;
