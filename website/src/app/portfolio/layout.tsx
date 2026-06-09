import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Above Board Carpentry projects, including Passive Houses, cottage renovations, and garage builds in the Haliburton Highlands.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
