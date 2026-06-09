import { CTABand } from "@/components/sections/CTABand";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The ABC Store",
  description:
    "Live-edge hardwood cutting boards from the Haliburton Highlands. Maple and ash, hand-crafted by Above Board Carpentry.",
};

const products = [
  {
    title: "Live Edge Hardwood Cutting Boards",
    href: "/store/cutting-boards",
    description:
      "Hand-cut live edge boards made from maple and ash. Each board is a cross cut from logs right here in the Haliburton Highlands.",
    image: "/images/portfolio/IMG_8137crop-scaled.jpg",
  },
  {
    title: "Cutting Board Care Products",
    href: "/store/care-products",
    description:
      "All-natural cutting board oil with anti-microbial properties to preserve and protect your board.",
    image: "/images/portfolio/Oil-1.jpg",
  },
];

export default function StorePage() {
  return (
    <>
      <Hero
        image="/images/portfolio/IMG_8137crop-scaled.jpg"
        eyebrow="The ABC Store"
        title="Crafted from Haliburton wood"
        subtitle="Our latest division alongside Above Board Carpentry. Live-edge hardwood cutting boards that bring out our creative side."
        tall={false}
        primaryCta={{ label: "Inquire to Purchase", href: "/contact" }}
        secondaryCta={{ label: "Our Builds", href: "/portfolio" }}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Handcrafted"
            title="Wood with rustic charm"
            description="We are still building high-performance, energy-efficient homes, but there is something about wood that brings out our creative side. Our cutting boards keep most of their bark, their rustic charm, and are ideal for your kitchen."
            align="center"
          />

          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, i) => (
              <FadeIn key={product.href} delay={i * 0.1}>
                <Link
                  href={product.href}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/8 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="50vw"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-forest transition-colors">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {product.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-copper">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 text-center">
            <div className="rounded-2xl border border-dashed border-forest/20 bg-forest/5 p-8">
              <h3 className="font-display text-lg font-semibold text-charcoal">Coming Soon</h3>
              <p className="mt-2 text-sm text-muted">
                We are working on additional items for our collection. Check back soon for what&apos;s new in The ABC Store.
              </p>
            </div>
            <Button href="/contact" variant="primary" className="mt-8">
              Inquire About Products
            </Button>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}
