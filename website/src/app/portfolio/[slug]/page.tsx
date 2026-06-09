import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getProject, portfolioProjects } from "@/lib/portfolio";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: project.summary,
    openGraph: { images: [project.heroImage] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden md:min-h-[60vh]">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-32 md:px-8 md:pb-16">
          <Link
            href="/portfolio"
            className="hero-supporting-text mb-4 inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:text-[#e8a55c]"
          >
            ← Back to Portfolio
          </Link>
          <p className="hero-eyebrow mb-3 text-[11px] font-bold uppercase tracking-[0.08em] sm:text-xs sm:tracking-[0.12em] md:text-sm md:tracking-[0.18em]">
            {project.type === "renovation"
              ? "Renovation"
              : project.type === "garage"
                ? "Garage"
                : "Residential"}
          </p>
          <h1 className="hero-title font-display max-w-4xl text-4xl font-semibold leading-[1.1] text-balance sm:text-5xl md:text-6xl">
            {project.name}
          </h1>
          <p className="hero-supporting-text mt-4 max-w-2xl text-lg font-semibold leading-relaxed md:text-xl">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn>
            <p className="text-lg leading-relaxed text-muted">{project.description}</p>
            {project.slug === "kash-passive-house" && (
              <p className="mt-4">
                <a
                  href="https://www.passivehousecanada.com/about-passive-house/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-forest hover:underline"
                >
                  Learn more about Passive House →
                </a>
              </p>
            )}
          </FadeIn>
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <h2 className="font-display mb-8 text-2xl font-semibold text-charcoal md:text-3xl">
              Project Gallery
            </h2>
          </FadeIn>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {project.gallery.map((src, i) => (
              <FadeIn key={src} delay={i * 0.04} className="mb-4 break-inside-avoid">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`${project.name} photo ${i + 1}`}
                    width={800}
                    height={600}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-forest/8 py-12">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <p className="text-muted">Interested in a similar project?</p>
          <Button href="/contact" variant="primary" className="mt-4">
            Start Your Project
          </Button>
        </div>
      </section>

      <CTABand />
    </>
  );
}
