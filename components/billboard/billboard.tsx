"use client";
import { type Billboard } from "@/types";
import BackgroundVideo from "next-video/background-video";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

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
      orientation="horizontal"
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
          playOnInit: false,
        }),
      ]}>
      <CarouselContent>
        <CarouselItem>
          <div
            style={{ backgroundImage: `url(${data.imageUrl})` }}
            className=" relative aspect-3/4 md:aspect-[2.4/1] overflow-hidden bg-cover bg-left md:bg-center bg-clip-border">
            <div className="absolute bottom-4 right-4 flex  space-x-1">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dbgxwchuy/image/upload/v1767283415/puma_image_rgpi7d.avif)`,
            }}
            className="relative aspect-3/4 md:aspect-[2.4/1] overflow-hidden bg-cover bg-left md:bg-center bg-clip-border">
            <div className="absolute bottom-4 right-4 flex space-x-1">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dbgxwchuy/image/upload/v1767284475/adidas_ug18jv.jpg)`,
            }}
            className=" relative aspect-3/4 md:aspect-[2.4/1] overflow-hidden bg-cover bg-center bg-clip-border">
            <div className="absolute bottom-4 right-4 flex space-x-1">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Billboard;

// https://res.cloudinary.com/dbgxwchuy/video/upload/v1734949392/rg0pxlihoy5oc3jvegw6.mp4
// https://res.cloudinary.com/dbgxwchuy/video/upload/v1767202094/nike_k3n8ww.mp4
