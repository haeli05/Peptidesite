"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

function getCountdownTarget() {
  const cycleMs = 3 * 24 * 60 * 60 * 1000;
  const epoch = new Date('2024-01-01T00:00:00Z').getTime();
  const now = Date.now();
  const elapsed = now - epoch;
  return new Date(epoch + (Math.floor(elapsed / cycleMs) + 1) * cycleMs);
}

function useCountdown() {
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    function update() {
      const deadline = getCountdownTarget();
      const total = deadline.getTime() - Date.now();
      if (total > 0) {
        setTimeLeft({
          days: Math.floor(total / (1000 * 60 * 60 * 24)),
          hours: Math.floor((total / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((total / (1000 * 60)) % 60),
          seconds: Math.floor((total / 1000) % 60),
        });
      }
    }
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}

function PromoBanner({ onClose }: { onClose: () => void }) {
  const timeLeft = useCountdown();

  return (
    <div className="bg-[#333333] text-white py-2.5 px-4 relative border-b border-white/5">
      <div className="flex items-center justify-center gap-4">
        <span className="text-sm font-semibold hidden sm:inline" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
          40% OFF - Sale Ends In:
        </span>
        <span className="text-sm font-semibold sm:hidden" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
          40% OFF
        </span>
        <div className="flex items-center gap-1.5">
          <div className="text-center">
            <span className="bg-white/20 text-white font-bold px-1.5 py-0.5 rounded text-xs min-w-[24px] inline-block text-center" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              {timeLeft.days}
            </span>
            <span className="text-white/70 text-[10px] ml-0.5">Days</span>
          </div>
          <div className="text-center">
            <span className="bg-white/20 text-white font-bold px-1.5 py-0.5 rounded text-xs min-w-[24px] inline-block text-center" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-white/70 text-[10px] ml-0.5">Hours</span>
          </div>
          <div className="text-center">
            <span className="bg-white/20 text-white font-bold px-1.5 py-0.5 rounded text-xs min-w-[24px] inline-block text-center" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-white/70 text-[10px] ml-0.5">Min</span>
          </div>
          <div className="text-center">
            <span className="bg-white/20 text-white font-bold px-1.5 py-0.5 rounded text-xs min-w-[24px] inline-block text-center" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-white/70 text-[10px] ml-0.5">Sec</span>
          </div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

const navDropdowns = [
  {
    label: "Weight Loss",
    href: "/weight-loss",
    items: [
      { title: "View All Weight Loss Products", href: "/weight-loss", featured: true },
      { title: "Personalized GLP-1", href: "/weight-loss/personalized-glp-1" },
      { title: "Zepbound", href: "/weight-loss/zepbound" },
      { title: "Ozempic", href: "/weight-loss/ozempic" },
      { title: "Wegovy", href: "/weight-loss/wegovy" },
      { title: "Saxenda", href: "/weight-loss/saxenda" },
    ],
  },
  {
    label: "Better Intimacy",
    href: "/sexual-health",
    items: [
      { title: "View All Better Intimacy Products", href: "/sexual-health", featured: true },
      { title: "Sildenafil", href: "/sexual-health/sildenafil" },
      { title: "Tadalafil", href: "/sexual-health/tadalafil" },
      { title: "Viagra", href: "/sexual-health/viagra" },
      { title: "Cialis", href: "/sexual-health/cialis" },
    ],
  },
  {
    label: "Daily Health",
    href: "/daily-health",
    items: [
      { title: "View All Daily Health Products", href: "/daily-health", featured: true },
      { title: "NAD+", href: "/daily-health/nad-injections" },
      { title: "Sermorelin", href: "/daily-health/sermorelin" },
      { title: "Methylene Blue", href: "/daily-health/methylene-blue" },
    ],
  },
  {
    label: "Hair Growth",
    href: "/hair",
    items: [
      { title: "View All Hair Growth Products", href: "/hair", featured: true },
      { title: "Finasteride", href: "/hair/finasteride" },
      { title: "Oral Minoxidil", href: "/hair/oral-minoxidil" },
      { title: "Finasteride & Minoxidil Spray", href: "/hair/finasteride-minoxidil-spray" },
    ],
  },
];

function NavDropdown({ label, items }: { label: string; href: string; items: { title: string; href: string; featured?: boolean }[] }) {
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button className="flex items-center gap-1 text-sm text-white hover:text-[#FFDD00] transition-colors bg-transparent border-none outline-none cursor-pointer py-2 px-1">
        <span>{label}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-[#333333] border border-white/10 rounded-lg shadow-xl min-w-[220px] py-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-sm transition-colors ${
                  item.featured
                    ? "text-[#FFDD00] font-semibold hover:bg-white/5 border-b border-white/10 mb-1 pb-3"
                    : "text-white/80 hover:text-[#FFDD00] hover:bg-white/5"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [bannerVisible, setBannerVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-[#444444]/95 backdrop-blur" : "bg-transparent"}`}>
      {bannerVisible && <PromoBanner onClose={() => setBannerVisible(false)} />}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 border-b border-[#444444]/10">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#FFDD00] tracking-wide" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>GOLD PEPTIDES</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navDropdowns.map((dropdown) => (
            <NavDropdown key={dropdown.label} {...dropdown} />
          ))}
          <Link href="/how-it-works" className="text-sm text-white hover:text-[#FFDD00] transition-colors py-2">
            How It Works
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <Link href="/login" className="hidden sm:block text-sm text-white hover:text-[#FFDD00] transition-colors">
            Login
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-transparent hover:text-[#FFDD00]">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#333333] border-l border-white/10">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/weight-loss" className="text-lg text-white hover:text-[#FFDD00] transition-colors" onClick={() => setIsOpen(false)}>
                  Weight Loss
                </Link>
                <Link href="/sexual-health" className="text-lg text-white hover:text-[#FFDD00] transition-colors" onClick={() => setIsOpen(false)}>
                  Better Intimacy
                </Link>
                <Link href="/daily-health" className="text-lg text-white hover:text-[#FFDD00] transition-colors" onClick={() => setIsOpen(false)}>
                  Daily Health
                </Link>
                <Link href="/hair" className="text-lg text-white hover:text-[#FFDD00] transition-colors" onClick={() => setIsOpen(false)}>
                  Hair Growth
                </Link>
                <Link href="/how-it-works" className="text-lg text-white hover:text-[#FFDD00] transition-colors" onClick={() => setIsOpen(false)}>
                  How It Works
                </Link>
                <Link href="/login" className="text-lg text-white hover:text-[#FFDD00] transition-colors" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
