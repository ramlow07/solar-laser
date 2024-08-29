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
    Autoplay({ delay: 2000 }), // Auto slide every 3 seconds
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <section className="embla__feedback">
      <div className="embla__slider_feedback">
        <div className="embla__viewport" ref={emblaRef}>
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

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </section>
  );
};

export default FeedbackSection;
