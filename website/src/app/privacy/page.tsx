import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        Above Board Carpentry respects your privacy. Information collected through our website
        contact form (name, email, phone, and message) is used solely to respond to your inquiry
        and will not be shared with third parties without your consent.
      </p>
      <p>
        We use standard web technologies to operate this site. If you have questions about how your
        data is handled, contact us at info@aboveboardcarpentry.com.
      </p>
    </LegalPage>
  );
}
