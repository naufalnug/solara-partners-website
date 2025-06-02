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

        {/* Featured Case Studies */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sales Development Director Case Study */}
              <div className="bg-accent/10 rounded-lg overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="mb-4">
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Featured Case Study
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-4">Sales Development Director Placement for Biotech Analytics Startup</h2>
                  <p className="text-muted-foreground mb-6">
                    How Solara Partners helped a U.S.-based biotech startup find their Sales Development Director for Cell & Gene Therapy in just 3.5 weeks.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Industry</p>
                      <p className="font-medium text-sm">Bioprocess Analytics</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Timeframe</p>
                      <p className="font-medium text-sm">3.5 Weeks</p>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-accent mb-2">✓</div>
                    <div className="text-sm text-muted-foreground">Success Story</div>
                  </div>
                  <Button asChild className="btn-primary w-full">
                    <Link href="#novabio" className="flex items-center justify-center gap-2">
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* CSO Placement Case Study */}
              <div className="bg-cool-blue/10 rounded-lg overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="mb-4">
                    <span className="bg-cool-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured Case Study
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-4">Chief Scientific Officer Placement for Life Sciences Non-Profit</h2>
                  <p className="text-muted-foreground mb-6">
                    How we found the perfect CSO candidate for a Boston-based life sciences non-profit after their long search had stalled.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Industry</p>
                      <p className="font-medium text-sm">Life Sciences Non-Profit</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-sm">Boston, MA</p>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-cool-blue mb-2">CSO</div>
                    <div className="text-sm text-muted-foreground">Executive Placement</div>
                  </div>
                  <Button asChild className="btn-primary w-full">
                    <Link href="#cso-placement" className="flex items-center justify-center gap-2">
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
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
              <h2 className="heading-md mb-6">Sales Development Director Placement for Biotech Analytics Startup</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Client</p>
                  <p className="font-medium">Confidential Biotech Startup</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Role</p>
                  <p className="font-medium">Sales Development Director</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Timeframe</p>
                  <p className="font-medium">3.5 Weeks</p>
                </div>
              </div>

              <div className="aspect-[2/1] md:aspect-[3/1] w-full bg-gradient-to-br from-accent/5 to-cool-blue/10 rounded-lg mb-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-8 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-amber-400 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="w-1 h-8 bg-accent/30 rounded"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cool-blue to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="w-1 h-8 bg-cool-blue/30 rounded"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Search → Match → Success
                  </div>
                </div>
              </div>

              <div className="space-y-6 body-base">
                <div className="mb-6">
                  <p className="text-muted-foreground mb-4">
                    <strong>Client:</strong> Confidential – U.S.-based biotech startup specializing in real-time bioprocess analytics for cell and gene therapy
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>Role:</strong> Sales Development Director – Bioproduction, Cell & Gene Therapy Vertical
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Location:</strong> Massachusetts, USA
                  </p>
                </div>

                <h3 className="text-xl font-bold">Challenge</h3>
                <p>
                  The client, an innovative startup developing advanced analytical tools for biomanufacturing, faced a critical hiring challenge. They needed a Sales Development Director with a unique blend of experience in bioproduction and a deep understanding of the cell and gene therapy (CGT) sector. Despite a four-month search, they struggled to find candidates who met their specific requirements.
                </p>

                <h3 className="text-xl font-bold mt-8">Our Approach</h3>
                <p>
                  Leveraging our extensive network and deep industry knowledge, we embarked on a targeted search to identify professionals with the precise skill set and experience. Within two weeks, we presented a curated shortlist of highly qualified candidates.
                </p>

                <h3 className="text-xl font-bold mt-8">Result</h3>
                <p>
                  The position was successfully filled within 3.5 weeks from the commencement of our engagement, significantly reducing the client's time-to-hire and ensuring they secured top talent to drive their commercial strategy.
                </p>

                <div className="bg-secondary p-6 rounded-lg mt-8">
                  <h4 className="text-lg font-bold mb-2">Client Testimonial</h4>
                  <p className="italic">
                    "As a life sciences tools and tech startup, finding the right people with the right skills and passion is vital for our success and survival. Solara Partners did what others, including ourselves, couldn't: they filled our talent gap efficiently and effectively. Their professional, customer-first approach and long-term partnership mindset truly set them apart."
                  </p>
                  <p className="mt-2 font-medium">- CEO</p>
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

              <div className="aspect-[2/1] md:aspect-[3/1] w-full bg-gradient-to-br from-cool-blue/5 to-accent/10 rounded-lg mb-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-6 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cool-blue to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="w-1 h-6 bg-cool-blue/30 rounded"></div>
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="w-1 h-6 bg-purple-400/30 rounded"></div>
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="w-16 h-2 bg-cool-blue/30 rounded mx-auto"></div>
                    <div className="w-12 h-2 bg-purple-400/30 rounded mx-auto"></div>
                    <div className="w-18 h-2 bg-green-400/30 rounded mx-auto"></div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Search → Match → Hire
                  </div>
                </div>
              </div>

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
