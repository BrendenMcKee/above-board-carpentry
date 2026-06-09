import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/lib/site";
import Image from "next/image";

interface TeamSectionProps {
  showHeading?: boolean;
}

export function TeamSection({ showHeading = true }: TeamSectionProps) {
  return (
    <section id="team" className="scroll-mt-28 bg-forest/5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {showHeading && (
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the people behind every build"
            description="A skilled, dedicated team led by Graham Borgdorff, combining building science expertise with genuine craftsmanship."
            align="center"
          />
        )}
        <div className="space-y-16">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.1}>
              <article
                className={`grid items-start gap-8 md:grid-cols-[240px_1fr] ${
                  member.featured
                    ? "rounded-3xl bg-white p-8 shadow-sm ring-1 ring-forest/8 md:p-10"
                    : ""
                }`}
              >
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">
                      {member.name}
                    </h2>
                    <span className="rounded-full bg-forest/8 px-3 py-1 text-xs font-semibold text-forest">
                      {member.role}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">With the company since {member.since}</p>
                  <p className="mt-4 leading-relaxed text-muted">{member.bio}</p>
                  {"extended" in member && member.extended && (
                    <p className="mt-4 leading-relaxed text-muted">{member.extended}</p>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
