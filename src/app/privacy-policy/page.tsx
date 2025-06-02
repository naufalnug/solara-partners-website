import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Effective Date: June 2, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="lead">
                  Solara Partners ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share information when you visit our website, solarapartners.io ("Website"), or engage with our recruitment services.
                </p>

                <h2>Information We Collect</h2>
                <p>We may collect:</p>
                <ul>
                  <li><strong>Personal Information:</strong> such as your name, email address, phone number, job title, company name, and any information you voluntarily provide through contact forms or by communicating with us.</li>
                  <li><strong>Candidate Information:</strong> if you submit a CV or apply for a job via our Website or through our recruitment services, we may collect employment history, skills, education, references, and other relevant information.</li>
                  <li><strong>Usage Data:</strong> such as your IP address, browser type, operating system, pages viewed, and date/time stamps.</li>
                  <li><strong>Cookies:</strong> small data files stored on your device to improve your browsing experience.</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                  <li>Provide our recruitment and consulting services</li>
                  <li>Match candidates with potential job opportunities</li>
                  <li>Communicate with you about job opportunities, services, or updates</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Analyze and improve the performance of our Website and services</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>

                <h2>How We Share Your Information</h2>
                <ul>
                  <li>We may share candidate information with potential employers or clients strictly for recruitment purposes, ensuring it aligns with your career goals.</li>
                  <li>We do not sell or rent your personal information.</li>
                  <li>We may share information with trusted service providers who assist us in operating our Website or delivering recruitment services (e.g., IT support, CRM systems).</li>
                  <li>We may share information when required by law or to protect our rights.</li>
                </ul>

                <h2>GDPR Compliance (For EU Residents)</h2>
                <p>If you are located in the European Economic Area (EEA), you have the right to:</p>
                <ul>
                  <li>Access your personal data</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Request data portability</li>
                </ul>
                <p>
                  To exercise these rights, please email us at <a href="mailto:info@solarapartners.io">info@solarapartners.io</a>.
                </p>
                <p>
                  We process your data based on your consent (e.g., submitting a CV), to fulfill contractual obligations (e.g., providing recruitment services), or for our legitimate business interests (e.g., improving our services).
                </p>

                <h2>How We Protect Your Information</h2>
                <p>
                  We implement reasonable security measures to protect your information from unauthorized access or disclosure. However, no system is completely secure.
                </p>

                <h2>Data Retention</h2>
                <p>
                  We retain your data only as long as necessary to provide our services, comply with legal requirements, or fulfill legitimate business needs.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy occasionally. The latest version will be posted on our Website.
                </p>

                <h2>Contact Us</h2>
                <p>
                  For questions or to exercise your rights, please email us at <a href="mailto:info@solarapartners.io">info@solarapartners.io</a>.
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
