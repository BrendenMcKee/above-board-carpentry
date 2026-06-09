"use client";

import { site, navLinks } from "@/lib/site";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 shadow-sm backdrop-blur-xl border-b border-forest/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label={site.name}>
          <div className="shrink-0 rounded-lg bg-white px-3 py-2 shadow-md ring-1 ring-black/5 transition-transform group-hover:scale-105 md:px-4 md:py-2.5">
            <Image
              src="/images/logo.png"
              alt=""
              width={329}
              height={250}
              className="h-9 w-auto object-contain md:h-10"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p
              className={`font-display text-sm font-semibold leading-tight transition-colors md:text-base ${
                scrolled ? "text-forest" : "text-white drop-shadow-md"
              }`}
            >
              {site.name}
            </p>
            <p
              className={`text-[10px] uppercase tracking-[0.15em] ${
                scrolled ? "text-muted" : "text-white/70"
              }`}
            >
              {site.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-charcoal hover:bg-forest/5 hover:text-forest"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-copper/30 transition-all hover:-translate-y-0.5 hover:bg-[#a3662e]"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden ${
            scrolled || menuOpen ? "text-forest" : "text-white"
          }`}
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-all ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-all ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-0 top-full border-b border-forest/10 bg-cream/98 px-5 py-6 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-charcoal hover:bg-forest/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-copper px-4 py-3 text-center font-semibold text-white"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
