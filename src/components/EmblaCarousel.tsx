import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import s from "../styles/EmblaCarousel.module.css";
import Image from "next/image"

const EmblaCarousel = ({ slides, media, projectName }: IProps) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const mediaByIndex = (index: number) => media[index % media.length];

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className={s.embla}>
      <div className={`${s.embla__viewport} ${s.is_draggable}`} ref={viewportRef}>
        <div className={s.embla__container}>
          {slides.map((index: number) => (
            <div className={s.embla__slide} key={index}>
              <div className={s.embla__slide__inner}>
                <Image
                  className={s.embla__slide__img}
                  src={mediaByIndex(index)}
                  layout="fill"
                  objectFit="contain"
                  alt={`Screenshot projektu ${projectName}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

interface IProps {
  slides: number[],
  media: string[],
  projectName: string,
}

export default EmblaCarousel;