import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-bold text-accent tracking-tight font-sans">
            Solara Partners
          </span>
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
