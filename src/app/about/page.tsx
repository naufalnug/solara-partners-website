import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Code, LineChart, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-6">About Solara Partners</h1>
              <p className="body-lg text-muted-foreground">
                We partner with biotech teams to hire individuals who move science forward, not just to fill roles.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h2 className="heading-md mb-6">Our Mission</h2>
                <p className="body-base mb-4">
                  Solara Partners exists to make hiring less of a hurdle for biotech and biopharma founders.
                </p>
                <p className="body-base mb-4">
                  We know that every great therapy, platform, or breakthrough depends on people, so we focus on helping you find the ones who make the difference.
                </p>
                <p className="body-base">
                  Our approach is built on deep industry expertise and genuine partnerships with founders who are pushing the boundaries of what's possible. We understand that in biotech, it's not just about filling roles – it's about finding the minds and hands that will turn ambitious visions into life-changing realities.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-6">Our Vision</h2>
                <p className="body-base mb-4">
                  We imagine a world where biotech and biopharmaceutical companies can scale ideas into impact, so we built Solara to support the scientists, founders, and operators behind the breakthroughs, by helping them build teams that move the world forward.
                </p>
                <p className="body-base">
                  By making it easier for innovative teams to access the right people at the right time, we hope to play a small part in advancing therapies, technologies, and solutions that make life better.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md mb-4">Our Values</h2>
              <p className="body-lg text-muted-foreground">
                These core principles guide everything we do at Solara Partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-6 rounded-lg">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Precision</h3>
                <p className="text-muted-foreground">
                  We don't flood inboxes with CVs. We take the time to understand what matters, from technical fit to team dynamics, so every hire feels right, not rushed.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Just like the biotech companies we support, we believe in better ways of doing things. Whether it's new tools, outreach strategies, or smarter workflows, we stay curious and keep evolving.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work in partnership, not in silos. That means clear communication, honest feedback, and shared goals with both clients and candidates.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Impact</h3>
                <p className="text-muted-foreground">
                  For us, a placement isn't just a filled role, it's progress made. We're proud to support the people behind breakthrough therapies, diagnostics, and technologies that change lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md mb-4">Meet Our Team</h2>
              <p className="body-lg text-muted-foreground">
                Our team of specialized recruiters combines deep industry knowledge with recruitment expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="aspect-[4/3] bg-secondary" />
                <div className="p-6">
                  <h3 className="font-bold text-lg">Sarah Johnson</h3>
                  <p className="text-cool-blue mb-2">Founder & CEO</p>
                  <p className="text-muted-foreground text-sm">
                    With 15+ years in biotech recruitment, Sarah founded Solara Partners to revolutionize how biotech companies build their teams.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="aspect-[4/3] bg-secondary" />
                <div className="p-6">
                  <h3 className="font-bold text-lg">Michael Chen</h3>
                  <p className="text-cool-blue mb-2">Head of Executive Search</p>
                  <p className="text-muted-foreground text-sm">
                    Former biotech executive with deep industry connections and expertise in C-suite and senior leadership placements.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="aspect-[4/3] bg-secondary" />
                <div className="p-6">
                  <h3 className="font-bold text-lg">Emily Rodriguez</h3>
                  <p className="text-cool-blue mb-2">Technical Recruitment Specialist</p>
                  <p className="text-muted-foreground text-sm">
                    With a background in biomedical engineering, Emily excels at identifying technical talent for specialized roles.
                  </p>
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
