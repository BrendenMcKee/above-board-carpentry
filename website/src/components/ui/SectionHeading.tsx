import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const maxW = align === "center" ? "max-w-2xl" : "max-w-xl";

  return (
    <FadeIn className={`mb-12 md:mb-16 ${alignClass} ${maxW}`}>
      {eyebrow && (
        <p
          className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-copper"
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl text-balance ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base font-medium leading-relaxed md:text-lg ${
            light ? "text-white/85" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
