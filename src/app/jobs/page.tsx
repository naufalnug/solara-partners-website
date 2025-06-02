import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// Minimal job data
const jobs = [
  {
    id: "director-of-manufacturing",
    title: "Director of Manufacturing",
    company: "",
    location: "Cambridge, MA"
  },
  {
    id: "clinical-operations-manager",
    title: "Clinical Operations Manager",
    company: "",
    location: "San Francisco, CA"
  },
  {
    id: "ai-data-engineer",
    title: "AI Data Engineer",
    company: "",
    location: "Remote"
  }
];

export default function JobsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary py-16">
          <div className="container">
            <h1 className="heading-xl text-center mb-4">Biotech Career Opportunities</h1>
            <p className="body-lg text-center text-muted-foreground max-w-2xl mx-auto">
              Find your next role at leading biotech companies with Solara Partners
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map(job => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <p className="text-muted-foreground mb-4">{job.company} • {job.location}</p>
                    <Button asChild className="w-full">
                      <Link href={`/jobs/${job.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
