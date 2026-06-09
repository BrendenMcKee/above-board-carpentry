import { site, navLinks } from "@/lib/site";
import Link from "next/link";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/copyright", label: "Copyright" },
];

export function Footer() {
  const navMidpoint = Math.ceil(navLinks.length / 2);

  return (
    <footer className="bg-forest-dark text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:items-start lg:gap-x-0 lg:gap-y-8">
          <div className="sm:col-span-2 lg:col-span-5 lg:pr-10">
            <p className="font-display text-2xl font-semibold">{site.name}</p>
            <p className="mt-1 text-sm text-white/60">{site.tagline}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              {site.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-sm transition-colors hover:border-copper hover:text-copper"
              >
                Facebook
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="rounded-full border border-white/20 px-4 py-2 text-sm transition-colors hover:border-copper hover:text-copper"
              >
                Email
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0 sm:border-l sm:pl-8 lg:col-span-3 lg:pl-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-copper">
              Navigate
            </p>
            <div className="flex gap-8">
              <ul className="space-y-1.5">
                {navLinks.slice(0, navMidpoint).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1.5">
                {navLinks.slice(navMidpoint).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0 lg:col-span-4 lg:pl-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-copper">
              Contact
            </p>
            <address className="not-italic space-y-2 text-sm text-white/70">
              <p>{site.address.full}</p>
              <p>
                <a
                  href={`tel:${site.contact.phoneTel}`}
                  className="hover:text-white transition-colors"
                >
                  {site.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {site.contact.email}
                </a>
              </p>
              <p>{site.contact.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 transition-colors hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
