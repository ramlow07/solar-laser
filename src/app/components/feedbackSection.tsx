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
          <h1 className="text-center md:text-2xl sm:text-2xl text-2xl mb-5 mt-3 mx-96 font-sans flex items-center justify-center tracking-wide font-light text-stone-200 sm:mx-auto ml-3 mr-3 ">
            Veja o que nossos clientes falam sobre a Solar Laser
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
      </section>
    </div>
  );
};

export default FeedbackSection;
