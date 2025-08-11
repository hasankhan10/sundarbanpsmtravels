import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-headline font-bold text-secondary">Elite Escapes</h3>
            <p className="text-primary-foreground/70">
              Crafting luxurious and unforgettable journeys for the discerning traveler.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-primary-foreground/90">Contact Info</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>123 Luxury Lane, Suite 100</li>
              <li>Beverly Hills, CA 90210</li>
              <li>contact@eliteescapes.com</li>
              <li>+1 (310) 555-0123</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-primary-foreground/90">Newsletter</h4>
            <p className="text-primary-foreground/70">
              Sign up for exclusive offers and travel inspiration.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
              <Button type="submit" variant="secondary">Subscribe</Button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-primary-foreground/90">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Elite Escapes. All Rights Reserved.</p>
          <nav className="mt-2 space-x-4">
            <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
