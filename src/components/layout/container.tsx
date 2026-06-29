import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Container({ children, className, size = "lg" }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10 lg:px-20",
        {
          "max-w-3xl": size === "sm",
          "max-w-5xl": size === "md",
          "max-w-container": size === "lg",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
