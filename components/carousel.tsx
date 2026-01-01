// // index.tsx

// import React from "react";
// import ReactDOM from "react-dom/client";
// import EmblaCarousel from "./EmblaCarousel";
// import { EmblaOptionsType } from "embla-carousel";
// import Header from "./Header";
// import Footer from "./Footer";
// import "../css/base.css";
// import "../css/sandbox.css";
// import "../css/embla.css";

// const OPTIONS: EmblaOptionsType = { loop: true };
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

// const App: React.FC = () => (
//   <>
//     <Header />
//     <EmblaCarousel slides={SLIDES} options={OPTIONS} />
//     <Footer />
//   </>
// );

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//  // EmblaCarousel.tsx

// import React, { useRef } from "react";
// import { EmblaOptionsType } from "embla-carousel";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { useAutoplay } from "./EmblaCarouselAutoplay";
// import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";

// type PropType = {
//   slides: number[];
//   options?: EmblaOptionsType;
// };

// const EmblaCarousel: React.FC<PropType> = (props) => {
//   const { slides, options } = props;
//   const progressNode = useRef<HTMLDivElement>(null);
//   const [emblaRef, emblaApi] = useEmblaCarousel(options, [
//     Autoplay({ playOnInit: false, delay: 3000 }),
//   ]);

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
//     useAutoplay(emblaApi);

//   const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div className="embla__slide" key={index}>
//               <div className="embla__slide__number">
//                 <span>{index + 1}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla__controls">
//         <div className="embla__buttons">
//           <PrevButton
//             onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
//             disabled={prevBtnDisabled}
//           />
//           <NextButton
//             onClick={() => onAutoplayButtonClick(onNextButtonClick)}
//             disabled={nextBtnDisabled}
//           />
//         </div>

//         <div
//           className={`embla__progress`.concat(
//             showAutoplayProgress ? "" : " embla__progress--hidden"
//           )}>
//           <div className="embla__progress__bar" ref={progressNode} />
//         </div>

//         <button className="embla__play" onClick={toggleAutoplay} type="button">
//           {autoplayIsPlaying ? "Stop" : "Start"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel;

// //EmblaCarouselArrowButtons.tsx

// import React, {
//   ComponentPropsWithRef,
//   useCallback,
//   useEffect,
//   useState,
// } from "react";
// import { EmblaCarouselType } from "embla-carousel";

// type UsePrevNextButtonsType = {
//   prevBtnDisabled: boolean;
//   nextBtnDisabled: boolean;
//   onPrevButtonClick: () => void;
//   onNextButtonClick: () => void;
// };

// export const usePrevNextButtons = (
//   emblaApi: EmblaCarouselType | undefined,
//   onButtonClick?: (emblaApi: EmblaCarouselType) => void
// ): UsePrevNextButtonsType => {
//   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
//   const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

//   const onPrevButtonClick = useCallback(() => {
//     if (!emblaApi) return;
//     emblaApi.scrollPrev();
//     if (onButtonClick) onButtonClick(emblaApi);
//   }, [emblaApi, onButtonClick]);

//   const onNextButtonClick = useCallback(() => {
//     if (!emblaApi) return;
//     emblaApi.scrollNext();
//     if (onButtonClick) onButtonClick(emblaApi);
//   }, [emblaApi, onButtonClick]);

//   const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
//     setPrevBtnDisabled(!emblaApi.canScrollPrev());
//     setNextBtnDisabled(!emblaApi.canScrollNext());
//   }, []);

//   useEffect(() => {
//     if (!emblaApi) return;

//     onSelect(emblaApi);
//     emblaApi.on("reInit", onSelect).on("select", onSelect);
//   }, [emblaApi, onSelect]);

//   return {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   };
// };

// type PropType = ComponentPropsWithRef<"button">;

// export const PrevButton: React.FC<PropType> = (props) => {
//   const { children, ...restProps } = props;

//   return (
//     <button
//       className="embla__button embla__button--prev"
//       type="button"
//       {...restProps}>
//       <svg className="embla__button__svg" viewBox="0 0 532 532">
//         <path
//           fill="currentColor"
//           d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
//         />
//       </svg>
//       {children}
//     </button>
//   );
// };

