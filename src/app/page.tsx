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
    id: "crispr-talent-crisis-2025",
    title: "CRISPR Talent Crisis: Why Gene Editing Companies Are Struggling to Find Qualified Scientists in 2025",
    excerpt: "The gene editing revolution is here, but there's a critical problem: companies can't find enough qualified scientists to drive it forward. Discover the talent shortage threatening one of biotech's most promising fields.",
    author: "Dr. Jennifer Chen",
    date: "January 20, 2025",
    category: "Industry Analysis",
    readTime: "14 min read"
  },
  {
    id: "hidden-biotech-talent-hubs-2025",
    title: "Beyond Boston and San Diego: Hidden Biotech Talent Hubs Recruiters Should Know in 2025",
    excerpt: "The traditional biotech recruitment playbook is becoming obsolete. Discover emerging markets with strong life sciences capabilities, competitive costs, and untapped talent pools that smart recruiters are leveraging.",
    author: "Michael Rodriguez",
    date: "January 15, 2025",
    category: "Recruitment Strategy",
    readTime: "12 min read"
  },
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
                <p className="text-muted-foreground text-sm mb-2">Cambridge, MA</p>
                <p className="mb-6 leading-relaxed">Leading manufacturing operations and scale-up for novel cell and gene therapy products.</p>
                <Button asChild className="w-full transform hover:scale-105 transition-all duration-300">
                  <Link href="/jobs/director-of-manufacturing">View Details</Link>
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group animate-fade-in [animation-delay:400ms]">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">Clinical Operations Manager</h3>
                <p className="text-muted-foreground text-sm mb-2">San Francisco, CA</p>
                <p className="mb-6 leading-relaxed">Overseeing Phase I/II clinical trials for our lead compound targeting autoimmune disorders.</p>
                <Button asChild className="w-full transform hover:scale-105 transition-all duration-300">
                  <Link href="/jobs/clinical-operations-manager">View Details</Link>
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group animate-fade-in [animation-delay:600ms]">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">AI Data Engineer</h3>
                <p className="text-muted-foreground text-sm mb-2">Remote</p>
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
              {featuredPosts.map((post, index) => {
                // Custom thumbnail designs based on article content
                let thumbnailContent;
                if (post.id === "crispr-talent-crisis-2025") {
                  thumbnailContent = (
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="relative mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex justify-center space-x-1">
                          <div className="w-2 h-2 bg-purple-400/60 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400/60 rounded-full"></div>
                          <div className="w-2 h-2 bg-purple-400/60 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  );
                } else if (post.id === "hidden-biotech-talent-hubs-2025") {
                  thumbnailContent = (
                    <div className="aspect-video bg-gradient-to-br from-green-500/20 to-teal-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="relative mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-teal-400 rounded-full animate-ping [animation-delay:0.5s]"></div>
                        </div>
                        <div className="flex justify-center space-x-2">
                          <div className="w-1 h-6 bg-green-400/40 rounded"></div>
                          <div className="w-1 h-4 bg-teal-400/40 rounded"></div>
                          <div className="w-1 h-8 bg-green-400/40 rounded"></div>
                          <div className="w-1 h-5 bg-teal-400/40 rounded"></div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  // Cell & Gene Therapy Manufacturing
                  thumbnailContent = (
                    <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-amber-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="flex justify-center items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div className="flex flex-col space-y-1">
                            <div className="w-8 h-1 bg-orange-400/60 rounded"></div>
                            <div className="w-6 h-1 bg-amber-400/60 rounded"></div>
                            <div className="w-10 h-1 bg-orange-400/60 rounded"></div>
                          </div>
                        </div>
                        <div className="text-xs font-medium text-orange-600">$82B Market</div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={post.id}
                    className="group animate-fade-in"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    {/* Glass morphism blog card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                      {thumbnailContent}
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
                );
              })}
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
