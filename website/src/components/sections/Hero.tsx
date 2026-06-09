"use client";

import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface HeroProps {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tall?: boolean;
}

export function Hero({
  image,
  eyebrow,
  title,
  subtitle,
  primaryCta = { label: "Start Your Project", href: "/contact" },
  secondaryCta = { label: "View Our Work", href: "/portfolio" },
  tall = true,
}: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className={`relative flex items-end overflow-hidden ${
        tall ? "min-h-[92vh] md:min-h-screen" : "min-h-[50vh] md:min-h-[60vh]"
      }`}
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40"
      >
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-copper"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display max-w-4xl text-4xl font-semibold leading-[1.1] text-white text-balance drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="outline">
            {secondaryCta.label}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 hidden items-center gap-6 text-sm text-white/60 md:flex"
        >
          <span>{site.address.region}</span>
          <span className="h-1 w-1 rounded-full bg-copper" />
          <span>Est. {site.founded}</span>
          <span className="h-1 w-1 rounded-full bg-copper" />
          <a href={`tel:${site.contact.phoneTel}`} className="hover:text-white transition-colors">
            {site.contact.phone}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
