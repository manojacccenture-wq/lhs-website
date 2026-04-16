import clsx from "clsx";
import Image from "next/image";

type ImageCardProps = {
  label?: string;
  icon?: string;
  variant?: "short" | "medium" | "long" | "tech";
  className?: string;
};

export default function ImageCard({
  label,
  icon,
  variant = "medium",
  className,
}: ImageCardProps) {
  return (
    <div
      className={clsx(
        "card",
        "card-image",
        `card-${variant}`,
        className
      )}
    >
      {icon ? (
        <div className="relative w-full h-full">
          <Image
            src={icon}
            alt={label || "icon"}
            fill
            sizes="120px"
           className="object-none scale-100"
          />
        </div>
      ) : (
        <p className="font-medium">{label}</p>
      )}
    </div>
  );
}