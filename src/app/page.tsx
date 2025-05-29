import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Featured blog posts for the home page
const featuredPosts = [
  {
    id: "cell-gene-therapy-manufacturing-jobs",
    title: "Cell and Gene Therapy Manufacturing Jobs: The $82 Billion Opportunity for Biotech Professionals",
    excerpt: "The cell and gene therapy industry is experiencing unprecedented growth, with market projections showing an increase from $15.54 billion in 2022 to an estimated $82.24 billion by 2032. Discover the manufacturing opportunities driving this explosive expansion.",
    author: "Sarah Johnson",
    date: "January 10, 2025",
    category: "Career Opportunities",
    readTime: "15 min read"
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <ServicesSection />

        {/* Enhanced Candidates Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Enhanced background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-secondary/15 to-cool-blue/5 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-accent/10 -z-10" />

          {/* Floating background elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cool-blue/15 to-accent/10 rounded-2xl rotate-45 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-tr from-primary/15 to-cool-blue/15 rounded-3xl -rotate-12" />

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="heading-md mb-6">Looking for Your Next Biotech Role?</h2>
              <p className="body-lg text-muted-foreground">
                Solara Partners specializes in connecting exceptional talent with innovative biotech companies. Let our industry experts help you find a role that perfectly aligns with your skills and career goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Glass morphism job cards */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group animate-fade-in [animation-delay:200ms]">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">Director of Manufacturing</h3>
                <p className="text-muted-foreground text-sm mb-2">BioGenesis Therapeutics • Cambridge, MA</p>
                <p className="mb-6 leading-relaxed">Leading manufacturing operations and scale-up for novel cell and gene therapy products.</p>
                <Button asChild className="w-full transform hover:scale-105 transition-all duration-300">
                  <Link href="/jobs/director-of-manufacturing">View Details</Link>
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group animate-fade-in [animation-delay:400ms]">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">Clinical Operations Manager</h3>
                <p className="text-muted-foreground text-sm mb-2">Quantum Biologics • San Francisco, CA</p>
                <p className="mb-6 leading-relaxed">Overseeing Phase I/II clinical trials for our lead compound targeting autoimmune disorders.</p>
                <Button asChild className="w-full transform hover:scale-105 transition-all duration-300">
                  <Link href="/jobs/clinical-operations-manager">View Details</Link>
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group animate-fade-in [animation-delay:600ms]">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">AI Data Engineer</h3>
                <p className="text-muted-foreground text-sm mb-2">GeneSync Pharma • Remote</p>
                <p className="mb-6 leading-relaxed">Building AI/ML pipelines to accelerate drug discovery and optimize clinical trial data analysis.</p>
                <Button asChild className="w-full transform hover:scale-105 transition-all duration-300">
                  <Link href="/jobs/ai-data-engineer">View Details</Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link href="/jobs" className="flex items-center gap-2">
                  Browse All Opportunities
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/jobs/submit-profile">Submit Your Profile</Link>
              </Button>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* Enhanced Blog Section Teaser */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Enhanced background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/5 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-tl from-cool-blue/5 via-transparent to-primary/5 -z-10" />

          {/* Floating background elements */}
          <div className="absolute top-16 right-16 w-28 h-28 bg-gradient-to-br from-accent/10 to-cool-blue/5 rounded-3xl rotate-12 animate-pulse" />
          <div className="absolute bottom-16 left-16 w-20 h-20 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl -rotate-12" />

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="heading-md mb-6">Latest Insights</h2>
              <p className="body-lg text-muted-foreground">
                Stay up-to-date with our latest thinking on biotech recruitment, talent acquisition, and industry trends.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="group animate-fade-in"
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  {/* Glass morphism blog card */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-cool-blue/20 bg-cover bg-center"
                         style={{backgroundImage: 'url("https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80")'}} />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-cool-blue font-medium">{post.category}</span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <Link href={`/blog/${post.id}`} className="group/link">
                        <h3 className="text-xl font-bold mb-2 group-hover/link:text-accent transition-colors">{post.title}</h3>
                      </Link>
                      <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-sm">
                          <span className="text-muted-foreground">{post.date}</span>
                        </div>
                        <Button asChild variant="ghost" className="p-0 h-auto font-semibold group/btn text-accent hover:text-accent/80">
                          <Link href={`/blog/${post.id}`} className="flex items-center gap-1 hover:gap-2 transition-all">
                            Read Article
                            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10 animate-fade-in [animation-delay:800ms]">
              <Button asChild className="btn-secondary transform hover:scale-105 transition-all duration-300">
                <Link href="/blog" className="flex items-center gap-2">
                  View All Articles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
