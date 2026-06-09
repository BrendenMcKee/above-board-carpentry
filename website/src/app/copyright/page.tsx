import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Copyright Notice" };

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright Notice">
      <p>
        © {new Date().getFullYear()} Above Board Carpentry. All rights reserved.
      </p>
      <p>
        All content, photographs, logos, and materials on this website are the intellectual property
        of Above Board Carpentry and may not be copied, reproduced, or distributed without prior
        written permission.
      </p>
    </LegalPage>
  );
}
