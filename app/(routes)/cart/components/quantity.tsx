"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import React, { MouseEventHandler } from "react";
import IconButton from "@/components/ui/icon-button";

type Props = {
  onAddToCart?: MouseEventHandler<HTMLButtonElement> | undefined;
  onRemove: MouseEventHandler;
  quantity: number;
};

const Quantity = ({ onAddToCart, onRemove, quantity }: Props) => {
  return (
    <div className="flex items-center space-x-2">
      <IconButton
        className="text-gray-600"
        icon={<PlusIcon size={20} />}
        onClick={onAddToCart}></IconButton>
      <div>{quantity}</div>
      <IconButton
        disabled={quantity === 1}
        onClick={onRemove}
        className="text-gray-600"
        icon={<MinusIcon size={20} />}></IconButton>
    </div>
  );
};

export default Quantity;
