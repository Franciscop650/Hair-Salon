import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language";
import { LanguageSwitcher } from "@/components/language-switcher";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { href: "/", label: t('nav.home') },
    { href: "/services", label: t('nav.services') },
    { href: "/reservations", label: t('nav.book') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-[var(--primary-gold)]" />
            <span className="playfair text-xl font-bold text-[var(--primary-gold)]">
              {t('brand.name')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-medium transition-colors hover:text-[var(--primary-gold)]",
                  location === item.href
                    ? "text-[var(--primary-gold)]"
                    : "text-[var(--text-charcoal)]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-4 py-2 font-medium transition-colors hover:text-[var(--primary-gold)]",
                    location === item.href
                      ? "text-[var(--primary-gold)]"
                      : "text-[var(--text-charcoal)]"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
