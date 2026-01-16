import Image from "next/image";
import { Button } from "../ui/button";

const Billboard2 = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <figure className="relative w-full aspect-square">
        <Image
          fill
          src={
            "https://res.cloudinary.com/dbgxwchuy/image/upload/v1734520474/sjvphyc61pidaoeke1cy.avif"
          }
          alt="Nike image"
          placeholder="blur"
          blurDataURL="..."
        />
        <figcaption className="absolute bottom-4 left-4  flex flex-col py-3 items-start px-3 space-y-2 rounded-md text-sm">
          <p className="text-white">Manchester City Official Jersey</p>

          <Button className="rounded-none">Shop Now</Button>
        </figcaption>
      </figure>
      <figure className="relative w-full aspect-square">
        <Image
          fill
          src={
            "https://res.cloudinary.com/dbgxwchuy/image/upload/v1767719134/men-s-shoes-clothing-accessories_rjgcjf.avif"
          }
          alt=""
          placeholder="blur"
          blurDataURL="..."
        />
        <figcaption className="absolute bottom-4 left-4  flex flex-col py-3 items-start px-3 space-y-2 rounded-md text-sm">
          <p className="text-white">Nike Air Max 400</p>

          <Button className="rounded-none">Shop Now</Button>
        </figcaption>
      </figure>
    </div>
  );
};

export default Billboard2;
