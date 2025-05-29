import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          {/* Solara Partners Logo */}
          <div className="relative">
            <svg
              width="40"
              height="40"
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
            <span className="text-xl font-normal text-gray-800">
              solara partners
            </span>
            <span className="text-xs text-cool-blue font-medium tracking-wider uppercase">
              Life Sciences
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-cool-blue transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-cool-blue transition-colors">
            About
          </Link>
          <Link href="/services" className="hover:text-cool-blue transition-colors">
            Services
          </Link>
          <Link href="/case-studies" className="hover:text-cool-blue transition-colors">
            Case Studies
          </Link>
          <Link href="/blog" className="hover:text-cool-blue transition-colors">
            Blog
          </Link>
          <div className="border-l border-border h-6 mx-1" />
          <Link href="/jobs" className="text-cool-blue hover:text-cool-blue/80 transition-colors font-medium">
            For Candidates
          </Link>
          <Button asChild className="btn-primary transform hover:scale-105 transition-all duration-300">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg hover:text-cool-blue transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-lg hover:text-cool-blue transition-colors">
                About
              </Link>
              <Link href="/services" className="text-lg hover:text-cool-blue transition-colors">
                Services
              </Link>
              <Link href="/case-studies" className="text-lg hover:text-cool-blue transition-colors">
                Case Studies
              </Link>
              <Link href="/blog" className="text-lg hover:text-cool-blue transition-colors">
                Blog
              </Link>
              <Link href="/jobs" className="text-lg text-cool-blue hover:text-cool-blue/80 transition-colors font-medium">
                For Candidates
              </Link>
              <Button asChild className="btn-primary mt-4">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
