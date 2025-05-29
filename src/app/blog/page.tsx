import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// This would typically come from a CMS or database - for demo purposes only
export const blogPosts = [
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
  },
  {
    id: "trends-in-biotech-recruitment",
    title: "5 Key Trends Shaping Biotech Recruitment in 2025",
    excerpt: "From AI-driven candidate screening to the rise of specialized hybrid roles, discover the top recruitment trends impacting biotech hiring this year.",
    author: "Sarah Johnson",
    authorRole: "Founder & CEO",
    date: "April 8, 2025",
    category: "Industry Trends",
    readTime: "5 min read",
    imageSlug: "trends-biotech-recruitment"
  },
  {
    id: "remote-teams-biotech",
    title: "Building Effective Remote Research Teams in Biotech",
    excerpt: "Remote work is here to stay in the life sciences industry. Learn how leading biotech companies are building and managing distributed research teams effectively.",
    author: "Michael Chen",
    authorRole: "Head of Executive Search",
    date: "March 24, 2025",
    category: "Team Management",
    readTime: "7 min read",
    imageSlug: "remote-teams-biotech"
  },
  {
    id: "series-a-talent-roadmap",
    title: "The Series A Talent Roadmap: Who to Hire at Each Funding Stage",
    excerpt: "Strategic recruitment planning is critical for biotech startups. This article outlines the key hires biotech companies should prioritize at each funding stage.",
    author: "Emily Rodriguez",
    authorRole: "Technical Recruitment Specialist",
    date: "March 12, 2025",
    category: "Startup Growth",
    readTime: "6 min read",
    imageSlug: "series-a-talent-roadmap"
  },
  {
    id: "diversity-inclusion-biotech",
    title: "Diversity and Inclusion in Biotech: More Than Just a Checkbox",
    excerpt: "Diversity drives innovation in biotech. Explore practical strategies for building genuinely inclusive teams that foster creativity and breakthrough thinking.",
    author: "Sarah Johnson",
    authorRole: "Founder & CEO",
    date: "February 28, 2025",
    category: "Diversity & Inclusion",
    readTime: "8 min read",
    imageSlug: "diversity-inclusion-biotech"
  },
  {
    id: "regulatory-affairs-talent",
    title: "The Growing Demand for Regulatory Affairs Talent in Biotech",
    excerpt: "Regulatory expertise is increasingly critical in biotech. Learn about the evolving roles, skills required, and how to attract top regulatory affairs professionals.",
    author: "Michael Chen",
    authorRole: "Head of Executive Search",
    date: "February 15, 2025",
    category: "Talent Insights",
    readTime: "6 min read",
    imageSlug: "regulatory-affairs-talent"
  },
  {
    id: "interview-questions-biotech",
    title: "15 Essential Interview Questions for Biotech Research Roles",
    excerpt: "Effective interviewing is critical for hiring the right research talent. Discover key questions that reveal scientific thinking, problem-solving capabilities, and cultural fit.",
    author: "Emily Rodriguez",
    authorRole: "Technical Recruitment Specialist",
    date: "January 30, 2025",
    category: "Hiring Tips",
    readTime: "5 min read",
    imageSlug: "interview-questions-biotech"
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
                <div className="aspect-video bg-secondary lg:aspect-auto" />
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
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[16/9] bg-secondary" />
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
                        <div className="w-8 h-8 rounded-full bg-secondary" />
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
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
