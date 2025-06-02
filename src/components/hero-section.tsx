import Link from "next/link";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Enhanced gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-accent/10 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-cool-blue/5 via-transparent to-primary/5 -z-10" />

      {/* Floating abstract shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent/20 to-cool-blue/10 rounded-3xl rotate-12 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-tr from-primary/15 to-accent/15 rounded-2xl -rotate-12" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-cool-blue/20 to-accent/20 rounded-full animate-bounce [animation-duration:3s]" />

      <div className="container py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col max-w-2xl space-y-8">
            <div className="space-y-6">
              <h1 className="heading-xl mb-6 animate-fade-in">
                Hiring That Moves Biotech Forward
              </h1>
              <p className="body-lg text-muted-foreground animate-fade-in [animation-delay:200ms]">
                We work with biotech founders who need more than just CVs - they need people who can push the mission forward. Our recruitment approach is tailored, fast, and built around your goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
              <Button asChild size="lg" className="btn-primary transform hover:scale-105 transition-all duration-300">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-secondary transform hover:scale-105 transition-all duration-300">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>

            {/* Glass morphism stats cards */}
            <div className="grid grid-cols-3 gap-4 mt-8 animate-fade-in [animation-delay:600ms]">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
                <p className="text-2xl font-bold text-accent">500+</p>
                <p className="text-sm text-muted-foreground">Successful Placements</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
                <p className="text-2xl font-bold text-cool-blue">92%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
                <p className="text-2xl font-bold text-primary">14+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            {/* Enhanced central visual */}
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-spin [animation-duration:20s]" />

              {/* Main central element - Bright Sun */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent/25 via-yellow-200/30 to-amber-300/25 backdrop-blur-sm border border-accent/30 flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-3 p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-amber-400 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="font-bold text-xl">Life Science Experts</p>
                  <p className="text-sm max-w-[200px] mx-auto text-muted-foreground">Our specialized focus delivers biotech talent in record time</p>
                </div>
              </div>

              {/* Floating glass morphism cards */}
              <div className="absolute -top-8 -left-8 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-xl animate-bounce [animation-duration:3s]">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Candidate Focused</p>
                    <p className="text-xs text-muted-foreground">Your success is our priority</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 right-32 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-xl animate-bounce [animation-duration:4s] [animation-delay:1s]">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Fast Process</p>
                    <p className="text-xs text-muted-foreground">Results in weeks</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-16 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-xl animate-bounce [animation-duration:3.5s] [animation-delay:2s]">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Biotech Focus</p>
                    <p className="text-xs text-muted-foreground">Industry experts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-cool-blue/30 to-accent/30 rounded-3xl rotate-12 animate-pulse" />
            <div className="absolute bottom-10 -left-10 w-16 h-16 bg-gradient-to-tr from-accent/30 to-primary/30 rounded-2xl -rotate-12" />
            <div className="absolute -bottom-5 right-20 w-12 h-12 bg-gradient-to-r from-primary/20 to-cool-blue/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
