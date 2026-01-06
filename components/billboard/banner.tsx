import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="w-full   text-center py-4">
      <h2 className="text-2xl uppercase font-bold">Special Offer!</h2>
      <p className="mt-2">Get 20% off on your first purchase.</p>
      <Button className="rounded-none mt-2">Shop Now</Button>
    </div>
  );
};

export default Banner;
