import Link from "next/link";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Link href="/" className="text-sm text-muted hover:text-forest transition-colors">
          ← Home
        </Link>
        <h1 className="font-display mt-6 text-3xl font-semibold text-charcoal md:text-4xl">
          {title}
        </h1>
        <div className="prose prose-lg mt-8 max-w-none space-y-4 text-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
