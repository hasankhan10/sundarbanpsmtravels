import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto px-4 md:px-6 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary">SUNDARBAN PSM TRAVELS</h3>
            <p className="text-muted-foreground">
              Discover the World with Ease! Your dream destinations and unforgettable experiences are just a click away.
            </p>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-semibold text-lg">About</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary">Features</Link></li>
              <li><Link href="#" className="hover:text-primary">News & Blog</Link></li>
            </ul>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-semibold text-lg">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">Support Center</Link></li>
              <li><Link href="#" className="hover:text-primary">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-semibold text-lg">Let's enjoy your trip with us</h4>
            <div className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto md:mx-0">
              <Input type="email" placeholder="Your email" className="bg-secondary flex-1" />
              <Button type="submit">Join Now</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SUNDARBAN PSM TRAVELS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}