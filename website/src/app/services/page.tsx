import { CTABand } from "@/components/sections/CTABand";
import { Hero } from "@/components/sections/Hero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "High-performance homes, renovations, garages, timber framing, and full project management in the Haliburton Highlands.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        image="/images/hero/Sanders-shell.jpg"
        eyebrow="Services"
        title="From foundation to finish"
        subtitle="Experts in all aspects of a project, from groundwork and foundation through to interior finishing and project management."
        tall={false}
        primaryCta={{ label: "Get a Quote", href: "/contact" }}
        secondaryCta={{ label: "See Our Work", href: "/portfolio" }}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Comprehensive building expertise"
            description="ABC primarily builds for residential construction. We continually educate ourselves on current building science to deliver the best possible product."
            align="center"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-forest/8 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                    <Icon name={service.icon} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest/5 py-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">
              Full project management
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              We have an abundance of experience in project management and would be happy to work
              with you through all the stages of a project, from initial planning to the final
              finishing touches.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}
