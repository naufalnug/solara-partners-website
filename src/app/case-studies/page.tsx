import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-6">Case Studies</h1>
              <p className="body-lg text-muted-foreground">
                Real results for innovative biotech companies. Discover how we've helped our clients build exceptional teams.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-accent/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Featured Case Study
                    </span>
                  </div>
                  <h2 className="heading-md mb-4">NovaBio Therapeutics: Building a Clinical Team in Record Time</h2>
                  <p className="body-base text-muted-foreground mb-6">
                    How Solara Partners helped a Series B biotech startup assemble a complete clinical operations team in just 6 weeks, enabling them to meet critical trial timelines.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Industry</p>
                      <p className="font-medium">Oncology Therapeutics</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Company Size</p>
                      <p className="font-medium">45 Employees</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Timeframe</p>
                      <p className="font-medium">6 Weeks</p>
                    </div>
                  </div>
                  <Button asChild className="btn-primary w-fit">
                    <Link href="#novabio" className="flex items-center gap-2">
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-secondary aspect-square lg:aspect-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-16 md:pb-24">
          <div className="container">
            <h2 className="heading-md mb-8">More Success Stories</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="aspect-[4/3] bg-secondary" />
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Executive Search
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Life Sciences Non-Profit: Chief Scientific Officer Placement</h3>
                  <p className="text-muted-foreground mb-4">
                    Successfully placing a specialized CSO for a niche life sciences organization after an extensive search process.
                  </p>
                  <Button asChild variant="ghost" className="p-0 h-auto font-semibold group">
                    <Link href="#cso-placement" className="flex items-center gap-1 hover:gap-2 transition-all">
                      View Case Study
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-[4/3] bg-secondary" />
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Contract Staffing
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Helix Innovations: Contract Research Team</h3>
                  <p className="text-muted-foreground mb-4">
                    Providing a specialized contract research team to support a time-sensitive drug discovery project for a startup biotech.
                  </p>
                  <Button asChild variant="ghost" className="p-0 h-auto font-semibold group">
                    <Link href="#helix" className="flex items-center gap-1 hover:gap-2 transition-all">
                      View Case Study
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-[4/3] bg-secondary" />
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Executive Search
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quantum Biologics: Executive Leadership Search</h3>
                  <p className="text-muted-foreground mb-4">
                    Successfully placing C-suite executives for a Series C biotech company preparing for commercial operations.
                  </p>
                  <Button asChild variant="ghost" className="p-0 h-auto font-semibold group">
                    <Link href="#quantum" className="flex items-center gap-1 hover:gap-2 transition-all">
                      View Case Study
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* Detailed Case Study Section */}
        <section className="py-16 md:py-24" id="novabio">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Case Study
                </span>
              </div>
              <h2 className="heading-md mb-6">NovaBio Therapeutics: Building a Clinical Team in Record Time</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Industry</p>
                  <p className="font-medium">Oncology Therapeutics</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Company Size</p>
                  <p className="font-medium">45 Employees</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Timeframe</p>
                  <p className="font-medium">6 Weeks</p>
                </div>
              </div>

              <div className="aspect-video w-full bg-secondary rounded-lg mb-8" />

              <div className="space-y-6 body-base">
                <h3 className="text-xl font-bold">The Challenge</h3>
                <p>
                  NovaBio Therapeutics, a Series B biotech startup focused on novel cancer therapies,
                  had just received promising Phase I data for their lead compound. They needed to
                  rapidly assemble a clinical operations team to prepare for their Phase II trials,
                  which were scheduled to begin in just two months.
                </p>
                <p>
                  The challenge was significant: NovaBio needed to hire a Clinical Operations Director,
                  two Clinical Trial Managers, a Data Manager, and three Clinical Research Associates –
                  all with oncology experience – in a highly competitive talent market.
                </p>

                <h3 className="text-xl font-bold mt-8">Our Approach</h3>
                <p>
                  Solara Partners implemented a multi-faceted recruitment strategy:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Conducted a deep-dive analysis of NovaBio's trial requirements, company culture, and timeline constraints.</li>
                  <li>Leveraged our specialized network of clinical operations professionals with oncology experience.</li>
                  <li>Implemented an accelerated screening process with daily updates to the NovaBio leadership team.</li>
                  <li>Coordinated a streamlined interview process, including panel interviews and technical assessments.</li>
                  <li>Negotiated competitive packages to secure top talent in a tight timeframe.</li>
                </ul>

                <h3 className="text-xl font-bold mt-8">The Results</h3>
                <p>
                  Within six weeks, Solara Partners successfully:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Filled all seven clinical positions with highly qualified professionals, each with 5+ years of oncology trial experience.</li>
                  <li>Ensured the new team could meet the critical Phase II trial timeline.</li>
                  <li>Achieved a 100% retention rate for the placed candidates through the first year.</li>
                  <li>Established an ongoing recruitment partnership to support NovaBio's future growth.</li>
                </ul>

                <div className="bg-secondary p-6 rounded-lg mt-8">
                  <h4 className="text-lg font-bold mb-2">Client Testimonial</h4>
                  <p className="italic">
                    "Solara Partners was instrumental in rapidly assembling our clinical operations team.
                    Their understanding of the biotech landscape and commitment to our vision made them an
                    invaluable partner in our growth. They didn't just fill positions – they found us a
                    cohesive team that hit the ground running."
                  </p>
                  <p className="mt-2 font-medium">- CEO, Oncology Therapeutics Company, Cambridge</p>
                </div>
              </div>

              <div className="mt-12">
                <Button asChild className="btn-primary">
                  <Link href="/contact" className="flex items-center gap-2">
                    Discuss Your Recruitment Needs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CSO Placement Case Study */}
        <section className="py-16 md:py-24 bg-secondary" id="cso-placement">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Case Study
                </span>
              </div>
              <h2 className="heading-md mb-6">Life Sciences Non-Profit: Chief Scientific Officer Placement</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-background p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Industry</p>
                  <p className="font-medium">Life Sciences Non-Profit</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">Boston, MA</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Position</p>
                  <p className="font-medium">Chief Scientific Officer</p>
                </div>
              </div>

              <div className="aspect-video w-full bg-background rounded-lg mb-8" />

              <div className="space-y-6 body-base">
                <h3 className="text-xl font-bold">The Challenge</h3>
                <p>
                  After a long search for a particular candidate, a Boston-based life sciences non-profit organization was starting to give up hope that the right person was out there for their very niche Chief Scientific Officer role. The position required a unique combination of scientific expertise, non-profit experience, and leadership skills that proved difficult to find in the market.
                </p>

                <h3 className="text-xl font-bold mt-8">Our Approach</h3>
                <p>
                  Solara Partners understood the client's needs from the first call and quickly got to work. Our team leveraged deep industry connections and specialized search methodologies to identify candidates who possessed the specific qualifications and cultural fit required for this unique role.
                </p>

                <h3 className="text-xl font-bold mt-8">The Results</h3>
                <p>
                  Within a few weeks, Solara Partners had found the perfect candidate, and the client hired them. The successful placement not only met all technical requirements but also aligned perfectly with the organization's mission and values.
                </p>

                <div className="bg-background p-6 rounded-lg mt-8">
                  <h4 className="text-lg font-bold mb-2">Client Testimonial</h4>
                  <p className="italic">
                    "After a long search for a particular candidate, we were starting to give up hope that the
                    right person was out there for our very niche role, and then along came Solara Partners. They
                    understood our needs from the first call, and quickly got to work. Within a few weeks,
                    they had found us a candidate, and we hired them. We have been so impressed by their
                    approach to understanding our needs, and it has taken away the painful shortlisting
                    part of the process, which is obviously a huge bonus! We have since placed another
                    candidate with them, and are looking forward to continuing our partnership in the
                    coming years."
                  </p>
                  <p className="mt-2 font-medium">- Executive Director, Life Sciences Non-Profit, Boston</p>
                </div>
              </div>

              <div className="mt-12">
                <Button asChild className="btn-primary">
                  <Link href="/contact" className="flex items-center gap-2">
                    Discuss Your Executive Search Needs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
