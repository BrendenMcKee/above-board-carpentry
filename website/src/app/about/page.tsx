import { CTABand } from "@/components/sections/CTABand";
import { Hero } from "@/components/sections/Hero";
import { TeamSection } from "@/components/sections/TeamSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, memberships, site } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name}. Red Seal certified, Passive House trained builders in the Haliburton Highlands.`,
};

export default function AboutPage() {
  return (
    <>
      <Hero
        image="/images/hero/Timber-2.jpg"
        eyebrow="About Us"
        title="Building science. Fine craftsmanship."
        subtitle="Located in the Haliburton Highlands, we bring over 20 years of expertise to every high-performance home we build."
        tall={false}
        primaryCta={{ label: "Meet the Team", href: "#team" }}
        secondaryCta={{ label: "View Portfolio", href: "/portfolio" }}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn>
            <div className="prose prose-lg max-w-none text-muted">
              <p className="text-lg leading-relaxed">
                Above Board Carpentry is located in the Haliburton Highlands. Graham Borgdorff,
                owner, has over 20 years of building experience.
              </p>
              <p className="mt-6 leading-relaxed">
                We are a certified Passive House Tradesperson, a NetZero Trained Builder, a Red Seal
                Licensed General Carpenter with RenoMark accreditation, and we are committed to
                building high-performance homes with the best products and systems available.
              </p>
              <p className="mt-6 leading-relaxed">
                This certification has given Above Board Carpentry superior knowledge of building
                science, providing you with a home that is not only stunning, but performs at an
                extremely low operation cost.
              </p>
              <p className="mt-6 leading-relaxed">
                Graham and his team also have experience in traditional hand-cut custom timber
                framing. An example of this can be seen at the entrance to the new tourism Welcome
                Centre in Haliburton.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Credentials"
            title="Certified & trained"
            align="center"
          />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {certifications.map((cert, i) => (
              <FadeIn key={cert.name} delay={i * 0.08}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 rounded-2xl p-6 transition-colors hover:bg-cream"
                >
                  <div className="relative h-20 w-28">
                    <Image src={cert.image} alt={cert.name} fill className="object-contain" />
                  </div>
                  <span className="text-center text-xs font-medium text-muted">{cert.name}</span>
                </a>
              </FadeIn>
            ))}
          </div>

          <div className="mt-16">
            <p className="mb-8 text-center text-sm font-semibold text-muted">
              Proud members of
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {memberships.map((m) => (
                <a
                  key={m.name}
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-12 w-40 opacity-70 transition-opacity hover:opacity-100"
                >
                  <Image src={m.image} alt={m.name} fill className="object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <CTABand />
    </>
  );
}
