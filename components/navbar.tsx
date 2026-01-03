"use client";
import Link from "next/link";

import MainNav from "@/components/main-nav";

import NavbarActions from "./navbar-actions";

import { Amatic_SC } from "next/font/google";
import { Category } from "@/types";
import { useEffect, useRef, useState } from "react";

interface NavbarProps {
  categories: Category[];
}

export const revalidate = 0;

const Amantic = Amatic_SC({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const Navbar = ({ categories }: NavbarProps) => {
  const [isVisible, setIsVisible] = useState(true);

  // let lastScrollY = 0;
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <nav
      className={` border-b sticky z-20 w-full  top-0  bg-white/30 backdrop-blur-sm backdrop-grayscale  transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="relative px-4 sm:px-6 lg:px-8 flex justify-between  h-12 items-center">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className={`text-2xl font-bold ${Amantic.className}`}>WEARMERCE</p>
        </Link>
        <MainNav data={categories} className={"hidden md:flex  space-x-4"} />
        <NavbarActions />
      </div>
    </nav>
  );
};

export default Navbar;
