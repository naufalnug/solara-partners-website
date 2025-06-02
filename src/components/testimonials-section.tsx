import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { QuoteIcon } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Solara Partners was instrumental in rapidly assembling our clinical operations team. Their understanding of the biotech landscape and commitment to our vision made them an invaluable partner in our growth.",
      name: "CEO",
      title: "Oncology Therapeutics Company, Cambridge"
    },
    {
      id: 2,
      quote: "Finding specialized talent in the biotech space has always been challenging. Solara Partners cut our hiring time in half while ensuring each candidate aligned perfectly with our company culture and technical needs.",
      name: "COO",
      title: "Genomics & Drug Discovery Company, San Francisco"
    },
    {
      id: 3,
      quote: "The team at Solara Partners truly understand the unique challenges faced by biotech startups. Their recruitment expertise helped us scale quickly during a critical funding phase.",
      name: "Founder",
      title: "Cell Therapy Startup, Boston"
    },
    {
      id: 4,
      quote: "What impressed me most about Solara Partners was their deep network in the biotech industry. They connected us with senior researchers who perfectly matched our specialized requirements.",
      name: "Chief Scientific Officer",
      title: "Precision Medicine Company, San Diego"
    },
    {
      id: 5,
      quote: "After a long search for a particular candidate, we were starting to give up hope that the right person was out there for our very niche role, and then along came Solara Partners. They understood our needs from the first call, and quickly got to work. Within a few weeks, they had found us a candidate, and we hired them.",
      name: "Executive Director",
      title: "Life Sciences Non-Profit, Boston"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-accent/5 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-cool-blue/5 via-transparent to-primary/5 -z-10" />

      {/* Floating background elements */}
      <div className="absolute top-1/4 left-5 w-20 h-20 bg-gradient-to-br from-accent/15 to-cool-blue/10 rounded-3xl rotate-12 animate-pulse" />
      <div className="absolute bottom-1/4 right-5 w-16 h-16 bg-gradient-to-tr from-primary/15 to-accent/15 rounded-2xl -rotate-12" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="heading-md mb-6">What Our Clients Say</h2>
          <p className="body-lg text-muted-foreground">
            We pride ourselves on delivering exceptional results for biotech companies at every stage of growth.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="h-full group">
                  {/* Glass morphism testimonial card */}
                  <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    {/* Gradient quote icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-cool-blue/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <QuoteIcon className="h-6 w-6 text-accent" />
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      "{testimonial.quote}"
                    </p>

                    <div className="pt-4 border-t border-white/20">
                      <p className="font-bold text-foreground group-hover:text-accent transition-colors">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        {testimonial.title}
                      </p>
                    </div>

                    {/* Subtle floating indicator */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-accent/40 to-cool-blue/40 rounded-full animate-pulse" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Enhanced carousel controls */}
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static translate-y-0 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-foreground" />
            <CarouselNext className="static translate-y-0 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-foreground" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
