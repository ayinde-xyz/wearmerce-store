import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { AlertTriangle } from "lucide-react";
import { Product } from "@/types";

interface CartStore {
	items: Product[];
	addItem: (data: Product) => void;
	removeItem: (data: Product) => void;
	removeAll: (id: string) => void;
	emptyCart: () => void;
}

const useCart = create(
	persist<CartStore>(
		(set, get) => ({
			items: [],
			addItem: (data: Product) => {
				const currentItems = get().items;
				const existingItemIndex = currentItems.findIndex(
					(item) => item.id === data.id,
				);
				if (existingItemIndex !== -1) {
					const newQuantity = currentItems[existingItemIndex].quantity + 1;
					const updatedItems = [...currentItems];
					updatedItems[existingItemIndex] = { ...data, quantity: newQuantity };
					set({ items: updatedItems });
					return toast.success("Extra item added to cart.");
				}
				set({ items: [...get().items, { ...data, quantity: 1 }] });
				toast.success("Item added to cart.");
			},
			removeItem: (data: Product) => {
				const currentItems = get().items;
				const existingItemIndex = currentItems.findIndex(
					(item) => item.id === data.id,
				);
				if (existingItemIndex !== -1) {
					if (currentItems[existingItemIndex].quantity > 1) {
						currentItems[existingItemIndex].quantity -= 1;
						set({ items: [...currentItems] });
						toast.success("Item quantity reduced.");
					}
				} else {
					set({
						items: [...get().items.filter((item) => item.id !== data.id)],
					});
					console.log(get().items);
					toast.success("Item removed from cart.");
				}
			},
			removeAll: (id: string) => {
				set({ items: [...get().items.filter((item) => item.id !== id)] });
				toast.success("Item removed from cart.");
			},
			emptyCart: () => set({ items: [] }),
		}),
		{
			name: "cart-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
);

export default useCart;
