import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Beaker, Users, Search, ArrowRight } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      id: "permanent",
      title: "Permanent Placements",
      description: "Building your core team with people who don't just fit on paper, but belong in your mission.",
      icon: <Users className="h-12 w-12 text-white" />,
      gradient: "from-accent to-cool-blue",
      link: "/services/permanent-placements"
    },
    {
      id: "contract",
      title: "Contract Staffing",
      description: "Flexible, fast, and focused talent solutions for specialized biotech projects.",
      icon: <Beaker className="h-12 w-12 text-white" />,
      gradient: "from-cool-blue to-primary",
      link: "/services/contract-staffing"
    },
    {
      id: "executive",
      title: "Executive Search",
      description: "Leadership that fits your future - finding leaders who shape direction, culture, and outcomes.",
      icon: <Search className="h-12 w-12 text-white" />,
      gradient: "from-primary to-accent",
      link: "/services/executive-search"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Enhanced background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-accent/5 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-cool-blue/5 via-transparent to-primary/5 -z-10" />

      {/* Floating background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-cool-blue/5 rounded-full rotate-45 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl -rotate-12" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="heading-md mb-6">Our Specialized Services</h2>
          <p className="body-lg text-muted-foreground">
            We offer tailored recruitment solutions designed specifically for biotech startups and
            established life science companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative animate-fade-in"
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Glass morphism card */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                {/* Gradient icon container */}
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <Button
                  variant="ghost"
                  asChild
                  className="group/btn text-accent p-0 h-auto font-semibold hover:text-accent/80"
                >
                  <Link href={service.link} className="flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                {/* Subtle floating indicator */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-accent/40 to-cool-blue/40 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
