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
        <Image
          src={icon}
          alt={label || "icon"}
          width={32}
          height={32}
          className="object-contain"
        />
      ) : (
        <p className="font-medium">{label}</p>
      )}
    </div>
  );
}