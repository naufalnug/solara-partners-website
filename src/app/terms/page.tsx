import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Button asChild variant="ghost" className="mb-4">
                  <Link href="/" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
              <h1 className="heading-xl mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground">
                Effective Date: June 2, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="lead">
                  By accessing or using solarapartners.io ("Website") or engaging our recruitment services, you agree to these Terms of Service ("Terms").
                </p>

                <h2>Use of the Website</h2>
                <p>You may use the Website for lawful purposes only and agree not to:</p>
                <ul>
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on any intellectual property or proprietary rights</li>
                  <li>Disrupt or compromise the security of the Website</li>
                </ul>

                <h2>Recruitment Services</h2>
                <p>
                  Our recruitment services aim to match candidates with potential employers. While we strive to ensure accuracy, we cannot guarantee job placement or employment outcomes.
                </p>

                <h2>Candidate Information</h2>
                <p>
                  By submitting your CV or personal data to Solara Partners, you consent to us sharing this information with potential employers or clients for the purpose of recruitment. We will never sell your data.
                </p>

                <h2>Intellectual Property</h2>
                <p>
                  All content on the Website, including text, graphics, logos, and software, is owned or licensed by Solara Partners and protected by applicable intellectual property laws.
                </p>

                <h2>Third-Party Links</h2>
                <p>
                  Our Website may contain links to third-party websites. We are not responsible for their content or privacy practices.
                </p>

                <h2>Disclaimer of Warranties</h2>
                <p>
                  The Website and recruitment services are provided "as is" and "as available." We do not guarantee that the Website will always be error-free or uninterrupted.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                  Solara Partners will not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the Website or recruitment services.
                </p>

                <h2>Indemnification</h2>
                <p>
                  You agree to indemnify and hold Solara Partners harmless from any claims, losses, or damages arising from your use of the Website or violation of these Terms.
                </p>

                <h2>Changes to These Terms</h2>
                <p>
                  We may update these Terms from time to time. Your continued use of the Website or recruitment services after changes have been posted indicates acceptance of the new Terms.
                </p>

                <h2>Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the United Kingdom, without regard to conflict of laws.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have questions about these Terms, please email us at <a href="mailto:info@solarapartners.io">info@solarapartners.io</a>.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="btn-primary">
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/">
                      Back to Home
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
