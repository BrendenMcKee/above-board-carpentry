import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer">
      <p>
        The information on this website is provided on an &quot;as is&quot; basis. Above Board
        Carpentry makes no warranties, expressed or implied, regarding the accuracy or completeness
        of any information on this site.
      </p>
      <p>
        Project images and descriptions are representative of past work. Each build is unique and
        results may vary based on site conditions, materials, and client requirements.
      </p>
    </LegalPage>
  );
}
