"use client";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {
	const [isMouted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	const router = useRouter();

	const cart = useCart();
	if (!isMouted) return null;
	return (
		<div className="ml-auto flex items-center gap-x-4">
			<Button
				onClick={() => router.push("/cart")}
				className="flex relative items-center rounded-full bg-transparent"
			>
				<ShoppingBag size={25} color="black" />
				<div className="absolute top-2 h-4 flex  justify-center w-4 rounded-full text-center  bg-red-500  text-sm text-white">
					<div>{cart.items.length}</div>
				</div>
			</Button>
		</div>
	);
};

export default NavbarActions;