// export const NextButton: React.FC<PropType> = (props) => {
//   const { children, ...restProps } = props;

//   return (
//     <button
//       className="embla__button embla__button--next"
//       type="button"
//       {...restProps}>
//       <svg className="embla__button__svg" viewBox="0 0 532 532">
//         <path
//           fill="currentColor"
//           d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
//         />
//       </svg>
//       {children}
//     </button>
//   );
// };

// // EmblaCarouselAutoplay.tsx

// import { useCallback, useEffect, useState } from "react";
// import { EmblaCarouselType } from "embla-carousel";

// type UseAutoplayType = {
//   autoplayIsPlaying: boolean;
//   toggleAutoplay: () => void;
//   onAutoplayButtonClick: (callback: () => void) => void;
// };

// export const useAutoplay = (
//   emblaApi: EmblaCarouselType | undefined
// ): UseAutoplayType => {
//   const [autoplayIsPlaying, setAutoplayIsPlaying] = useState(false);

//   const onAutoplayButtonClick = useCallback(
//     (callback: () => void) => {
//       const autoplay = emblaApi?.plugins()?.autoplay;
//       if (!autoplay) return;

//       const resetOrStop =
//         autoplay.options.stopOnInteraction === false
//           ? autoplay.reset
//           : autoplay.stop;

//       resetOrStop();
//       callback();
//     },
//     [emblaApi]
//   );

//   const toggleAutoplay = useCallback(() => {
//     const autoplay = emblaApi?.plugins()?.autoplay;
//     if (!autoplay) return;

//     const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
//     playOrStop();
//   }, [emblaApi]);

//   useEffect(() => {
//     const autoplay = emblaApi?.plugins()?.autoplay;
//     if (!autoplay) return;

//     setAutoplayIsPlaying(autoplay.isPlaying());
//     emblaApi
//       .on("autoplay:play", () => setAutoplayIsPlaying(true))
//       .on("autoplay:stop", () => setAutoplayIsPlaying(false))
//       .on("reInit", () => setAutoplayIsPlaying(autoplay.isPlaying()));
//   }, [emblaApi]);

//   return {
//     autoplayIsPlaying,
//     toggleAutoplay,
//     onAutoplayButtonClick,
//   };
// };

// // EmblaCarouselAutoplayProgress.tsx

// import { useCallback, useEffect, useRef, useState } from 'react'
// import { EmblaCarouselType } from 'embla-carousel'

// type UseAutoplayProgressType = {
//   showAutoplayProgress: boolean
// }

// export const useAutoplayProgress = <ProgressElement extends HTMLElement>(
//   emblaApi: EmblaCarouselType | undefined,
//   progressNode: React.RefObject<ProgressElement>
// ): UseAutoplayProgressType => {
//   const [showAutoplayProgress, setShowAutoplayProgress] = useState(false)
//   const animationName = useRef('')
//   const timeoutId = useRef(0)
//   const rafId = useRef(0)

//   const startProgress = useCallback((timeUntilNext: number | null) => {
//     const node = progressNode.current

//     if (!node) return
//     if (timeUntilNext === null) return

//     if (!animationName.current) {
//       const style = window.getComputedStyle(node)
//       animationName.current = style.animationName
//     }

//     node.style.animationName = 'none'
//     node.style.transform = 'translate3d(0,0,0)'

//     rafId.current = window.requestAnimationFrame(() => {
//       timeoutId.current = window.setTimeout(() => {
//         node.style.animationName = animationName.current
//         node.style.animationDuration = `${timeUntilNext}ms`
//       }, 0)
//     })

//     setShowAutoplayProgress(true)
//   }, [])

//   useEffect(() => {
//     const autoplay = emblaApi?.plugins()?.autoplay
//     if (!autoplay) return

//     emblaApi
//       .on('autoplay:timerset', () => startProgress(autoplay.timeUntilNext()))
//       .on('autoplay:timerstopped', () => setShowAutoplayProgress(false))
//   }, [emblaApi])

//   useEffect(() => {
//     return () => {
//       cancelAnimationFrame(rafId.current)
//       clearTimeout(timeoutId.current)
//     }
//   }, [])

//   return {
//     showAutoplayProgress
//   }
// }
