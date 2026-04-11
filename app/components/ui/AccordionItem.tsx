"use client";

import Image from "next/image";
import Button from "./Button";
import clsx from "clsx";

type Props = {
  title: string;
  icon: string;
  isOpen: boolean;
  onClick: () => void;
  children?: React.ReactNode;
};

export default function AccordionItem({
  title,
  icon,
  isOpen,
  onClick,
  children,
}: Props) {
  return (
    <div
      className={clsx(
        "rounded-2xl overflow-hidden transition-all duration-300",
        isOpen ? "btn-accordion-active" : "btn-accordion"
      )}
    >
      {/* HEADER */}
      <Button
        onClick={onClick}
        variant="outline"
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-neutral-200 flex items-center justify-center">
            <Image src={icon} alt="icon" width={65} height={44} />
          </div>

          <h4>{title}</h4>
        </div>

        {/* ARROW */}
        <span
          className={clsx(
            "transition-transform duration-300 text-neutral-600",
            isOpen && "rotate-180 text-primary"
          )}
        >
          ▼
        </span>
      </Button>

      {/* CONTENT */}
      <div
        className={clsx(
          "transition-all duration-300 overflow-hidden px-5",
          isOpen ? "max-h-[300px] pb-5" : "max-h-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}