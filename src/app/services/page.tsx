import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Beaker, Users, Search, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-6">Our Services</h1>
              <p className="body-lg text-muted-foreground">
                Tailored recruitment solutions for the biotech industry. We specialize in connecting innovative companies with exceptional talent.
              </p>
            </div>
          </div>
        </section>

        {/* Service 1: Permanent Placements */}
        <section className="py-16 md:py-20" id="permanent-placements">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h2 className="heading-md mb-4">Permanent Placements</h2>
                <p className="body-base text-muted-foreground mb-6">
                  Building your core team with people who don't just fit on paper, but belong in your mission. Our approach to permanent hiring is tailored, hands-on, and focused on long-term impact.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <p>Every candidate is rigorously screened for skills, experience, and alignment with your goals</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <p>We prioritize cultural fit and team chemistry, not just credentials</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <p>We verify biotech-specific expertise so you can move forward with confidence</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <p>Ongoing support and placement guarantees to ensure lasting success</p>
                  </div>
                </div>

                <Button asChild className="btn-primary">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-accent/10 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Roles We Place</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-background p-3 rounded border border-border">Quality Assurance</div>
                  <div className="bg-background p-3 rounded border border-border">Regulatory Affairs</div>
                  <div className="bg-background p-3 rounded border border-border">Clinical Operations</div>
                  <div className="bg-background p-3 rounded border border-border">Manufacturing/Technical Ops</div>
                  <div className="bg-background p-3 rounded border border-border">Clinical Development</div>
                  <div className="bg-background p-3 rounded border border-border">Research & Development</div>
                  <div className="bg-background p-3 rounded border border-border">AI / Software</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Contract Staffing */}
        <section className="py-16 md:py-20 bg-secondary" id="contract-staffing">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-accent/10 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Why Contract Staffing Works</h3>
                  <div className="space-y-4">
                    <div className="bg-background p-4 rounded border border-border">
                      <h4 className="font-bold mb-1">Agility without compromise</h4>
                      <p className="text-sm text-muted-foreground">Scale your team up or down based on real-time needs.</p>
                    </div>
                    <div className="bg-background p-4 rounded border border-border">
                      <h4 className="font-bold mb-1">Biotech-ready expertise</h4>
                      <p className="text-sm text-muted-foreground">Tap into niche skill sets for specific phases of R&D, clinical, or regulatory work.</p>
                    </div>
                    <div className="bg-background p-4 rounded border border-border">
                      <h4 className="font-bold mb-1">Time saved</h4>
                      <p className="text-sm text-muted-foreground">Our candidates are project-ready and pre-qualified.</p>
                    </div>
                    <div className="bg-background p-4 rounded border border-border">
                      <h4 className="font-bold mb-1">Smart budgeting</h4>
                      <p className="text-sm text-muted-foreground">Pay for expertise only when you need it.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <Beaker className="h-8 w-8 text-accent" />
                </div>
                <h2 className="heading-md mb-4">Contract Staffing</h2>
                <p className="body-base text-muted-foreground mb-6">
                  Flexible, fast, and focused. When your biotech projects demand specialized skills or short-term support, we connect you with contractors who are ready to contribute from day one - no lengthy onboarding, no commitment overload.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <p>Rapid access to pre-vetted biotech professionals</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <p>Flexible terms - from 3-month milestones to multi-year projects</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <p>Option to convert contractors into permanent hires</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <p>Ongoing support to keep projects and people on track</p>
                  </div>
                </div>

                <Button asChild className="btn-primary">
                  <Link href="/contact" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Executive Search */}
        <section className="py-16 md:py-20" id="executive-search">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <Search className="h-8 w-8 text-accent" />
                </div>
                <h2 className="heading-md mb-4">Executive Search</h2>
                <p className="body-base text-muted-foreground mb-6">
                  Leadership that fits your future. We help biotech companies find leaders who don't just fill roles, they shape direction, culture, and outcomes. Our executive search process is discreet, data-informed, and deeply personal.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <p>Tailored outreach to proven leaders and high-potential candidates</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <p>Holistic assessment across leadership style, mission alignment, and sector experience</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <p>Thorough reference and background checks - no shortcuts</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <p>Executive onboarding guidance to set your new hire up for success</p>
                  </div>
                </div>

                <p className="body-base text-muted-foreground mb-8">
                  Whether you're building your founding team or entering a critical new phase, we'll help you find the person to lead it.
                </p>

                <Button asChild className="btn-primary">
                  <Link href="/contact" className="flex items-center gap-2">
                    Schedule a Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-accent/10 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Leadership Positions</h3>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded border border-border">
                    <h4 className="font-bold mb-1">C-Suite Executives</h4>
                    <p className="text-sm text-muted-foreground">CEO, CSO, CTO, CMO, COO, CFO positions for biotech companies at all growth stages.</p>
                  </div>
                  <div className="bg-background p-4 rounded border border-border">
                    <h4 className="font-bold mb-1">VP & Director Level</h4>
                    <p className="text-sm text-muted-foreground">Senior leadership for specific departments including R&D, Clinical, Regulatory, and Operations.</p>
                  </div>
                  <div className="bg-background p-4 rounded border border-border">
                    <h4 className="font-bold mb-1">Scientific Advisory</h4>
                    <p className="text-sm text-muted-foreground">Industry experts and KOLs to strengthen your scientific board and strategic direction.</p>
                  </div>
                  <div className="bg-background p-4 rounded border border-border">
                    <h4 className="font-bold mb-1">Board Members</h4>
                    <p className="text-sm text-muted-foreground">Experienced board directors with biotech and pharmaceutical industry expertise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent/10 py-16 md:py-20">
          <div className="container text-center">
            <h2 className="heading-md mb-6">Ready to Build Your Dream Team?</h2>
            <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our specialized recruitment solutions can help your biotech company attract and retain the talent you need to drive innovation.
            </p>
            <Button asChild size="lg" className="btn-primary">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
