import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Building, Clock } from "lucide-react";
import Link from "next/link";

// Sample job data - in a real app, this would come from an API or database
const jobData = {
  "director-of-manufacturing": {
    title: "Director of Manufacturing",
    company: "",
    location: "Cambridge, MA",
    type: "Full-time",
    salary: "$180,000 - $220,000",
    description: "Leading manufacturing operations and scale-up for novel cell and gene therapy products.",
    requirements: [
      "Advanced degree in Chemical Engineering, Biotechnology, or related field",
      "10+ years of manufacturing experience in cell/gene therapy or biologics",
      "Experience with GMP manufacturing and regulatory compliance",
      "Strong leadership and team management skills",
      "Experience with process development and scale-up operations"
    ],
    responsibilities: [
      "Oversee all manufacturing operations for cell and gene therapy products",
      "Lead manufacturing scale-up from clinical to commercial production",
      "Ensure GMP compliance and maintain regulatory standards",
      "Manage manufacturing teams and coordinate with quality assurance",
      "Develop and implement manufacturing strategies and process improvements",
      "Interface with regulatory agencies and support product approvals"
    ],
    posted: "2 days ago"
  },
  "clinical-operations-manager": {
    title: "Clinical Operations Manager",
    company: "",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$110,000 - $135,000",
    description: "Overseeing Phase I/II clinical trials for our lead compound targeting autoimmune disorders.",
    requirements: [
      "Bachelor's degree in life sciences or related field",
      "5+ years of experience in clinical trial management",
      "Experience with EDC systems and GCP guidelines",
      "Strong project management and organizational skills",
      "Knowledge of FDA regulations and ICH guidelines"
    ],
    responsibilities: [
      "Manage day-to-day operations of clinical trials",
      "Oversee CRO activities and ensure protocol compliance",
      "Prepare clinical documents and regulatory submissions",
      "Coordinate with clinical sites and investigators",
      "Monitor trial progress and ensure timeline adherence",
      "Support regulatory interactions and inspections"
    ],
    posted: "5 days ago"
  },
  "ai-data-engineer": {
    title: "AI Data Engineer",
    company: "",
    location: "Remote",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    description: "Building AI/ML pipelines to accelerate drug discovery and optimize clinical trial data analysis.",
    requirements: [
      "Master's degree in Computer Science, Data Science, or related field",
      "5+ years of experience in data engineering and machine learning",
      "Proficiency in Python, SQL, and cloud platforms (AWS/GCP/Azure)",
      "Experience with ML frameworks (TensorFlow, PyTorch, scikit-learn)",
      "Knowledge of bioinformatics and life sciences data preferred"
    ],
    responsibilities: [
      "Design and implement AI/ML pipelines for drug discovery applications",
      "Build data infrastructure to support machine learning workflows",
      "Develop predictive models for compound optimization and clinical outcomes",
      "Collaborate with data scientists and research teams",
      "Optimize data processing and model deployment workflows",
      "Ensure data quality, security, and compliance with industry standards"
    ],
    posted: "1 week ago"
  }
};

// Required for static export
export function generateStaticParams() {
  return Object.keys(jobData).map(id => ({ id }));
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  // In a real app, this would fetch job data based on the ID
  // For demo purposes, we'll just use the sample data
  const job = jobData[params.id as keyof typeof jobData] || jobData["director-of-manufacturing"];

  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary py-10">
          <div className="container">
            <Link href="/jobs" className="flex items-center gap-2 text-muted-foreground hover:text-cool-blue mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to jobs
            </Link>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="heading-xl mb-2">{job.title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">

                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
              </div>
              <Button asChild className="btn-primary">
                <Link href={`/jobs/${params.id}/apply`}>Apply Now</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-xl font-bold mb-4">Job Description</h2>
                    <p className="mb-6">{job.description}</p>

                    <h3 className="text-lg font-bold mb-3">Requirements</h3>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-bold mb-3">Responsibilities</h3>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>

                    <div className="flex justify-center mt-6">
                      <Button asChild size="lg" className="btn-primary">
                        <Link href={`/jobs/${params.id}/apply`}>Apply for this Position</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Job Overview</h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Job Type</p>
                        <p>{job.type}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-1">Salary Range</p>
                        <p>{job.salary}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-1">Location</p>
                        <p>{job.location}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-1">Posted</p>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.posted}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>


              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
