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
            <address className="not-italic space-y-3 text-sm text-white/70">
              <p className="flex items-start gap-2.5">
                <FooterIcon name="location" />
                <span>{site.address.full}</span>
              </p>
              <p>
                <a
                  href={`tel:${site.contact.phoneTel}`}
                  className="group flex items-start gap-2.5 transition-colors hover:text-white"
                >
                  <FooterIcon name="phone" className="group-hover:text-white" />
                  <span>{site.contact.phone}</span>
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="group flex items-start gap-2.5 transition-colors hover:text-white"
                >
                  <FooterIcon name="email" className="group-hover:text-white" />
                  <span>{site.contact.email}</span>
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <FooterIcon name="hours" />
                <span>{site.contact.hours}</span>
              </p>
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

type FooterIconName = "location" | "phone" | "email" | "hours";

const footerIconPaths: Record<FooterIconName, React.ReactNode> = {
  location: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </>
  ),
  phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  ),
  email: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  hours: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
};

function FooterIcon({
  name,
  className = "",
}: {
  name: FooterIconName;
  className?: string;
}) {
  return (
    <svg
      className={`mt-0.5 h-4 w-4 shrink-0 text-white/70 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      {footerIconPaths[name]}
    </svg>
  );
}
