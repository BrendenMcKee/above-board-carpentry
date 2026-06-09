import { ContactForm } from "@/components/sections/ContactForm";
import { Hero } from "@/components/sections/Hero";
import { FadeIn } from "@/components/ui/FadeIn";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.name}. Call ${site.contact.phone} or send us a message about your project.`,
};

export default function ContactPage() {
  return (
    <>
      <Hero
        image="/images/hero/contact-hero.jpg"
        eyebrow="Contact"
        title="Let's start a conversation"
        subtitle="We are excited to talk with you about your project, see your location, or hear what you're interested in from The ABC Store."
        tall={false}
        primaryCta={{ label: `Call ${site.contact.phone}`, href: `tel:${site.contact.phoneTel}` }}
        secondaryCta={{ label: "View Portfolio", href: "/portfolio" }}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">
                  Get in touch
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  We look forward to hearing from you. Fill out the form and we will be in touch
                  within one business day.
                </p>

                <div className="mt-8 space-y-6">
                  <ContactItem
                    label="Phone"
                    value={site.contact.phone}
                    href={`tel:${site.contact.phoneTel}`}
                  />
                  <ContactItem
                    label="Email"
                    value={site.contact.email}
                    href={`mailto:${site.contact.email}`}
                  />
                  <ContactItem label="Address" value={site.address.full} />
                  <ContactItem label="Hours" value={site.contact.hours} />
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-forest/10">
                  <iframe
                    title="Above Board Carpentry location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127952.0545291798!2d-78.65200711757753!3d45.00781794816059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1018d92380e50a3!2sAbove+Board+Carpentry!5e0!3m2!1sen!2sca!4v1518209584874"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.15} className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/8 md:p-8">
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  Send us a message
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Tell us about your project, location, or ABC Store inquiry.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-copper">{label}</p>
      {href ? (
        <a href={href} className="mt-1 block text-charcoal font-medium hover:text-forest transition-colors">
          {value}
        </a>
      ) : (
        <p className="mt-1 text-charcoal font-medium">{value}</p>
      )}
    </div>
  );
}
