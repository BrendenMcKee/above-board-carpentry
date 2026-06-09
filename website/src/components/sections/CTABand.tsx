import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 md:py-28">
      <div className="grain-overlay absolute inset-0" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-copper/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-sage/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 text-center md:px-8">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper">
            Ready to build?
          </p>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-semibold text-white text-balance md:text-4xl lg:text-5xl">
            Let&apos;s talk about your next project
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            {site.contact.responseTime} Call us directly or send an inquiry. We&apos;d love to hear about your vision.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Start Your Project
            </Button>
            <a
              href={`tel:${site.contact.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              {site.contact.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
