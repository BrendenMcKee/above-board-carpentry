import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cutting Board Care Products",
  description: "Products to maintain and protect your wooden cutting board from Above Board Carpentry.",
};

export default function CareProductsPage() {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/store" className="text-sm text-muted hover:text-forest transition-colors">
          ← Back to ABC Store
        </Link>

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[3/4] max-w-sm overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/portfolio/Oil-1.jpg"
                alt="Clark's Cutting Board Oil"
                fill
                className="object-cover"
                sizes="400px"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper">ABC Store</p>
            <h1 className="font-display mt-3 text-3xl font-semibold text-charcoal md:text-4xl">
              Cutting Board Care Products
            </h1>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                To maintain a healthy wooden cutting board, it should be oiled occasionally to keep
                the board from absorbing moisture and to keep the board from cracking or splintering.
              </p>
              <p>
                We use and recommend{" "}
                <a
                  href="https://www.shopclarks.com/products/clarks-cutting-board-oil-orange"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-forest hover:underline"
                >
                  Clark&apos;s Cutting Board Oil
                </a>{" "}
                , an all-natural product with anti-microbial properties that exceeds FDA food safety
                regulations.
              </p>
              <p>See what products are ideal for your cutting board and inquire to purchase.</p>
            </div>
            <Button href="/contact" variant="primary" className="mt-8">
              Inquire About Products
            </Button>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
