import {
  Facebook,
  GithubIcon,
  Instagram,
  LinkedinIcon,
  TwitterIcon,
  XIcon,
} from "lucide-react";
import { Amatic_SC } from "next/font/google";

const Amantic = Amatic_SC({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const Socials = () => {
  return (
    <div className="pt-6 flex space-y-3 flex-col ">
      <p className={`text-2xl font-bold ${Amantic.className}`}>WEARMERCE</p>
      <p>
        Discover quality products and enjoy seamless shopping experience with
        Wearmerce.
      </p>
      <div className="flex space-x-3">
        <div className="border-2 border-black p-2 rounded-full">
          <TwitterIcon />
        </div>
        <div className="border-2 border-black p-2 rounded-full">
          <Facebook />
        </div>
        <div className="border-2 border-black p-2 rounded-full">
          <Instagram />
        </div>
        <div className="border-2 border-black p-2 rounded-full">
          <GithubIcon />
        </div>
        <div className="border-2 border-black p-2 rounded-full">
          <LinkedinIcon />
        </div>
      </div>
    </div>
  );
};

export default Socials;
