"use client";

import { ProjectCard } from "@/components/sections/ProjectCard";
import { Hero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { portfolioProjects, ProjectType } from "@/lib/portfolio";
import { useState } from "react";

const filters: { label: string; value?: ProjectType }[] = [
  { label: "All" },
  { label: "Residential", value: "residential" },
  { label: "Renovations", value: "renovation" },
  { label: "Garages", value: "garage" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<ProjectType | undefined>(undefined);

  const filtered = active
    ? portfolioProjects.filter((p) => p.type === active)
    : portfolioProjects;

  return (
    <>
      <Hero
        image="/images/hero/Sanders-shell.jpg"
        eyebrow="Portfolio"
        title="Projects we're proud of"
        subtitle="Well-built homes that provide exceptional comfort, health, and energy savings, from Passive Houses to cottage renovations and precision framing."
        tall={false}
        primaryCta={{ label: "Start Your Project", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services" }}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.label}
                type="button"
                onClick={() => setActive(f.value)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === f.value
                    ? "bg-forest text-white shadow-md"
                    : "bg-white text-muted ring-1 ring-forest/10 hover:ring-forest/25"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
