import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-6">Contact Us</h1>
              <p className="body-lg text-muted-foreground">
                Ready to build your dream team? Get in touch with our biotech recruitment specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Information */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2">
                <CardContent className="p-6 md:p-8">
                  <h2 className="heading-md mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Full Name*
                        </label>
                        <Input id="name" placeholder="John Smith" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-medium">
                          Company*
                        </label>
                        <Input id="company" placeholder="Your Company" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email*
                        </label>
                        <Input id="email" type="email" placeholder="you@example.com" required />
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
                        Service of Interest*
                      </label>
                      <select
                        id="service"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
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
                        Message*
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your recruitment needs"
                        rows={5}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="how" className="block text-sm font-medium">
                        How did you hear about us?
                      </label>
                      <select
                        id="how"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Please select</option>
                        <option value="google">Google Search</option>
                        <option value="referral">Referral</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="conference">Industry Conference</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <Button type="submit" className="btn-primary w-full" size="lg">
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Fields marked with * are required
                    </p>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-xl font-bold mb-6">Contact Information</h2>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <PhoneIcon className="h-5 w-5 text-accent mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <a href="tel:+14155550123" className="text-muted-foreground hover:text-accent transition-colors">
                            (415) 555-0123
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MailIcon className="h-5 w-5 text-accent mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a href="mailto:info@solarapartners.io" className="text-muted-foreground hover:text-accent transition-colors">
                            info@solarapartners.io
                          </a>
                        </div>
                      </div>


                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent/10 border-accent/20">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-lg font-bold mb-4">Schedule a Call</h3>
                    <p className="text-muted-foreground mb-4">
                      Prefer to speak directly with one of our recruitment specialists? Schedule a 30-minute consultation.
                    </p>
                    <Button className="btn-primary w-full">
                      Book a Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-secondary py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="heading-md mb-4">Visit Our Office</h2>
              <p className="body-lg text-muted-foreground">
                We're located in the heart of San Francisco's biotech district.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video max-w-5xl mx-auto bg-card border border-border rounded-lg overflow-hidden">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Map Placeholder</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
