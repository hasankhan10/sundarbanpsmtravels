"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // a little bit of offset
      let currentSectionId = "home";

      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const section = document.getElementById(sectionId);

        if (section && scrollPosition >= section.offsetTop) {
          currentSectionId = sectionId;
        }
      }
      
      const currentLink = navLinks.find(link => link.href.substring(1) === currentSectionId);
      if(currentLink) {
        setActiveLink(currentLink.label);
      }
    };

    if (pathname === '/') {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
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
        setActiveLink(navLinks.find(l => l.href === href)?.label || "Home");
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground">
          SUNDARBAN PSM TRAVELS
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
