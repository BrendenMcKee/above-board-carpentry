import { getAdjacentProjects, portfolioProjects } from "@/lib/portfolio";
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
  const adjacent = getAdjacentProjects(currentSlug);

  return (
    <nav
      aria-label="Portfolio project navigation"
      className="border-b border-forest/8 bg-white/80 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-8 md:py-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/portfolio"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-copper"
          >
            ← All Projects
          </Link>

          {adjacent && (
            <div className="flex items-center gap-3 text-sm font-semibold">
              <Link
                href={`/portfolio/${adjacent.prev.slug}`}
                className="text-muted transition-colors hover:text-forest"
                aria-label={`Previous project: ${adjacent.prev.name}`}
              >
                <span className="md:hidden">← Previous</span>
                <span className="hidden md:inline">← {adjacent.prev.name}</span>
              </Link>
              <span className="text-forest/20" aria-hidden="true">
                |
              </span>
              <Link
                href={`/portfolio/${adjacent.next.slug}`}
                className="text-muted transition-colors hover:text-forest"
                aria-label={`Next project: ${adjacent.next.name}`}
              >
                <span className="md:hidden">Next →</span>
                <span className="hidden md:inline">{adjacent.next.name} →</span>
              </Link>
            </div>
          )}
        </div>

        <div className="mt-4 -mx-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-2">
            {portfolioProjects.map((item) => {
              const isActive = item.slug === currentSlug;
              return (
                <Link
                  key={item.slug}
                  href={`/portfolio/${item.slug}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
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
