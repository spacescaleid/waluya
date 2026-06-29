import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: "sm" | "md" | "lg";
}

export function SectionWrapper({ children, className, id, size = "md" }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        {
          "py-16 md:py-20": size === "sm",
          "py-24 md:py-32": size === "md",
          "py-32 md:py-40": size === "lg",
        },
        className
      )}
    >
      {children}
    </section>
  );
}
