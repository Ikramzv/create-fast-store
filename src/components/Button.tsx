import { ButtonHTMLAttributes } from "react";
import cn from "../lib/cn";

function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "text-sm inline-flex items-center justify-center",
        "duration-200 rounded-lg active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
