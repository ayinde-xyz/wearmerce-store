import Image from "next/image";
import { Button } from "../ui/button";

const Billboard2 = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <figure className="relative w-full aspect-square">
        <Image
          width={600}
          height={600}
          src={
            "https://res.cloudinary.com/dbgxwchuy/image/upload/v1734520474/sjvphyc61pidaoeke1cy.avif"
          }
          alt="Nike image"
          placeholder="blur"
           blurDataURL="..."
        />
        <figcaption className="absolute bottom-4 left-4 bg-white/70 px-3 py-1 rounded-md text-sm">
          Nike Air Max 270 React
          <Button className="ml-4 rounded-none">Shop Now</Button>
        </figcaption>
      </figure>
      <figure className="relative w-full aspect-square">
        <Image
          width={1230}
          height={1196}
          src={
            "https://res.cloudinary.com/dbgxwchuy/image/upload/v1767719134/men-s-shoes-clothing-accessories_rjgcjf.avif"
          }
          alt=""
          placeholder="blur"
           blurDataURL="..."
        />
          <Button className="ml-4 rounded-none">Shop Now</Button>
      </figure>
    </div>
  );
};

export default Billboard2;
