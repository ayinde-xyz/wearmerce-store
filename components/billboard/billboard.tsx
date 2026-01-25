"use client";
import { type Billboard } from "@/types";
import BackgroundVideo from "next-video/background-video";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useAutoplayProgress } from "@/hooks/use-autoplay-progress";
import useEmblaCarousel from "embla-carousel-react";
import { useRef, useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";
import { Skeleton } from "../ui/skeleton";

interface BillboardProps {
  data: Billboard[];
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  // Function to detect if a URL is an image or a video

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const isMobile = useIsMobile();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      playOnInit: false,
      delay: 7000,
    }),
  ]);
  const progressNode = useRef<HTMLDivElement>(null);

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  // Sync selected index and slide count from the Carousel's embla API
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const isImageUrl = (url: string): boolean => {
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
    const videoExtensions = ["mp4", "webm", "ogg", "avi", "mov", "wmv", "flv"];

    const extension = url.split(".").pop()?.toLowerCase();
    if (!extension) return false;

    return imageExtensions.includes(extension);
  };

  // const isImage = isImageUrl(data.imageUrl);

  return (
    <Carousel
      setApi={setApi}
      orientation="horizontal"
      plugins={[
        Autoplay({
          delay: 10000,
          stopOnInteraction: false,
        }),
      ]}>
      <CarouselContent>
        {data &&
          data.map((billboard) => (
            <CarouselItem key={billboard.id}>
              <AspectRatio ratio={isMobile ? 9 / 16 : 2.4 / 1}>
                <Suspense fallback={<Skeleton className="w-full h-full" />}>
                  {isImageUrl(billboard.imageUrl) ? (
                    <div
                      style={{ backgroundImage: `url(${billboard.imageUrl})` }}
                      className="relative  overflow-hidden bg-cover bg-left md:bg-center bg-clip-border">
                      <div className="h-full bg-linear-to-b  from-gray-300/10 to-slate-600/60 to-95% backdrop-opacity-95   text-center w-full ">
                        <div className="absolute bottom-3 left-3 w-[70%] text-left flex space-y-2 md:space-y-4 flex-col items-start ml-6 mb-4">
                          <h1 className="font-bold uppercase tracking-tight text-amber-50  text-xl sm:text-3xl lg:text-4xl sm:max-w-xl max-w-xs">
                            {billboard.label}
                          </h1>
                          <p className="text-amber-50 line-clamp-3">
                            {billboard.caption}
                          </p>
                          <Button className="rounded-none">
                            <Link href={"/"}>Shop now</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-full">
                      <BackgroundVideo
                        src={billboard.imageUrl}
                        style={{
                          height: "100%",
                        }}
                        className="p-0  bg-cover  md:bg-center bg-clip-border">
                        <div className="absolute h-full  bg-linear-to-b  from-gray-300/10 to-slate-600/60 to-95% backdrop-opacity-95  w-full "></div>
                      </BackgroundVideo>
                      <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 w-[70%] text-left flex space-y-2 md:space-y-4 flex-col items-start">
                        <h1 className="font-bold uppercase tracking-tight text-amber-50  text-xl sm:text-3xl lg:text-4xl sm:max-w-xl max-w-xs">
                          {billboard.label}
                        </h1>
                        <p className="text-amber-50 line-clamp-3">
                          {billboard.caption}
                        </p>
                        <Button className="rounded-none">
                          <Link href={"/"}>Shop now</Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </Suspense>
              </AspectRatio>
            </CarouselItem>
          ))}
      </CarouselContent>
      <div className="absolute bottom-4 right-4 flex flex-col items-center space-y-2">
        <div className="flex space-x-1">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <div className="flex items-center space-x-2">
          {Array.from({ length: count }).map((_, idx) => (
            <button
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${current === idx ? "bg-slate-500" : "bg-slate-200/60"}`}
              onClick={() => api?.scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div
          className={`rounded-full shadow-md relative w-10 h-[0.3rem] justify-self-end align-center  overflow-hidden bg-slate-200 justify-center transition-opacity duration-10000 ease-in-out`.concat(
            showAutoplayProgress ? "" : "opacity-0",
          )}>
          <div
            className="absolute w-full top-0 bottom-0  bg-slate-800 animate-wiggle"
            ref={progressNode}
          />
        </div>
      </div>
    </Carousel>
  );
};

export default Billboard;

// https://res.cloudinary.com/dbgxwchuy/video/upload/v1734949392/rg0pxlihoy5oc3jvegw6.mp4
// https://res.cloudinary.com/dbgxwchuy/video/upload/v1767202094/nike_k3n8ww.mp4
