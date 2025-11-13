import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "#gallery" },
    { name: "IG", href: "#instagram" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span
              className={cn(
                "text-2xl font-serif font-bold tracking-tight transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              JayP Studios
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            className={cn(
              "md:hidden",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
