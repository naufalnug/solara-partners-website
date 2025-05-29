import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SubmitProfilePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary py-16">
          <div className="container">
            <h1 className="heading-xl text-center mb-4">Submit Your Profile</h1>
            <p className="body-lg text-center text-muted-foreground max-w-2xl mx-auto">
              Let us help you find your next opportunity in biotech
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <form className="space-y-4">
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

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email*</label>
                    <Input id="email" type="email" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                    <Input id="phone" type="tel" />
                  </div>

                  <div>
                    <label htmlFor="specialization" className="block text-sm font-medium mb-1">Specialization*</label>
                    <select
                      id="specialization"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    >
                      <option value="">Select your specialization</option>
                      <option value="research">Research & Development</option>
                      <option value="clinical">Clinical Operations</option>
                      <option value="regulatory">Regulatory Affairs</option>
                      <option value="manufacturing">Manufacturing & Process Development</option>
                      <option value="quality">Quality Assurance/Control</option>
                      <option value="computational">Computational Biology/Bioinformatics</option>
                      <option value="executive">Executive Leadership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium mb-1">Resume/CV*</label>
                    <Input id="resume" type="file" accept=".pdf,.doc,.docx" required className="cursor-pointer" />
                  </div>

                  <Button type="submit" className="btn-primary w-full mt-2">Submit Application</Button>
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
