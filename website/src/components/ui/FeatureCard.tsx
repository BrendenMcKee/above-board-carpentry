import { FadeIn } from "./FadeIn";
import { Icon } from "./Icon";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: "performance" | "craft" | "local";
  delay?: number;
}

export function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-forest/8 transition-all hover:-translate-y-1 hover:shadow-md">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-forest/20 via-copper/60 to-forest/20 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
          <Icon name={icon} />
        </div>
        <h3 className="font-display text-xl font-semibold text-charcoal">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </FadeIn>
  );
}
