import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// This would typically come from a CMS or database - for demo purposes only
export const blogPosts = [
  {
    id: "crispr-talent-crisis-2025",
    title: "CRISPR Talent Crisis: Why Gene Editing Companies Are Struggling to Find Qualified Scientists in 2025",
    excerpt: "The gene editing revolution is here, but there's a critical problem: companies can't find enough qualified scientists to drive it forward. Discover the talent shortage threatening one of biotech's most promising fields.",
    author: "Dr. Jennifer Chen",
    authorRole: "Gene Therapy Recruitment Specialist",
    date: "January 20, 2025",
    category: "Industry Analysis",
    readTime: "14 min read",
    imageSlug: "crispr-talent-crisis"
  },
  {
    id: "hidden-biotech-talent-hubs-2025",
    title: "Beyond Boston and San Diego: Hidden Biotech Talent Hubs Recruiters Should Know in 2025",
    excerpt: "The traditional biotech recruitment playbook is becoming obsolete. Discover emerging markets with strong life sciences capabilities, competitive costs, and untapped talent pools that smart recruiters are leveraging.",
    author: "Michael Rodriguez",
    authorRole: "Senior Recruitment Partner",
    date: "January 15, 2025",
    category: "Recruitment Strategy",
    readTime: "12 min read",
    imageSlug: "hidden-biotech-talent-hubs"
  },
  {
    id: "cell-gene-therapy-manufacturing-jobs",
    title: "Cell and Gene Therapy Manufacturing Jobs: The $82 Billion Opportunity for Biotech Professionals",
    excerpt: "The cell and gene therapy industry is experiencing unprecedented growth, with market projections showing an increase from $15.54 billion in 2022 to an estimated $82.24 billion by 2032. Discover the manufacturing opportunities driving this explosive expansion.",
    author: "Sarah Johnson",
    authorRole: "Founder & CEO",
    date: "January 10, 2025",
    category: "Career Opportunities",
    readTime: "15 min read",
    imageSlug: "cell-gene-therapy-manufacturing"
  }
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-6">Biotech Recruitment Insights</h1>
              <p className="body-lg text-muted-foreground">
                Expert perspectives on talent acquisition, industry trends, and building successful biotech teams.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-accent/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Featured Article
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="heading-md mb-4">{blogPosts[0].title}</h2>
                  <p className="body-base text-muted-foreground mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-secondary" />
                    <div>
                      <p className="font-medium">{blogPosts[0].author}</p>
                      <p className="text-sm text-muted-foreground">{blogPosts[0].date} · {blogPosts[0].readTime}</p>
                    </div>
                  </div>
                  <Button asChild className="btn-primary w-fit">
                    <Link href={`/blog/${blogPosts[0].id}`} className="flex items-center gap-2">
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-600/20 lg:aspect-auto flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl mx-auto flex items-center justify-center shadow-xl">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex justify-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-purple-400/60 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-400/60 rounded-full"></div>
                      <div className="w-3 h-3 bg-purple-400/60 rounded-full"></div>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      CRISPR Talent Crisis
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-16 md:pb-24">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="heading-md">Latest Articles</h2>
              <div className="flex gap-4 mt-4 md:mt-0">
                <select
                  className="bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue="all"
                >
                  <option value="all">All Categories</option>
                  <option value="trends">Industry Trends</option>
                  <option value="management">Team Management</option>
                  <option value="startup">Startup Growth</option>
                  <option value="diversity">Diversity & Inclusion</option>
                  <option value="insights">Talent Insights</option>
                  <option value="tips">Hiring Tips</option>
                </select>
                <select
                  className="bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue="newest"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => {
                // Custom thumbnail designs for blog grid
                let thumbnailContent;
                if (post.id === "hidden-biotech-talent-hubs-2025") {
                  thumbnailContent = (
                    <div className="aspect-[16/9] bg-gradient-to-br from-green-500/20 to-teal-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="relative mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl mx-auto flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-teal-400 rounded-full animate-ping [animation-delay:0.5s]"></div>
                        </div>
                        <div className="flex justify-center space-x-1">
                          <div className="w-1 h-4 bg-green-400/40 rounded"></div>
                          <div className="w-1 h-3 bg-teal-400/40 rounded"></div>
                          <div className="w-1 h-5 bg-green-400/40 rounded"></div>
                        </div>
                      </div>
                    </div>
                  );
                } else if (post.id === "cell-gene-therapy-manufacturing-jobs") {
                  thumbnailContent = (
                    <div className="aspect-[16/9] bg-gradient-to-br from-orange-500/20 to-amber-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="flex justify-center items-center space-x-2 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div className="flex flex-col space-y-1">
                            <div className="w-6 h-1 bg-orange-400/60 rounded"></div>
                            <div className="w-4 h-1 bg-amber-400/60 rounded"></div>
                            <div className="w-8 h-1 bg-orange-400/60 rounded"></div>
                          </div>
                        </div>
                        <div className="text-xs font-medium text-orange-600">$82B Growth</div>
                      </div>
                    </div>
                  );
                } else {
                  // Default thumbnail for other posts
                  thumbnailContent = (
                    <div className="aspect-[16/9] bg-gradient-to-br from-cool-blue/20 to-accent/20 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-cool-blue to-accent rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                  );
                }

                return (
                  <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    {thumbnailContent}
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-cool-blue">{post.category}</span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <Link href={`/blog/${post.id}`} className="group">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-cool-blue transition-colors">{post.title}</h3>
                      </Link>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cool-blue to-accent flex items-center justify-center">
                            <span className="text-xs font-bold text-white">{post.author.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{post.author}</p>
                            <p className="text-xs text-muted-foreground">{post.date}</p>
                          </div>
                        </div>
                        <Button asChild variant="ghost" className="p-0 h-auto font-semibold group">
                          <Link href={`/blog/${post.id}`} className="flex items-center gap-1 hover:gap-2 transition-all">
                            Read
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>


          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
