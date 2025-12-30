import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";
import { Button } from "@/components/ui/button";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
  disabled,
}) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}>
      {icon}
    </Button>
  );
};

export default IconButton;
