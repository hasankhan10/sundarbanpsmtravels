
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Search } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "About Us", href: "#about-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-foreground">
          Traventure
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors data-[active=true]:text-primary data-[active=true]:font-semibold"
              data-active={link.label === 'Home'}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage src="https://randomuser.me/api/portraits/men/75.jpg" alt="Mohammad" data-ai-hint="man portrait"/>
                    <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm text-muted-foreground">Hello i</p>
                    <p className="font-semibold">Mohammad</p>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}
