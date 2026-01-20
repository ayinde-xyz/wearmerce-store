"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarTrigger } from "./ui/sidebar";

const NavbarActions = () => {
  const router = useRouter();

  const cart = useCart();

  return (
    <div className=" flex items-center">
      <Button
        onClick={() => router.push("/cart")}
        size={"icon-lg"}
        variant={"ghost"}
        className="flex relative items-center rounded-full bg-transparent">
        <ShoppingBag className="md:size-8 size-6" color="black" />
        <div className="absolute left-0 top-0 h-4 flex  justify-center w-4 rounded-full text-center  bg-red-500  text-sm text-white">
          <div>{cart.items.length}</div>
        </div>
      </Button>
      <SidebarTrigger className="md:hidden block" />
    </div>
  );
};

export default NavbarActions;
