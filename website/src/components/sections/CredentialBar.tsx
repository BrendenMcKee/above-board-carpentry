import { certifications } from "@/lib/site";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export function CredentialBar() {
  return (
    <section className="border-y border-forest/8 bg-white py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
            Certified & Accredited
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4 md:gap-12">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.08}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-transform hover:scale-105"
                title={cert.name}
              >
                <div className="relative h-16 w-28 md:h-20 md:w-32">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain opacity-80 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <span className="text-center text-[10px] font-medium text-muted md:text-xs">
                  {cert.name}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
