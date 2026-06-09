import { CredentialBar } from "@/components/sections/CredentialBar";
import { CTABand } from "@/components/sections/CTABand";
import { Hero } from "@/components/sections/Hero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioProjects } from "@/lib/portfolio";
import { services, site, team } from "@/lib/site";
import Image from "next/image";

export default function HomePage() {
  const featured = portfolioProjects.filter((p) => p.featured).slice(0, 3);
  const flagship = portfolioProjects.find((p) => p.slug === "kash-passive-house");

  return (
    <>
      <Hero
        image="/images/hero/Tragert-small.jpg"
        eyebrow="Haliburton Highlands · Est. 2017"
        title="High-Performance Homes Built to Last"
        subtitle="Red Seal certified. Passive House trained. Stunning homes with exceptionally low operating costs, crafted with integrity and ingenuity."
      />

      <CredentialBar />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Why Above Board"
            title="Craftsmanship meets building science"
            description="We don't just build homes. We engineer comfort, health, and energy performance into every project."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon="performance"
              title="Performance"
              description="Passive House and Net Zero expertise means your home performs at an extremely low operating cost."
              delay={0}
            />
            <FeatureCard
              icon="craft"
              title="Craft"
              description="From hand-cut timber framing to fine interior finishing, every detail reflects our commitment to quality."
              delay={0.1}
            />
            <FeatureCard
              icon="local"
              title="Local Expertise"
              description="Rooted in the Haliburton Highlands since 2017. We know this land, this climate, and these communities."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {flagship && (
        <section className="bg-forest-dark py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <FadeIn>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper">
                  Featured Project
                </p>
                <h2 className="font-display mt-3 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                  {flagship.name}
                </h2>
                <p className="mt-4 leading-relaxed text-white/70">{flagship.description}</p>
                <Button href={`/portfolio/${flagship.slug}`} variant="primary" className="mt-8">
                  Explore This Project
                </Button>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={flagship.heroImage}
                    alt={flagship.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <FadeIn className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero/Timber-2.jpg"
                  alt="Graham trimming a hand cut, custom timber"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </FadeIn>
              <FadeIn delay={0.1} className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero/Sanders-shell.jpg"
                  alt="A home with exterior walls and truss system in place"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <SectionHeading
                eyebrow="Our Approach"
                title="Well-built homes for exceptional living"
                description="Above Board Carpentry focuses on homes that provide clients with exceptional comfort, health, and energy savings. We build with the best products and systems available."
              />
              <p className="mt-4 leading-relaxed text-muted">
                Established in 2017 by Graham Borgdorff, a local tradesman with over 20 years of experience,
                we bring superior knowledge of building science to every project in the Haliburton Highlands.
              </p>
              <Button href="/about" variant="ghost" className="mt-6">
                Learn About Us
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Portfolio"
              title="Projects we're proud of"
              description="From Passive Houses to cottage renovations and precision garage framing."
            />
            <Button href="/portfolio" variant="ghost">
              View All Projects
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Services" title="What we build" align="center" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-forest/10 bg-cream p-6 transition-colors hover:border-forest/25 hover:bg-white">
                  <h3 className="font-display text-lg font-semibold text-forest">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="secondary">
              All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-forest/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <SectionHeading
                eyebrow="The Team"
                title={`Meet the people behind ${site.name}`}
                description="A skilled, dedicated team led by Graham Borgdorff, committed to building science and fine carpentry."
              />
              <Button href="/about/team" variant="ghost" className="mt-6">
                Meet the Team
              </Button>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {team.map((member, i) => (
                <FadeIn key={member.name} delay={i * 0.08}>
                  <div className="text-center">
                    <div className="relative mx-auto aspect-[3/4] w-full max-w-[140px] overflow-hidden rounded-2xl shadow-md">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="140px"
                      />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-charcoal">{member.name}</p>
                    <p className="text-xs text-muted">{member.role}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FadeIn>
            <div className="overflow-hidden rounded-3xl bg-forest ring-1 ring-forest/20">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper">
                    The ABC Store
                  </p>
                  <h2 className="font-display mt-3 text-3xl font-semibold text-white md:text-4xl">
                    Live-edge hardwood cutting boards
                  </h2>
                  <p className="mt-4 leading-relaxed text-white/70">
                    Cross cuts from logs right here in the Haliburton Highlands. Maple and ash,
                    treated with all-natural cutting board oil. Optional logo branding at no extra cost.
                  </p>
                  <Button href="/store" variant="primary" className="mt-8">
                    Visit the Store
                  </Button>
                </div>
                <div className="relative min-h-[280px] lg:min-h-0">
                  <Image
                    src="/images/portfolio/IMG_8137crop-scaled.jpg"
                    alt="Live edge maple cutting board"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}
