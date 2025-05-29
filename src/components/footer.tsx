// Instructions: Restore the complete footer component with the updated yellow sun logo

import Link from "next/link";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              {/* Footer Logo */}
              <div className="relative">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 100 100"
                  className="drop-shadow-sm"
                >
                  {/* Sun rays - matching your logo design exactly */}
                  <g fill="#FCD34D" stroke="#FCD34D">
                    {/* Long main rays - top, bottom, left, right */}
                    <line x1="50" y1="8" x2="50" y2="25" strokeWidth="3" strokeLinecap="round" />
                    <line x1="50" y1="75" x2="50" y2="92" strokeWidth="3" strokeLinecap="round" />
                    <line x1="8" y1="50" x2="25" y2="50" strokeWidth="3" strokeLinecap="round" />
                    <line x1="75" y1="50" x2="92" y2="50" strokeWidth="3" strokeLinecap="round" />

                    {/* Medium diagonal rays */}
                    <line x1="21.5" y1="21.5" x2="32" y2="32" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="68" y1="68" x2="78.5" y2="78.5" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="78.5" y1="21.5" x2="68" y2="32" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="32" y1="68" x2="21.5" y2="78.5" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Shorter additional rays */}
                    <line x1="50" y1="15" x2="50" y2="20" strokeWidth="2" strokeLinecap="round" />
                    <line x1="50" y1="80" x2="50" y2="85" strokeWidth="2" strokeLinecap="round" />
                    <line x1="15" y1="50" x2="20" y2="50" strokeWidth="2" strokeLinecap="round" />
                    <line x1="80" y1="50" x2="85" y2="50" strokeWidth="2" strokeLinecap="round" />

                    {/* Small dots at ray ends */}
                    <circle cx="50" cy="5" r="2" />
                    <circle cx="50" cy="95" r="2" />
                    <circle cx="5" cy="50" r="2" />
                    <circle cx="95" cy="50" r="2" />
                    <circle cx="18" cy="18" r="1.5" />
                    <circle cx="82" cy="82" r="1.5" />
                    <circle cx="82" cy="18" r="1.5" />
                    <circle cx="18" cy="82" r="1.5" />
                  </g>

                  {/* Central bright yellow sun - solid fill like your design */}
                  <circle
                    cx="50"
                    cy="50"
                    r="18"
                    fill="#FCD34D"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">
                  <span className="text-accent">solara</span> partners
                </span>
                <span className="text-xs text-accent/80 font-medium tracking-wider uppercase">
                  Life Sciences
                </span>
              </div>
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
              <p>123 Biotech Avenue</p>
              <p>San Francisco, CA 94107</p>
              <a href="tel:+14155550123" className="hover:text-accent transition-colors">
                (415) 555-0123
              </a>
              <a href="mailto:info@solarapartners.com" className="hover:text-accent transition-colors">
                info@solarapartners.com
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
