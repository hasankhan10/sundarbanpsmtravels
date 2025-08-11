"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About Us", href: "#about-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("About Us");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Check if at the top of the page
      if (window.scrollY < 100) {
        setActiveLink("About Us");
        return;
      }
      
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].label);
          break;
        }
      }
    };

    if(pathname === '/'){
        window.addEventListener("scroll", handleScroll);
        // Set initial active link on mount
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

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
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                "text-base font-medium text-muted-foreground transition-colors hover:text-primary",
                activeLink === link.label && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
}
