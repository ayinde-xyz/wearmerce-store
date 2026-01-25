"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Bebas_Neue } from "next/font/google";
import { useSidebar } from "./ui/sidebar";

interface MainNavProps {
  data: Category[];
  className?: React.ComponentPropsWithoutRef<"nav">["className"];
}

const Bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const MainNav: React.FC<MainNavProps> = ({ data, className }) => {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className={cn("flex ", className)}>
      {routes.map((route) => (
        <Link
          onClick={() => setOpenMobile(false)}
          key={route.href}
          href={route.href}
          className={cn(
            `text-2xl  ${Bebas.className} `,
            route.active && "underline underline-offset-4",
          )}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
