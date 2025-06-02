import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-secondary/20 to-cool-blue/5 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-accent/10 -z-10" />

      {/* Floating background elements */}
      <div className="absolute top-10 right-20 w-28 h-28 bg-gradient-to-br from-accent/15 to-cool-blue/10 rounded-3xl rotate-45 animate-pulse" />
      <div className="absolute bottom-10 left-20 w-20 h-20 bg-gradient-to-tr from-primary/15 to-accent/15 rounded-2xl -rotate-12" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">Let's Build the Team That Brings Your Science to Life</h2>
          <p className="body-lg text-muted-foreground">
            Schedule a consultation to discuss your biotech recruitment needs. Our team is ready to help you find the perfect talent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in [animation-delay:200ms]">
          {/* Glass morphism form card */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all duration-300">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium">
                      Company
                    </label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-medium">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="permanent">Permanent Placements</option>
                    <option value="contract">Contract Staffing</option>
                    <option value="executive">Executive Search</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your recruitment needs"
                    rows={5}
                  />
                </div>

                <Button className="btn-primary w-full transform hover:scale-105 transition-all duration-300" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

          {/* Glass morphism contact info card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col h-full justify-between hover:bg-white/15 transition-all duration-300">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <PhoneIcon className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <a href="tel:+14155550123" className="text-muted-foreground hover:text-accent">
                        (415) 555-0123
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MailIcon className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <a href="mailto:info@solarapartners.io" className="text-muted-foreground hover:text-accent">
                        info@solarapartners.io
                      </a>
                    </div>
                  </div>
                </div>
              </div>


            </div>
        </div>
      </div>
    </section>
  );
}
