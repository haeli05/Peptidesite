"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    { category: "Weight Loss", name: "Personalized GLP-1", type: "Injectable", badge: "40% OFF", href: "/weight-loss", explore: "/weight-loss", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a45bf_personal.png" },
    { category: "Weight Loss", name: "Ozempic", type: "Injectable", href: "/weight-loss/ozempic", explore: "/weight-loss/ozempic", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4574_66fb634a698ef6d6163eb2f9_Ozempic_20Product_20Card.png" },
    { category: "Weight Loss", name: "Zepbound", type: "Injectable", href: "/weight-loss/zepbound", explore: "/weight-loss/zepbound", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4575_66fb633016ae048b2c8e17b4_Zepbound_20Product_20Card.png" },
    { category: "Weight Loss", name: "Wegovy", type: "Injectable", href: "/weight-loss/wegovy", explore: "/weight-loss/wegovy", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/690b7e1518318e20ccb096d4_Wegovy-Product-Image.png" },
    { category: "Weight Loss", name: "Saxenda", type: "Injectable", href: "/weight-loss/saxenda", explore: "/weight-loss/saxenda", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/690b7e471bd57942fb417c07_Saxenda-Product-IMage.png" },
    { category: "Better Intimacy", name: "Tadalafil", type: "Pill", href: "/sexual-health/tadalafil", explore: "/sexual-health/tadalafil", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a453f_Pill-02.png" },
    { category: "Better Intimacy", name: "Sildenafil", type: "Pill", href: "/sexual-health/sildenafil", explore: "/sexual-health/sildenafil", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/6837545da3f8a696dfc0c176_Centered.png" },
    { category: "Better Intimacy", name: "Cialis", type: "Pill", href: "/sexual-health/cialis", explore: "/sexual-health/cialis", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683754d8dc5100b37fb149ba_Cialis-Centered.png" },
    { category: "Better Intimacy", name: "Viagra", type: "Pill", href: "/sexual-health/viagra", explore: "/sexual-health/viagra", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683755076ab8d6d4a3185e7d_Viagra-Centered.png" },
    { category: "Daily Health", name: "NAD+", type: "Injectable", href: "/daily-health/nad-injections", explore: "/daily-health/nad-injections", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a45b5_NAD.png" },
    { category: "Daily Health", name: "Sermorelin", type: "Injectable", href: "/daily-health/sermorelin", explore: "/daily-health/sermorelin", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a45b6_Sermorelin.png" },
    { category: "Daily Health", name: "Methylene Blue", type: "Pill", href: "/daily-health/methylene-blue", explore: "/daily-health/methylene-blue", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/6837553924148ddb0b5cf68b_Meth-centered.png" },
    { category: "Hair", name: "Finasteride", type: "Pill", href: "/hair/finasteride", explore: "/hair/finasteride", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/68375567d89a7b474e8dccde_Finasteride-Centered.png" },
    { category: "Hair", name: "Oral Minoxidil", type: "Pill", href: "/hair/oral-minoxidil", explore: "/hair/oral-minoxidil", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/6837559550597dda41065c07_Oral-Centered.png" },
    { category: "Hair", name: "Finasteride & Minoxidil Spray", type: "Spray", href: "/hair/finasteride-minoxidil-spray", explore: "/hair/finasteride-minoxidil-spray", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683760e0ea32d2ef21c6025b_Refills-Bottle-Product.png" },
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
          <div key={index} className="min-w-[280px] max-w-[280px] snap-start">
            <div
              className="relative rounded-2xl overflow-hidden h-[480px] flex flex-col justify-between p-5 group"
              style={{ backgroundImage: `url(${product.image})`, backgroundSize: "cover", backgroundPosition: "50% 0" }}
            >
              {/* Top - Labels */}
              <div className="flex flex-col gap-2">
                {product.badge && (
                  <div className="self-start bg-[#EF4049] text-white text-xs font-bold px-3 py-1 rounded-md" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                    {product.badge}
                  </div>
                )}
                <div className="flex gap-2">
                  <span className="bg-white/90 text-[#444444] text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-md">{product.category}</span>
                  <span className="bg-[#444444]/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">In Stock</span>
                </div>
                <h3 className="text-lg font-bold text-[#444444] mt-1" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{product.name}</h3>
                <p className="text-sm text-[#444444]/70">{product.type}</p>
              </div>

              {/* Bottom - Buttons */}
              <div className="flex gap-2">
                <Link href={product.href} className="flex-1">
                  <Button size="sm" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] w-full font-bold text-xs rounded-lg py-5" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Get Started</Button>
                </Link>
                <Link href={product.explore} className="flex-1">
                  <Button size="sm" variant="outline" className="w-full font-semibold text-xs bg-white hover:bg-white/90 border-[#444444]/20 rounded-lg py-5" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Explore</Button>
                </Link>
              </div>
            </div>
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

/* ─── FAQ Accordion (refills.com style) ─── */
function FAQAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-[#444444]/10 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-transparent border-none cursor-pointer"
      >
        <h3 className="text-sm md:text-base font-semibold text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
          {question}
        </h3>
        <div className="flex-shrink-0 w-5 h-5 text-[#444444] transition-transform duration-300" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
          <svg width="100%" height="100%" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M34 30V6H30V30H6V34H30V58H34V34H58V30H34Z" fill="currentColor" />
          </svg>
        </div>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "500px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-5 pb-4">
          <p className="text-[#444444]/70 text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function FAQAccordion() {
  const faqs = [
    { q: "What is Gold Peptides, and how does it work?", a: "Gold Peptides is a personalized health platform that connects you with licensed providers to support your wellness goals. After an initial consultation, you'll receive a customized plan, which may include medications, lifestyle recommendations, and ongoing support." },
    { q: "Who are the providers at Gold Peptides?", a: "Our network comprises licensed healthcare professionals experienced in weight management and overall wellness. They are dedicated to guiding you through your journey with personalized care." },
    { q: "What if the prescribed medication isn't effective for me?", a: "If you find that the initial medication isn't yielding the desired results, our providers will reassess and adjust your treatment plan to better suit your needs." },
    { q: "What weight loss medications does Gold Peptides offer?", a: "Gold Peptides offers clinician-guided medical weight loss options that may include GLP-1 medications (and related therapies) based on your health history, goals, and eligibility. Your provider will recommend the most appropriate option after your consultation." },
    { q: "How soon will I have my first consultation?", a: "Typically, you'll have your initial consultation within a few days of signing up. This allows our providers to understand your goals and tailor a plan accordingly." },
    { q: "Is Gold Peptides available in my state?", a: "Gold Peptides operates across all 50 states, ensuring nationwide access to our services." },
    { q: "How do I get started with Gold Peptides?", a: "Begin by signing up on our website. You'll complete a health questionnaire, after which you'll be matched with a provider to initiate your personalized wellness plan." },
  ];

  return (
    <>
      {faqs.map((faq, i) => (
        <FAQAccordionItem key={i} question={faq.q} answer={faq.a} />
      ))}
    </>
  );
}

/* ─── Blurred Tabs Section (refills.com style) ─── */
function BlurredTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Lose Weight", headline: "Shed the extra, feel extra good.", href: "/weight-loss", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a454a_Weight-Loss.jpg" },
    { label: "Perform Better", headline: "Turn up the heat — naturally.", href: "/sexual-health", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a454c_sex.jpg" },
    { label: "Regrow Hair", headline: "Fight back where it's thinning up top.", href: "/hair", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a454b_hair.jpg" },
    { label: "Anti-Aging", headline: "Glow up from the inside out.", href: "/daily-health", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a454e_Skin.jpg" },
    { label: "Daily Wellness", headline: "Your good days, on repeat.", href: "/daily-health", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a454f_happy.jpg" },
  ];

  const defaultImage = "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4549_banner-01.jpg";

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Left - Image */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
        {/* Default image */}
        <img
          src={defaultImage}
          alt="Gold Your Day"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: activeTab === -1 ? 1 : 0 }}
        />
        {/* Tab images */}
        {tabs.map((tab, i) => (
          <img
            key={i}
            src={tab.image}
            alt={tab.label}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: activeTab === i ? 1 : 0 }}
          />
        ))}
        {/* Blurred text overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-6 md:p-8 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
            <p className="text-white text-lg md:text-2xl font-bold leading-tight" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              {activeTab >= 0 ? tabs[activeTab].headline : "Gold Your Day"}
            </p>
          </div>
        </div>
      </div>

      {/* Right - Tabs */}
      <div>
        {/* Label */}
        <div className="inline-flex items-center gap-2 border border-[#444444]/15 rounded-full px-4 py-1.5 mb-8">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-[#FFDD00]" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6665 1.33073H10.3332C9.04651 1.33073 7.99984 2.3774 7.99984 3.66406V4.80073L5.90451 1.33006C5.66384 0.913396 5.23184 0.664062 4.75051 0.664062C4.26917 0.664062 3.83717 0.913396 3.59517 1.3314L0.180505 7.30673C-0.0614945 7.73006 -0.0601612 8.23473 0.184505 8.65673C0.429172 9.07873 0.866506 9.33073 1.35451 9.33073H3.52784C3.40184 9.7534 3.33317 10.2007 3.33317 10.6641C3.33317 13.2374 5.42717 15.3307 7.99984 15.3307C10.5725 15.3307 12.6665 13.2374 12.6665 10.6641C12.6665 10.2007 12.5985 9.7534 12.4718 9.33073H13.6665C14.9532 9.33073 15.9998 8.28406 15.9998 6.9974V3.66406C15.9998 2.3774 14.9532 1.33073 13.6665 1.33073Z" />
          </svg>
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Take Advantage</span>
        </div>

        {/* Tab links */}
        <div className="flex flex-col gap-2 mb-8">
          {tabs.map((tab, i) => (
            <Link
              key={tab.label}
              href={tab.href}
              onMouseEnter={() => setActiveTab(i)}
              onMouseLeave={() => setActiveTab(-1)}
              className="group block no-underline"
              style={{ textDecoration: "none" }}
            >
              <div className={`py-3 md:py-4 border-b border-[#444444]/10 transition-all ${activeTab === i ? "pl-3" : ""}`}>
                <h3
                  className={`text-2xl md:text-4xl font-bold transition-colors no-underline ${activeTab === i ? "text-[#FFDD00]" : "text-[#444444]"} group-hover:text-[#FFDD00]`}
                  style={{ fontFamily: "var(--font-oswald), sans-serif", textDecoration: "none" }}
                >
                  {tab.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <Link href="/login">
          <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-sm px-10 py-6 font-bold rounded-lg uppercase tracking-wider" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}

/* ─── Testimonial Slider (refills.com style) ─── */
function TestimonialSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
  };

  const testimonials = [
    { name: "Antonia", result: "Lost 32 lbs in 4 months", quote: "Gold Peptides changed my life. The process was so easy and the results speak for themselves. I finally feel confident in my own skin again." },
    { name: "Jacob", result: "Lost 28 lbs in 3 months", quote: "I was skeptical at first, but the doctors were incredible. They tailored everything to my needs and the weight just started coming off." },
    { name: "Mireya", result: "Lost 45 lbs in 6 months", quote: "After trying every diet out there, Gold Peptides was the first thing that actually worked. My energy levels are through the roof." },
    { name: "Cindy", result: "Lost 22 lbs in 2 months", quote: "The convenience of having everything delivered to my door made all the difference. No more pharmacy trips or waiting rooms." },
    { name: "Illiana", result: "Lost 38 lbs in 5 months", quote: "My doctor was amazed at my progress. Gold Peptides gave me the tools and support I needed to finally take control of my health." },
    { name: "Robert", result: "Lost 50 lbs in 7 months", quote: "As a busy dad, I needed something that fit my lifestyle. Gold Peptides made it simple — just follow the plan and watch the results." },
    { name: "Hannah", result: "Lost 19 lbs in 2 months", quote: "I love that everything is personalized. It's not a one-size-fits-all approach. My plan was designed specifically for me." },
    { name: "Mary", result: "Lost 41 lbs in 5 months", quote: "The customer support team is amazing. They answered all my questions and made me feel comfortable every step of the way." },
    { name: "Daryl", result: "Lost 35 lbs in 4 months", quote: "I've tried other telehealth services before but none compare to Gold Peptides. The quality of care is unmatched." },
    { name: "Jessica", result: "Lost 27 lbs in 3 months", quote: "Shipping was fast, the medication worked great, and I never had to leave my house. This is the future of healthcare." },
    { name: "Sarah", result: "Lost 30 lbs in 4 months", quote: "Gold Peptides helped me get my confidence back. I'm more active, more social, and happier than I've been in years." },
  ];

  return (
    <div className="relative">
      {/* Navigation arrows */}
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

      {/* Scrollable testimonial cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((t, i) => (
          <div key={i} className="min-w-[300px] max-w-[300px] snap-start">
            <div className="bg-[#FFFEF0] rounded-xl border border-[#444444]/10 p-6 h-full flex flex-col">
              {/* Star rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-[#FFDD00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <p className="text-[#444444]/70 text-sm leading-relaxed flex-1 mb-4">&ldquo;{t.quote}&rdquo;</p>
              {/* Author */}
              <div className="border-t border-[#444444]/10 pt-3">
                <p className="font-bold text-[#444444] text-sm" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{t.name}</p>
                <p className="text-xs text-[#FFDD00] font-bold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{t.result}</p>
              </div>
            </div>
          </div>
        ))}
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
      <section className="relative bg-[#FFFEF0] pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="container mx-auto px-4 text-center">
          {/* Label pill */}
          <div className="inline-flex items-center gap-2.5 border border-[#444444]/15 text-[#444444]/70 px-5 py-2 rounded-full mb-8">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"/>
              <path d="M20 20V17C20 15.3431 18.6569 14 17 14H7C5.34315 14 4 15.3431 4 17V20"/>
              <path d="M19 8V11M17.5 9.5H20.5"/>
            </svg>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Doctor-Trusted Care, Personalized for You</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-[#444444] mb-8 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Personalized GLP-1&apos;s<br />
            40% Off Sale
          </h1>

          <Link href="/login">
            <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-sm px-10 py-6 font-bold rounded-lg uppercase tracking-wider" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* ═══ 1b. CATEGORY CARDS + FEATURE TILES ═══ */}
      <section className="bg-[#FFFEF0] pb-10">
        <div className="container mx-auto px-4">
          {/* ═══ 2. CATEGORY CARDS ═══ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {[
              { title: "Weight Loss", subtitle: "Achieve your weight loss Goals", href: "/weight-loss", video: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a45f6_shutterstock_1109870429-transcode.mp4", poster: "https://cdn.prod.website-files.com/680837d163525d9ff4a44785/682e68c3383995b5be5d2553_shutterstock_1109870429-poster-00001.jpg", image: "" },
              { title: "Better Intimacy", subtitle: "Gain Confidence and Last Longer", href: "/sexual-health", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4538_sexual.jpg" },
              { title: "Daily Health", subtitle: "Become the Best version of yourself", href: "/daily-health", video: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a45f7_shutterstock_3417634001-transcode.mp4", poster: "https://cdn.prod.website-files.com/680837d163525d9ff4a44785/682e68cb37e18b31522dbe00_shutterstock_3417634001-poster-00001.jpg", image: "" },
              { title: "Hair Growth", subtitle: "Lasting solutions for fuller hair", href: "/hair", image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a454b_hair.jpg" },
            ].map((cat) => (
              <Link key={cat.title} href={cat.href} className="group">
                <div className="relative rounded-2xl overflow-hidden h-[320px] md:h-[460px] flex flex-col justify-end p-5 md:p-7 transition-all group-hover:shadow-2xl shadow-lg">
                  {"video" in cat && cat.video ? (
                    <video autoPlay loop muted playsInline poster={cat.poster} className="absolute inset-0 w-full h-full object-cover">
                      <source src={cat.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1 relative z-10" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{cat.title}</h3>
                  <p className="text-[11px] md:text-sm text-white/70 relative z-10">{cat.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Feature Tiles */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
            <div className="flex flex-col items-center text-center gap-2 py-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="28" className="text-[#444444]">
                <rect width="256" height="256" fill="none"/>
                <polygon points="128 160 176 216 80 216 128 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <path d="M56,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
              </svg>
              <p className="text-xs md:text-sm text-[#444444]">Premium Prescriptions<br /><strong>At The Lowest Prices</strong></p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 py-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="28" className="text-[#444444]">
                <rect width="256" height="256" fill="none"/>
                <line x1="184" y1="24" x2="232" y2="72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <line x1="128" y1="48" x2="208" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <path d="M140,60,50.34,149.66A8,8,0,0,0,48,155.31V208h52.69a8,8,0,0,0,5.65-2.34L196,116" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <line x1="98" y1="102" x2="124" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <line x1="74" y1="126" x2="100" y2="152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <line x1="168" y1="88" x2="208" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <line x1="48" y1="208" x2="24" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
              </svg>
              <p className="text-xs md:text-sm text-[#444444]">GLP-1s from <strong>$5/day</strong>, delivered fast</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 py-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="28" className="text-[#444444]">
                <rect width="256" height="256" fill="none"/>
                <path d="M184,80h42.58A8,8,0,0,1,234,85l14,35" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <line x1="24" y1="144" x2="184" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <circle cx="192" cy="192" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <circle cx="80" cy="192" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <line x1="168" y1="192" x2="104" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <path d="M184,120h64v64a8,8,0,0,1-8,8H216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <path d="M56,192H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184V169.37" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
              </svg>
              <p className="text-xs md:text-sm text-[#444444]"><strong>Free Shipping</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. SCROLLING BADGE CAROUSEL ═══ */}
      <section className="py-6 bg-[#FFFEF0] overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll-left gap-4" style={{ width: "max-content" }}>
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-4">
                {[
                  "Board Certified Physicians",
                  "FDA-Regulated Pharmacies",
                  "100% Online Process",
                  "Free & Discreet Shipping",
                  "Affordable Pricing",
                  "No Hidden Fees",
                  "No Insurance Required",
                ].map((item) => (
                  <div key={`${setIndex}-${item}`} className="border border-[#444444]/15 rounded-full px-5 py-2 whitespace-nowrap">
                    <span className="text-[#444444] text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. PRODUCT CAROUSEL ═══ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Personalized For You
          </h2>
          <ProductCarousel />
        </div>
      </section>

      {/* ═══ 5. BLURRED TABS SECTION ═══ */}
      <section className="py-16 md:py-24 bg-[#FFFEF0]">
        <div className="container mx-auto px-4">
          <BlurredTabs />
        </div>
      </section>

      {/* ═══ 6. DERMATOLOGIST / BENEFITS BENTO GRID ═══ */}
      <section className="py-16 md:py-24 bg-[#FFFEF0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]">
            {/* 1. Clinically Prescribed - tall left */}
            <div className="relative rounded-2xl overflow-hidden row-span-2 group">
              <img src="https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4587_doctor.jpg" alt="Licensed Professionals" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-7">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Clinically Prescribed By Licensed Professionals</h3>
                  <p className="text-white/70 text-sm mt-2">Free care and support from licensed providers nationwide.</p>
                </div>
                <Link href="/login">
                  <Button className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] font-bold text-sm px-6 py-5 rounded-lg uppercase tracking-wider w-fit" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Get Started</Button>
                </Link>
              </div>
            </div>

            {/* 2. 20% Weight Loss */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img src="https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a454a_Weight-Loss.jpg" alt="Weight Loss Results" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-end p-5 md:p-6">
                <h3 className="text-lg md:text-2xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>20% Weight<br />Loss In One Year</h3>
              </div>
            </div>

            {/* 3. Never Pay Memberships */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img src="https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a454f_happy.jpg" alt="No Memberships" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-end p-5 md:p-6">
                <h3 className="text-lg md:text-2xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Never Pay for Monthly Memberships or App Fees</h3>
              </div>
            </div>

            {/* 4. All Dosages Same Price */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img src="https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a454e_Skin.jpg" alt="Same Low Price" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-end p-5 md:p-6">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>All Dosages at the Same Low Price</h3>
                  <p className="text-white/70 text-xs mt-1">We don&apos;t charge you based on dosage changes.</p>
                </div>
              </div>
            </div>

            {/* 5. Free & Fast Shipping */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img src="https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a454d_anxiety.jpg" alt="Free Shipping" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-end p-5 md:p-6">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Free &amp; Fast Shipping</h3>
                  <p className="text-white/70 text-xs mt-1">Discreet, and quickly shipped to your front door</p>
                </div>
              </div>
            </div>

            {/* 6. 24/7 Support - tall right */}
            <div className="relative rounded-2xl overflow-hidden row-span-2 col-start-2 md:col-start-3 row-start-1 group hidden md:block">
              <img src="https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4549_banner-01.jpg" alt="Health Concierge" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-7">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Free 24/7 Support with our Health Concierge</h3>
                  <p className="text-white/70 text-sm mt-2">Manage all your goals and prescriptions in one place.</p>
                </div>
                <Link href="/login">
                  <Button className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] font-bold text-sm px-6 py-5 rounded-lg uppercase tracking-wider w-fit" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Get Started</Button>
                </Link>
              </div>
            </div>

            {/* 6b. 24/7 Support - mobile (not tall) */}
            <div className="relative rounded-2xl overflow-hidden group md:hidden col-span-2">
              <img src="https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4549_banner-01.jpg" alt="Health Concierge" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Free 24/7 Support with our Health Concierge</h3>
                <p className="text-white/70 text-xs mt-1">Manage all your goals and prescriptions in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. TESTIMONIALS SLIDER ═══ */}
      <section className="py-16 md:py-20 bg-white border-t border-[#444444]/10">
        <div className="container mx-auto px-4">
          <Separator className="bg-[#444444]/10 mb-10" />
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="inline-block border border-[#444444]/15 rounded-full px-4 py-1.5 mb-4">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Why Gold Peptides</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Hear From Gold Peptides Customers
              </h2>
            </div>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* ═══ 9. FAQ ═══ */}
      <section className="py-16 md:py-20 bg-[#FFFEF0]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Left - Header */}
            <div className="md:sticky md:top-32 md:self-start">
              <div className="inline-block border border-[#444444]/15 rounded-full px-4 py-1.5 mb-5">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#444444] leading-tight" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Gold Peptides Frequently Asked Questions
              </h2>
            </div>
            {/* Right - FAQ Accordions */}
            <div className="space-y-3">
              <FAQAccordion />
            </div>
          </div>
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
