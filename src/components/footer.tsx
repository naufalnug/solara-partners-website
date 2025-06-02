// Instructions: Restore the complete footer component with the updated yellow sun logo

import Link from "next/link";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-xl font-bold text-accent tracking-tight font-sans">
                Solara Partners
              </span>
            </Link>
            <p className="caption max-w-xs">
              We help biotech leaders hire with purpose, aligning people, science, and ambition.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/services" className="hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="/case-studies" className="hover:text-accent transition-colors">
                Case Studies
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/services/permanent-placements" className="hover:text-accent transition-colors">
                Permanent Placements
              </Link>
              <Link href="/services/contract-staffing" className="hover:text-accent transition-colors">
                Contract Staffing
              </Link>
              <Link href="/services/executive-search" className="hover:text-accent transition-colors">
                Executive Search
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="flex flex-col space-y-2">
              <a href="tel:+14155550123" className="hover:text-accent transition-colors">
                (415) 555-0123
              </a>
              <a href="mailto:info@solarapartners.io" className="hover:text-accent transition-colors">
                info@solarapartners.io
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="caption text-center md:text-left">
            &copy; {new Date().getFullYear()} Solara Partners. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="caption hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="caption hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
