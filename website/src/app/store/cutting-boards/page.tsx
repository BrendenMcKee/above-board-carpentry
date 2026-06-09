import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Edge Hardwood Cutting Boards",
  description:
    "Hand-cut live edge hardwood cutting boards from maple and ash, sourced from the Haliburton Highlands.",
};

export default function CuttingBoardsPage() {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/store" className="text-sm text-muted hover:text-forest transition-colors">
          ← Back to ABC Store
        </Link>

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/portfolio/IMG_8137crop-scaled.jpg"
                alt="Maple live edge cutting board"
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper">ABC Store</p>
            <h1 className="font-display mt-3 text-3xl font-semibold text-charcoal md:text-4xl">
              Live Edge Hardwood Cutting Boards
            </h1>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Our hand-cut, live edge hardwood cutting boards are made from maple and ash. The
                boards are cross cuts from logs from right here in the Haliburton Highlands.
              </p>
              <p>
                Our cutting boards have been treated with an all-natural cutting board oil to
                preserve and protect them. We chose Clark&apos;s Cutting Board Oil because it has
                anti-microbial properties — the lemon has an excellent disinfectant quality and it
                smells great. This product exceeds FDA regulation on food safety.
              </p>
              <p>
                Our cutting boards have most of their bark, have kept most of their rustic charm,
                and are ideal for your kitchen. You can even have our logo branded into your board
                at no additional cost!
              </p>
            </div>
            <Button href="/contact" variant="primary" className="mt-8">
              Inquire to Purchase
            </Button>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
