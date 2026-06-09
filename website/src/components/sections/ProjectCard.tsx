"use client";

import { PortfolioProject } from "@/lib/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const typeLabels = {
  residential: "Residential",
  garage: "Garage",
  renovation: "Renovation",
};

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/8"
    >
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-sm font-medium text-white">View Project →</span>
          </div>
          {project.featured && (
            <span className="absolute top-4 left-4 rounded-full bg-copper px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Featured
            </span>
          )}
        </div>
        <div className="p-5 md:p-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-forest/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-forest">
              {typeLabels[project.type]}
            </span>
            {project.year && (
              <span className="text-xs text-muted">{project.year}</span>
            )}
          </div>
          <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-forest transition-colors">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
            {project.summary}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
