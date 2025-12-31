import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import UmbrellaLogo from "./UmbrellaLogo";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Programs", href: "#programs" },
    { label: "Research", href: "#research" },
    { label: "Campus Life", href: "#campus" },
    { label: "Admissions", href: "#admissions" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <UmbrellaLogo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wide text-foreground">
                UMBRELLA
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                UNIVERSITY
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" size="sm" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" size="sm" className="mt-4 w-full" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
