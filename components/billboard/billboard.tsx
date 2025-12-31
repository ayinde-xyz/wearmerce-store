import { type Billboard } from "@/types";
import BackgroundVideo from "next-video/background-video";
import testVideo from "@/videos/test.mp4";

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

    <BackgroundVideo
      src={testVideo}
      className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
      <div className="h-full justify-center items-center text-center w-full flex flex-col gap-y-8">
        <div className="font-bold  text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
          {data?.label}{" "}
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default Billboard;
