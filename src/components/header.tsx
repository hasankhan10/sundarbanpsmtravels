import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = ["Destinations", "Experiences", "About Us", "Contact"];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-headline font-bold text-primary hover:text-primary/80 transition-colors">
          Elite Escapes
          <span className="text-secondary">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-base font-medium text-foreground hover:text-secondary transition-colors"
            >
              {link}
            </Link>
          ))}
        </nav>
        <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md transition-shadow hover:shadow-lg">
          <Link href="#book">Book Now</Link>
        </Button>
      </div>
    </header>
  );
}
