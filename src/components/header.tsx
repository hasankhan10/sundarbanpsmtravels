
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("Home");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition < 200) {
        setActiveLink("Home");
        return;
      }

      let currentSectionId = "home";
      for (const link of navLinks) {
          const sectionId = link.href.substring(1);
          const section = document.getElementById(sectionId);
          if (section) {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
              if (scrollPosition >= sectionTop - 150 && scrollPosition < sectionTop + sectionHeight - 150) {
                  currentSectionId = sectionId;
              }
          }
      }
      
      const newActiveLink = navLinks.find(link => link.href === `#${currentSectionId}`)?.label || 'Home';
      setActiveLink(newActiveLink);
    };

    if (pathname === '/') {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); 
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);


  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsSheetOpen(false); 
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
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-foreground">
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
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button>Sign Up</Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <div className="p-6">
                <div className="mb-8 flex justify-between items-center">
                  <Link href="/" className="text-lg font-bold text-foreground" onClick={() => setIsSheetOpen(false)}>
                    SUNDARBAN PSM TRAVELS
                  </Link>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={cn(
                        "text-lg font-medium text-muted-foreground transition-colors hover:text-primary",
                        activeLink === link.label && "text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button className="w-full mt-8">Sign Up</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
