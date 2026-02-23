"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";

/* ─── Countdown Timer (rolling 3-day cycle) ─── */
function getCountdownTarget() {
  const cycleMs = 3 * 24 * 60 * 60 * 1000;
  const epoch = new Date('2024-01-01T00:00:00Z').getTime();
  const now = Date.now();
  const elapsed = now - epoch;
  return new Date(epoch + (Math.floor(elapsed / cycleMs) + 1) * cycleMs);
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
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
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Sec" },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-1">
          <span className="bg-[#EF4049] text-white font-bold px-2 py-1 rounded text-sm min-w-[32px] text-center" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-white/70 text-xs">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Product Carousel ─── */
function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  const products = [
    { category: "Weight Loss", name: "Personalized GLP-1", type: "Injectable", badge: "40% OFF", href: "/weight-loss" },
    { category: "Weight Loss", name: "Ozempic", type: "Injectable", href: "/weight-loss" },
    { category: "Weight Loss", name: "Zepbound", type: "Injectable", href: "/weight-loss" },
    { category: "Weight Loss", name: "Wegovy", type: "Injectable", href: "/weight-loss" },
    { category: "Weight Loss", name: "Saxenda", type: "Injectable", href: "/weight-loss" },
    { category: "Better Intimacy", name: "Tadalafil", type: "Pill", href: "/sexual-health" },
    { category: "Better Intimacy", name: "Sildenafil", type: "Pill", href: "/sexual-health" },
    { category: "Better Intimacy", name: "Cialis", type: "Pill", href: "/sexual-health" },
    { category: "Better Intimacy", name: "Viagra", type: "Pill", href: "/sexual-health" },
    { category: "Daily Health", name: "NAD+", type: "Injectable", href: "/daily-health" },
    { category: "Daily Health", name: "Sermorelin", type: "Injectable", href: "/daily-health" },
    { category: "Daily Health", name: "Methylene Blue", type: "Pill", href: "/daily-health" },
    { category: "Hair", name: "Finasteride", type: "Pill", href: "/hair" },
    { category: "Hair", name: "Oral Minoxidil", type: "Pill", href: "/hair" },
    { category: "Hair", name: "Finasteride & Minoxidil Spray", type: "Spray", href: "/hair" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2.5 -ml-4 hidden md:flex items-center justify-center"
      >
        <ChevronLeft className="h-5 w-5 text-[#444444]" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2.5 -mr-4 hidden md:flex items-center justify-center"
      >
        <ChevronRight className="h-5 w-5 text-[#444444]" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product, index) => (
          <div key={index} className="min-w-[260px] max-w-[260px] snap-start">
            <Card className="h-full hover:shadow-lg transition-shadow border border-transparent hover:border-[#FFDD00]/40 bg-white">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="text-[10px] font-semibold uppercase tracking-wide">{product.category}</Badge>
                  {product.badge && <Badge className="bg-[#EF4049] text-white text-[10px] font-bold">{product.badge}</Badge>}
                </div>
                <p className="text-[11px] text-green-600 font-semibold mt-1">In Stock</p>
                <CardTitle className="text-base mt-1.5" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-xs text-muted-foreground">{product.type}</p>
              </CardContent>
              <CardFooter className="gap-2 pt-0">
                <Link href={product.href} className="flex-1">
                  <Button size="sm" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] w-full font-bold text-xs" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Get Started</Button>
                </Link>
                <Link href={product.href} className="flex-1">
                  <Button size="sm" variant="outline" className="w-full font-semibold text-xs" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Explore</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Testimonial Card ─── */
function TestimonialCard({ quote, name, result }: { quote: string; name: string; result: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg cursor-pointer border border-[#444444]/10" onClick={() => setIsOpen(!isOpen)}>
      <div className="px-5 py-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-[#444444] text-sm" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{name}</p>
            <p className="text-xs text-[#FFDD00] font-bold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{result}</p>
          </div>
          <button className="text-[#444444] hover:text-[#FFDD00] transition-colors flex-shrink-0 ml-4">
            {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </button>
        </div>
        {isOpen && (
          <>
            <Separator className="my-3 bg-[#FFDD00]/20" />
            <p className="text-[#444444]/70 text-sm italic">&ldquo;{quote}&rdquo;</p>
          </>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   HOMEPAGE
   Section order matches refills.com layout
   ═══════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

      {/* ═══ 1. HERO SECTION ═══ */}
      <section className="relative bg-[#FFFEF0] pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-5">
              <span className="text-[#444444]/80 font-semibold tracking-wider text-sm uppercase" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                40% OFF - SALE ENDS IN:
              </span>
              <CountdownTimer />
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#444444] mb-4 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Doctor-Trusted Care,{" "}
              <span className="text-[#FFDD00]">Personalized for You</span>
            </h1>

            <p className="text-lg md:text-xl text-[#444444] mb-1">
              GLP-1s from <strong className="text-[#FFDD00]">$4/day</strong>, delivered fast
            </p>
            <p className="text-[#444444]/50 text-sm mb-8">Free & Discreet Shipping | No Hidden Fees</p>

            <Link href="/login">
              <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-10 py-6 font-bold rounded-lg" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 2. CATEGORY CARDS ═══ */}
      <section className="py-10 md:py-14 bg-[#FFFEF0] -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {[
              { title: "Weight Loss", subtitle: "Achieve your weight loss Goals", href: "/weight-loss", gradient: "from-[#4a4a4a] to-[#2a2a2a]" },
              { title: "Better Intimacy", subtitle: "Gain Confidence and Last Longer", href: "/sexual-health", gradient: "from-[#4a4a4a] to-[#2a2a2a]" },
              { title: "Daily Health", subtitle: "Become the Best version of yourself", href: "/daily-health", gradient: "from-[#4a4a4a] to-[#2a2a2a]" },
              { title: "Hair Growth", subtitle: "Lasting solutions for fuller hair", href: "/hair", gradient: "from-[#4a4a4a] to-[#2a2a2a]" },
            ].map((cat) => (
              <Link key={cat.title} href={cat.href} className="group">
                <div className={`relative rounded-xl overflow-hidden h-[260px] md:h-[380px] bg-gradient-to-b ${cat.gradient} flex flex-col justify-end p-5 md:p-7 transition-all group-hover:shadow-xl`}>
                  <div className="absolute inset-0 bg-[#FFDD00]/0 group-hover:bg-[#FFDD00]/5 transition-all duration-300" />
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 relative z-10" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{cat.title}</h3>
                  <p className="text-xs md:text-sm text-white/60 relative z-10">{cat.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. PRODUCT CAROUSEL ═══ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Personalized For You
          </h2>
          <ProductCarousel />
        </div>
      </section>

      {/* ═══ 4. TRUST/FEATURES BAR ═══ */}
      <section className="py-5 bg-[#333333]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
            {[
              "BOARD CERTIFIED PHYSICIANS",
              "FDA-REGULATED PHARMACIES",
              "100% ONLINE PROCESS",
              "FREE & DISCREET SHIPPING",
              "AFFORDABLE PRICING",
              "NO HIDDEN FEES",
              "NO INSURANCE REQUIRED",
            ].map((item) => (
              <span key={item} className="text-white/90 text-xs font-semibold tracking-wider" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. LIFESTYLE SECTIONS ═══ */}
      <section>
        {[
          { headline: "Shed the extra, feel extra good", category: "Weight Loss", href: "/weight-loss", gradient: "from-[#3a3a3a] to-[#222222]" },
          { headline: "Fight back where it's thinning up top", category: "Hair Growth", href: "/hair", gradient: "from-[#4a4a4a] to-[#2a2a2a]" },
          { headline: "Turn up the heat — naturally", category: "Better Intimacy", href: "/sexual-health", gradient: "from-[#3a3a3a] to-[#1a1a1a]" },
          { headline: "Less stress, more yes", category: "Daily Health", href: "/daily-health", gradient: "from-[#4a4a4a] to-[#222222]" },
        ].map((block, i) => (
          <Link key={block.headline} href={block.href} className="group block">
            <div className={`relative bg-gradient-to-br ${block.gradient}`}>
              <div className="container mx-auto px-4 py-20 md:py-28">
                <div className={`max-w-2xl ${i % 2 !== 0 ? "ml-auto text-right" : ""}`}>
                  <p className="text-xs text-[#FFDD00] font-semibold tracking-wider uppercase mb-3" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{block.category}</p>
                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight group-hover:text-[#FFDD00] transition-colors" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                    {block.headline}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* ═══ 6. "GOLD YOUR DAY" CTA ═══ */}
      <section className="relative bg-gradient-to-br from-[#444444] to-[#222222] py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Gold Your Day
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10">
            {[
              { label: "Lose Weight", href: "/weight-loss" },
              { label: "Perform Better", href: "/sexual-health" },
              { label: "Regrow Hair", href: "/hair" },
              { label: "Anti-Aging", href: "/daily-health" },
              { label: "Daily Wellness", href: "/daily-health" },
            ].map((link) => (
              <Link key={link.label} href={link.href}>
                <span className="inline-block border border-white/30 text-white hover:border-[#FFDD00] hover:text-[#FFDD00] transition-colors rounded-full px-6 py-2.5 text-sm font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
          <Link href="/login">
            <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-10 py-6 font-bold rounded-lg" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* ═══ 7. KEY STATS / BENEFITS ═══ */}
      <section className="py-16 md:py-24 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Clinically Prescribed By{" "}
            <span className="text-[#FFDD00]">Licensed Professionals</span>
          </h2>
          <p className="text-center text-[#444444]/60 mb-14 max-w-2xl mx-auto">
            Your care team is committed to personalized support — from your first consultation to ongoing adjustments, your provider is with you every step of the way.
          </p>

          <div className="space-y-10">
            {[
              { title: "20% Weight Loss In One Year", desc: "Proven results with our personalized GLP-1 programs. Real patients, real outcomes." },
              { title: "Never Pay for Monthly Memberships or App Fees", desc: "No app fees. No subscription traps. Just straightforward, affordable pricing." },
              { title: "All Dosages at the Same Low Price", desc: "We don't penalize you for needing a higher dose. Every dosage costs the same." },
              { title: "Free & Fast Shipping", desc: "Discreetly shipped to your front door at no additional cost." },
              { title: "Free 24/7 Support with our Health Concierge", desc: "Our Health Concierge team is available around the clock to help you manage your goals." },
            ].map((benefit, i) => (
              <div key={i}>
                <h3 className="text-2xl md:text-3xl font-bold text-[#444444] mb-2" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                  {benefit.title}
                </h3>
                <p className="text-[#444444]/60 text-base">
                  {benefit.desc}
                </p>
                {i < 4 && <Separator className="mt-10 bg-[#444444]/10" />}
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/login">
              <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-10 py-6 font-bold rounded-lg" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 8. TESTIMONIALS ═══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#444444] uppercase tracking-wide" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Hear From Gold Peptides Customers
          </h2>
          <div className="space-y-2.5">
            <TestimonialCard quote="Gold Peptides helped me get my energy back — I feel sharper, stronger, and finally excited to take on each day." name="Antonia" result="Lost 50 Pounds" />
            <TestimonialCard quote="Thanks to Gold Peptides, I'm sleeping better, moving easier, and feeling like myself again." name="Jacob" result="Lost 80 Pounds" />
            <TestimonialCard quote="Gold Peptides changed my relationship with food — no crash diets, no guilt, just steady, real progress." name="Mireya" result="Lost 52 Pounds" />
            <TestimonialCard quote="I never thought I could stick to something — Gold Peptides made it easy and sustainable." name="Cindy" result="Lost 120 Pounds" />
            <TestimonialCard quote="My clothes fit better, my joints don't ache anymore, and I actually look forward to being active!" name="Illiana" result="Lost 40 Pounds" />
            <TestimonialCard quote="I lost 75 pounds with Gold Peptides and gained so much more — confidence, freedom, and better health." name="Robert" result="Lost 75 Pounds" />
            <TestimonialCard quote="My blood pressure dropped, my stress went down, and my energy shot up — all thanks to Gold Peptides." name="Hannah" result="Lost 70 Pounds" />
            <TestimonialCard quote="I used to feel stuck — now, with Gold Peptides, my health is moving in the right direction every single day." name="Mary" result="Lost 40 Pounds" />
            <TestimonialCard quote="I'm not winded after climbing stairs anymore. That alone is worth everything Gold Peptides helped me achieve." name="Daryl" result="Lost 72 Pounds" />
            <TestimonialCard quote="Every part of my life has improved — sleep, mood, energy. Gold Peptides made the difference." name="Sarah" result="Lost 40 Pounds" />
          </div>
        </div>
      </section>

      {/* ═══ 9. FAQ ═══ */}
      <section className="py-16 md:py-20 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#444444] uppercase tracking-wide" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "What is Gold Peptides, and how does it work?", a: "Gold Peptides is a personalized health platform that connects you with licensed providers to support your wellness goals. After an initial consultation, you'll receive a customized plan, which may include medications, lifestyle recommendations, and ongoing support." },
              { q: "Who are the providers at Gold Peptides?", a: "Our network comprises licensed healthcare professionals experienced in weight management and overall wellness. They are dedicated to guiding you through your journey with personalized care." },
              { q: "What if the prescribed medication isn't effective for me?", a: "If you find that the initial medication isn't yielding the desired results, our providers will reassess and adjust your treatment plan to better suit your needs." },
              { q: "What weight loss medications does Gold Peptides offer?", a: "Gold Peptides offers clinician-guided medical weight loss options that may include GLP-1 medications (and related therapies) based on your health history, goals, and eligibility. Your provider will recommend the most appropriate option after your consultation." },
              { q: "How soon will I have my first consultation?", a: "Typically, you'll have your initial consultation within a few days of signing up. This allows our providers to understand your goals and tailor a plan accordingly." },
              { q: "Is Gold Peptides available in my state?", a: "Gold Peptides operates across all 50 states, ensuring nationwide access to our services." },
              { q: "How do I get started with Gold Peptides?", a: "Begin by signing up on our website. You'll complete a health questionnaire, after which you'll be matched with a provider to initiate your personalized wellness plan." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-[#444444] text-left text-sm md:text-base" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-[#444444]/70 text-sm">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══ 10. FDA DISCLAIMER ═══ */}
      <section className="py-8 bg-[#f5f5f0] border-t border-[#444444]/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[11px] text-[#444444]/50 leading-relaxed">
            <strong>Disclaimer:</strong> Gold Peptides offers compounded GLP-1s exclusively from U.S. pharmacies. While these pharmacies are highly regulated, the FDA has not evaluated the medications for safety, quality, or efficacy. Compounded drug products are not approved or evaluated for safety, effectiveness, or quality by the FDA. Prescription required. Individual results may vary.
          </p>
        </div>
      </section>
    </main>
  );
}
