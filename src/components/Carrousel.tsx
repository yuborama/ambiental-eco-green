import React from "react";

import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CarrouselArrowButtons";
import type { EmblaOptionsType } from "embla-carousel";

type PropType = {
  slides: {
    id: string | number;
    render: () => JSX.Element;
  }[];
  options?: EmblaOptionsType;
};

export const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla relative flex items-center justify-center">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((e, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number select-none">
                {e?.render()}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute  flex-row flex justify-between w-full">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};
