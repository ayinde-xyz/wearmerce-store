import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";

import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

import { Amatic_SC } from "next/font/google";

export const revalidate = 0;

const Amantic = Amatic_SC({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const Navbar = async () => {
  const categories = await getCategories();
  // console.log(categories);

  return (
    <div className="border-b">
      <div className="relative px-4 sm:px-6 lg:px-8 flex justify-between  h-16 items-center">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className={`text-2xl font-bold ${Amantic.className}`}>WEARMERCE</p>
        </Link>
        <MainNav data={categories} className={"hidden md:flex  space-x-4"} />
        <NavbarActions />
      </div>
    </div>
  );
};

export default Navbar;
