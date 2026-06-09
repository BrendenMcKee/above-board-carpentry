import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        By using this website, you agree to these terms. Content on this site is provided for
        general information about Above Board Carpentry&apos;s services. We make reasonable efforts
        to ensure accuracy but do not guarantee that all information is complete or current.
      </p>
      <p>
        All content, images, and materials on this website are the property of Above Board
        Carpentry unless otherwise stated. Unauthorized reproduction is prohibited.
      </p>
    </LegalPage>
  );
}
