import { site, navLinks } from "@/lib/site";
import Link from "next/link";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/copyright", label: "Copyright" },
];

export function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:items-start lg:gap-x-12 lg:gap-y-8">
          <div className="sm:col-span-2 lg:col-span-5">
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

          <div className="lg:col-span-3">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-copper">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((link) => (
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

          <div className="lg:col-span-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-copper">
              Contact
            </p>
            <address className="not-italic grid gap-x-8 gap-y-2 text-sm text-white/70 sm:grid-cols-2">
              <p className="sm:col-span-2">{site.address.full}</p>
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
              <p className="sm:col-span-2">{site.contact.hours}</p>
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
