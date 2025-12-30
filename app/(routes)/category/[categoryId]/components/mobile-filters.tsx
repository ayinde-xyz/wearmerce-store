"use client";

import { Button } from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Dialog } from "@headlessui/react";
import { Color, Size } from "@/types";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="lg:hidden flex items-center gap-x-2">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={isOpen}
        as="div"
        className={"relative z-40 lg:hidden"}
        onClose={onClose}>
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        {/* Dialog Position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className={
              "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white shadow-xl py-4 pb-6"
            }>
            <div className="flex items-center justify-end px-4">
              <IconButton onClick={onClose} icon={<X size={15} />}></IconButton>
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
