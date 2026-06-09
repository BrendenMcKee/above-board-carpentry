import { portfolioProjects } from "@/lib/portfolio";
import Link from "next/link";

const typeLabels = {
  residential: "Residential",
  garage: "Garage",
  renovation: "Renovation",
};

interface ProjectNavProps {
  currentSlug: string;
}

export function ProjectNav({ currentSlug }: ProjectNavProps) {
  return (
    <nav
      aria-label="Portfolio project navigation"
      className="border-b border-forest/8 bg-white/80 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-8 md:py-6">
        <Link
          href="/portfolio"
          className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-copper"
        >
          ← All Projects
        </Link>

        <div className="mt-4 overflow-x-auto overflow-y-visible py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-2 px-0.5">
            {portfolioProjects.map((item) => {
              const isActive = item.slug === currentSlug;
              return (
                <Link
                  key={item.slug}
                  href={`/portfolio/${item.slug}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-forest text-white shadow-md"
                      : "bg-cream text-muted ring-1 ring-forest/10 hover:bg-white hover:text-forest hover:ring-forest/25"
                  }`}
                >
                  <span className="block">{item.name}</span>
                  <span
                    className={`mt-0.5 block text-[10px] font-bold uppercase tracking-wider ${
                      isActive ? "text-white/70" : "text-muted/80"
                    }`}
                  >
                    {typeLabels[item.type]}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
