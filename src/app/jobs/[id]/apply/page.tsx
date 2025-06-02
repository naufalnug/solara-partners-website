import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Required for static export
export function generateStaticParams() {
  return [
    { id: "director-of-manufacturing" },
    { id: "clinical-operations-manager" },
    { id: "ai-data-engineer" }
  ];
}

const jobTitles = {
  "director-of-manufacturing": "Director of Manufacturing",
  "clinical-operations-manager": "Clinical Operations Manager",
  "ai-data-engineer": "AI Data Engineer"
};

export default function JobApplicationPage({ params }: { params: { id: string } }) {
  const jobTitle = jobTitles[params.id as keyof typeof jobTitles] || "Job Position";

  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary py-10">
          <div className="container">
            <Link
              href={`/jobs/${params.id}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-cool-blue mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to job details
            </Link>

            <h1 className="heading-xl mb-2">Apply for {jobTitle}</h1>
            <p className="text-muted-foreground max-w-2xl">
              Complete the form below to apply for this position. We'll review your application and get back to you shortly.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-3xl">
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name*</label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name*</label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email*</label>
                      <Input id="email" type="email" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone*</label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-1">Current Location*</label>
                    <Input id="location" required />
                  </div>

                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium mb-1">LinkedIn Profile URL</label>
                    <Input id="linkedin" type="url" placeholder="https://www.linkedin.com/in/yourprofile" />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium mb-1">Resume/CV*</label>
                    <Input id="resume" type="file" accept=".pdf,.doc,.docx" required className="cursor-pointer" />
                    <p className="text-xs text-muted-foreground mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>

                  <div>
                    <label htmlFor="coverletter" className="block text-sm font-medium mb-1">Cover Letter</label>
                    <Input id="coverletter" type="file" accept=".pdf,.doc,.docx" className="cursor-pointer" />
                    <p className="text-xs text-muted-foreground mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Additional Information</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Share any additional information that might be relevant to your application"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2">
                    <Input id="terms" type="checkbox" className="mt-1 h-4 w-4" required />
                    <label htmlFor="terms" className="text-sm">
                      I agree to the processing of my personal data in accordance with Solara Partners' privacy policy
                    </label>
                  </div>

                  <Button type="submit" className="btn-primary w-full">Submit Application</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
