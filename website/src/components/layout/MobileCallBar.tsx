import { site } from "@/lib/site";
import Link from "next/link";

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 flex gap-2 border-t border-forest/10 bg-cream/95 p-3 backdrop-blur-xl md:hidden">
      <a
        href={`tel:${site.contact.phoneTel}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-forest py-3.5 text-sm font-semibold text-white shadow-lg"
      >
        <PhoneIcon />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-copper py-3.5 text-sm font-semibold text-white shadow-lg"
      >
        Get a Quote
      </Link>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
