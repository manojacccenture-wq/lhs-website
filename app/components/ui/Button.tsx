import clsx from "clsx";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "btn",
        `btn-${variant}`,
        `btn-${size}`,
        "inline-flex items-center gap-2", // 👈 important for spacing
        disabled && "btn-disabled",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}

      <span>{children}</span>

      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
}