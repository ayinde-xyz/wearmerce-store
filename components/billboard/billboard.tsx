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
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  // Function to detect if a URL is an image or a video
  const isImageUrl = (url: string): boolean => {
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
    const videoExtensions = ["mp4", "webm", "ogg", "avi", "mov", "wmv", "flv"];

    const extension = url.split(".").pop()?.toLowerCase();
    if (!extension) return false;

    return imageExtensions.includes(extension);
  };

  const isImage = isImageUrl(data.imageUrl);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      playOnInit: false,
      delay: 2000,
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

  return (
    // <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden ">
    // 	{isImage ? (
    // 		<div
    // 			style={{ backgroundImage: `url(${data.imageUrl})` }}
    // 			className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
    // 		>
    // 			<div className="h-full justify-center items-center text-center w-full flex flex-col gap-y-8">
    // 				<div className="font-bold  text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
    // 					{data?.label}{" "}
    // 				</div>
    // 			</div>
    // 		</div>
    // 	) : (
    // 		<BackgroundVideo
    // 			src={data.imageUrl}
    // 			className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
    // 		>
    // 			<div className="h-full justify-center items-center text-center w-full flex flex-col gap-y-8">
    // 				<div className="font-bold  text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
    // 					{data?.label}{" "}
    // 				</div>
    // 			</div>
    // 		</BackgroundVideo>
    // 	)}
    // </div>
    <Carousel
      setApi={setApi}
      orientation="horizontal"
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
        }),
      ]}>
      <CarouselContent>
        <CarouselItem>
          <div
            style={{ backgroundImage: `url(${data.imageUrl})` }}
            className="relative aspect-3/4 md:aspect-[2.4/1] overflow-hidden bg-cover bg-left md:bg-center bg-clip-border">
            <div className="h-full bg-linear-to-b  from-gray-300/10 to-slate-600/60 to-95% backdrop-opacity-95   text-center w-full ">
              <div className="absolute bottom-3 left-3 flex space-y-2 ">
                <h1 className="font-bold tracking-tight text-amber-50  text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                  YOU CAN DO IT
                </h1>
                <p className="text-amber-50">
                  Stay on the offense by shopping from our latest collection in
                  Nike and Adidas
                </p>
                <Button className="flex itesm-center gap-x-2">
                  <Link href={"/"}>Shop now</Link>
                </Button>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dbgxwchuy/image/upload/v1767283415/puma_image_rgpi7d.avif)`,
            }}
            className="relative  aspect-3/4  md:aspect-[2.4/1] overflow-hidden bg-cover bg-left md:bg-center bg-clip-border">
            <div className="h-full bg-linear-to-b  from-gray-300/10 to-slate-600/60 to-95% backdrop-opacity-95  text-amber-50 justify-center items-center text-center w-full flex flex-col gap-y-8">
              <h1 className="font-bold tracking-tight text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                YOU CAN DO IT
              </h1>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dbgxwchuy/image/upload/v1767284475/adidas_ug18jv.jpg)`,
            }}
            className=" relative aspect-3/4 md:aspect-[2.4/1] overflow-hidden bg-cover bg-center bg-clip-border">
            <div className="h-full bg-linear-to-b  from-gray-300/10 to-slate-600/60 to-95% backdrop-opacity-95   text-amber-50 justify-center items-center text-center w-full flex flex-col gap-y-8">
              <h1 className="font-bold tracking-tight text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                YOU CAN DO IT
              </h1>
            </div>
          </div>
        </CarouselItem>
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
          className={`rounded-full shadow-md relative w-10 h-[0.3rem] justify-self-end align-center  overflow-hidden bg-slate-200 justify-center transition-opacity duration-2000 ease-in-out`.concat(
            showAutoplayProgress ? "" : "opacity-0"
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
