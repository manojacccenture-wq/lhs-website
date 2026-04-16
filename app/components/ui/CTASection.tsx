import Button from "./Button";
import clsx from "clsx";

type CTASectionProps = {
  title: string;
  buttonText: string;
  onClick?: () => void;
  className?: string;
};

export default function CTASection({
  title,
  buttonText,
  onClick,
  className,
}: CTASectionProps) {
  return (
    <section className={clsx("w-full px-4", className)}>
      
      <div
        className="
          max-w-6xl mx-auto
          rounded-3xl
          px-6 py-10 md:px-12 md:py-14
          flex flex-col md:flex-row
          items-start md:items-center
          justify-between gap-6
          bg-gradient-to-r
          from-[rgb(var(--color-primary-rgb)/0.95)]
          to-[#0E6F5C]
          text-white
          shadow-lg
        "
      >
        {/* TEXT */}
        <h2 className="max-w-2xl text-white leading-tight">
          {title}
        </h2>

        {/* BUTTON */}
        <Button
          variant="secondary"
          onClick={onClick}
          className="
            !rounded-full 
            !px-8 !py-4
            !bg-white 
            !text-[var(--color-primary-1)]
            hover:opacity-90
            mx-auto
          "
        >
          {buttonText}
        </Button>
      </div>

    </section>
  );
}