import Image from "next/image";

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
      </figure>
    </div>
  );
};

export default Billboard2;
