"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 6, minutes: 33, seconds: 24 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-flex gap-1">
      <span>{String(timeLeft.days).padStart(2, '0')}</span>
      <span>Days</span>
      <span>{String(timeLeft.hours).padStart(2, '0')}</span>
      <span>Hours</span>
      <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
      <span>Min</span>
      <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
      <span>Sec</span>
    </span>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Top Banner */}
      <div className="bg-[#444444] text-white py-3">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-4">
          <Link href="/flat-pricing" className="font-bold hover:text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            40% OFF - SALE ENDS IN:
          </Link>
          <div className="flex items-center gap-2">
            <div className="bg-[#EF4049] text-white font-bold px-2 py-1 rounded text-sm" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              <CountdownBanner />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Matching refills.com */}
      <section className="relative bg-gradient-to-b from-[#333333] to-[#444444] py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="text-[#FFDD00] text-sm font-bold tracking-wider" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              DOCTOR-TRUSTED CARE, PERSONALIZED FOR YOU
            </span>
          </div>
          
          <Link href="/">
            <div className="flex justify-center mb-6">
              <span className="text-5xl md:text-7xl font-bold text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>GOLD'S HEALTH</span>
            </div>
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Personalized GLP-1's <span className="text-[#EF4049]">40% Off</span> Sale
          </h1>
          <p className="text-xl md:text-2xl text-white mb-2 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Premium Prescriptions <strong>At The Lowest Prices</strong>
          </p>
          <p className="text-lg text-white/80 mb-2">
            GLP-1s from $4/day, delivered fast
          </p>
          <p className="text-white/60 mb-8">Free Shipping</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-bold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section - Larger cards like refills */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/weight-loss" className="group">
              <div className="border-2 border-transparent hover:border-[#FFDD00] rounded-lg p-6 transition-all bg-gradient-to-br from-[#FFFEF0] to-white">
                <CardTitle className="text-2xl text-[#444444] group-hover:text-[#FFDD00] transition-colors" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Weight Loss</CardTitle>
                <p className="text-muted-foreground mt-2">Achieve your weight loss goals</p>
                <p className="text-sm text-[#FFDD00] mt-3 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>View All Weight Loss Products →</p>
              </div>
            </Link>
            <Link href="/sexual-health" className="group">
              <div className="border-2 border-transparent hover:border-[#FFDD00] rounded-lg p-6 transition-all bg-gradient-to-br from-[#FFFEF0] to-white">
                <CardTitle className="text-2xl text-[#444444] group-hover:text-[#FFDD00] transition-colors" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Better Intimacy</CardTitle>
                <p className="text-muted-foreground mt-2">Gain Confidence and Last Longer</p>
                <p className="text-sm text-[#FFDD00] mt-3 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>View All Better Intimacy Products →</p>
              </div>
            </Link>
            <Link href="/daily-health" className="group">
              <div className="border-2 border-transparent hover:border-[#FFDD00] rounded-lg p-6 transition-all bg-gradient-to-br from-[#FFFEF0] to-white">
                <CardTitle className="text-2xl text-[#444444] group-hover:text-[#FFDD00] transition-colors" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Daily Health</CardTitle>
                <p className="text-muted-foreground mt-2">Become the Best version of yourself</p>
                <p className="text-sm text-[#FFDD00] mt-3 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>View All Daily Health Products →</p>
              </div>
            </Link>
            <Link href="/hair" className="group">
              <div className="border-2 border-transparent hover:border-[#FFDD00] rounded-lg p-6 transition-all bg-gradient-to-br from-[#FFFEF0] to-white">
                <CardTitle className="text-2xl text-[#444444] group-hover:text-[#FFDD00] transition-colors" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Hair Growth</CardTitle>
                <p className="text-muted-foreground mt-2">Lasting solutions for fuller hair</p>
                <p className="text-sm text-[#FFDD00] mt-3 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>View All Hair Growth Products →</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Bar - Dark like refills */}
      <section className="py-6 bg-[#333333]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center">
            <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>FDA-REGULATED PHARMACIES</p>
            <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>100% ONLINE PROCESS</p>
            <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>FREE & DISCREET SHIPPING</p>
            <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>AFFORDABLE PRICING</p>
            <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>NO HIDDEN FEES</p>
            <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>BOARD CERTIFIED PHYSICIANS</p>
          </div>
        </div>
      </section>

      {/* Products Section - Better layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Featured Products</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard category="Weight Loss" name="Personalized GLP-1" type="Injectable" badge="40% OFF" inStock={true} />
            <ProductCard category="Weight Loss" name="Ozempic" type="Injectable" inStock={true} />
            <ProductCard category="Weight Loss" name="Zepbound" type="Injectable" inStock={true} />
            <ProductCard category="Weight Loss" name="Wegovy" type="Injectable" inStock={true} />
            <ProductCard category="Weight Loss" name="Saxenda" type="Injectable" inStock={true} />
            <ProductCard category="Better Intimacy" name="Tadalafil" type="Pill" inStock={true} />
            <ProductCard category="Better Intimacy" name="Sildenafil" type="Pill" inStock={true} />
            <ProductCard category="Better Intimacy" name="Cialis" type="Pill" inStock={true} />
            <ProductCard category="Better Intimacy" name="Viagra" type="Pill" inStock={true} />
            <ProductCard category="Daily Health" name="NAD+" type="Injectable" inStock={true} />
            <ProductCard category="Daily Health" name="Sermorelin" type="Injectable" inStock={true} />
            <ProductCard category="Daily Health" name="Methylene Blue" type="Pill" inStock={true} />
            <ProductCard category="Hair" name="Finasteride" type="Pill" inStock={true} />
            <ProductCard category="Hair" name="Oral Minoxidil" type="Pill" inStock={true} />
            <ProductCard category="Hair" name="Finasteride & Minoxidil Spray" type="Spray" inStock={true} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#333333] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>PERSONALIZED FOR YOU</h2>
          <p className="text-center text-white/80 mb-12 text-xl" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>40% OFF</p>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard title="Clinically Prescribed By Licensed Professionals" description="Free care and support from licensed providers nationwide." />
            <BenefitCard title="20% Weight Loss In One Year" description="Proven results with our personalized programs." />
            <BenefitCard title="Never Pay for Monthly Memberships or App Fees" description="Transparent pricing with no hidden costs." />
            <BenefitCard title="All Dosages at the Same Low Price" description="We don't charge you based on dosage changes." />
            <BenefitCard title="Free & Fast Shipping" description="Discreetly shipped to your front door quickly." />
            <BenefitCard title="Free 24/7 Support with our Health Concierge" description="Manage all your goals and prescriptions in one place." />
          </div>
        </div>
      </section>

      {/* Testimonials Section - 10 like refills */}
      <section className="py-16 bg-[#FFFEF0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>HEAR FROM GOLD'S HEALTH CUSTOMERS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard quote="Gold's Health helped me get my energy back — I feel sharper, stronger, and finally excited to take on each day." name="Antonia" result="Lost 50 Pounds" />
            <TestimonialCard quote="Thanks to Gold's Health, I'm sleeping better, moving easier, and feeling like myself again." name="Jacob" result="Lost 80 Pounds" />
            <TestimonialCard quote="Gold's Health changed my relationship with food — no crash diets, no guilt, just steady, real progress." name="Mireya" result="Lost 52 Pounds" />
            <TestimonialCard quote="I never thought I could stick to something — Gold's Health made it easy and sustainable." name="Cindy" result="Lost 120 Pounds" />
            <TestimonialCard quote="My clothes fit better, my joints don't ache anymore, and I actually look forward to being active!" name="Illiana" result="Lost 40 Pounds" />
            <TestimonialCard quote="I lost 75 pounds with Gold's Health and gained so much more — confidence, freedom, and better health." name="Robert" result="Lost 75 Pounds" />
            <TestimonialCard quote="My blood pressure dropped, my stress went down, and my energy shot up — all thanks to Gold's Health." name="Hannah" result="Lost 70 Pounds" />
            <TestimonialCard quote="I used to feel stuck — now, with Gold's Health, my health is moving in the right direction every single day." name="Mary" result="Lost 40 Pounds" />
            <TestimonialCard quote="I'm not winded after climbing stairs anymore. That alone is worth everything Gold's Health helped me achieve." name="Daryl" result="Lost 72 Pounds" />
            <TestimonialCard quote="Every part of my life has improved — sleep, mood, energy. Gold's Health made the difference." name="Sarah" result="Lost 40 Pounds" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FFFEF0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>READY TO GET STARTED?</h2>
          <p className="text-lg text-[#444444]/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards your health goals today. Our team is ready to help you succeed.
          </p>
          <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-bold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Get Started
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>GOLD'S HEALTH FREQUENTLY ASKED QUESTIONS</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>What is Gold's Health, and how does it work?</AccordionTrigger>
              <AccordionContent>
                Gold's Health is a personalized health platform that connects you with licensed providers to support your wellness goals. After an initial consultation, you'll receive a customized plan, which may include medications, lifestyle recommendations, and ongoing support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Who are the providers at Gold's Health?</AccordionTrigger>
              <AccordionContent>
                Our network comprises licensed healthcare professionals experienced in weight management and overall wellness. They are dedicated to guiding you through your journey with personalized care.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>What if the prescribed medication isn't effective for me?</AccordionTrigger>
              <AccordionContent>
                If you find that the initial medication isn't yielding the desired results, our providers will reassess and adjust your treatment plan to better suit your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>What weight loss medications does Gold's Health offer?</AccordionTrigger>
              <AccordionContent>
                Gold's Health offers clinician-guided medical weight loss options that may include GLP-1 medications (and related therapies) based on your health history, goals, and eligibility. Your provider will recommend the most appropriate option after your consultation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>How soon will I have my first consultation?</AccordionTrigger>
              <AccordionContent>
                Typically, you'll have your initial consultation within a few days of signing up. This allows our providers to understand your goals and tailor a plan accordingly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Is Gold's Health available in my state?</AccordionTrigger>
              <AccordionContent>
                Gold's Health operates across all 50 states, ensuring nationwide access to our services.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FDA Disclaimer */}
      <section className="py-8 bg-[#FFFEF0] border-t">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs text-[#444444]/60">
            <strong>Disclaimer:</strong> Gold's Health offers compounded GLP-1s exclusively from U.S. pharmacies. While these pharmacies are highly regulated, the FDA has not evaluated the medications for safety, quality, or efficacy. Compounded drug products are not approved or evaluated for safety, effectiveness, or quality by the FDA. Prescription required.
          </p>
        </div>
      </section>

      {/* Footer with Newsletter */}
      <footer className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>GOLD'S HEALTH</h3>
              <p className="text-white/80 text-sm mb-4">Premium Prescriptions at The Lowest Prices</p>
              {/* Newsletter Signup */}
              <div>
                <p className="text-sm font-semibold mb-2" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>SUBSCRIBE FOR OUR NEWSLETTER</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white placeholder:text-white/40"
                  />
                  <Button className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] font-bold px-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                    →
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>PRODUCTS</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><Link href="/weight-loss" className="hover:text-[#FFDD00]">Weight Loss</Link></li>
                <li><Link href="/daily-health" className="hover:text-[#FFDD00]">Daily Health</Link></li>
                <li><Link href="/hair" className="hover:text-[#FFDD00]">Hair Growth</Link></li>
                <li><Link href="/how-it-works" className="hover:text-[#FFDD00]">How It Works</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>COMPANY & TERMS</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><Link href="/about" className="hover:text-[#FFDD00]">About</Link></li>
                <li><Link href="/faq" className="hover:text-[#FFDD00]">FAQs</Link></li>
                <li><Link href="/returns" className="hover:text-[#FFDD00]">Returns</Link></li>
                <li><Link href="/contact" className="hover:text-[#FFDD00]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>TERMS</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><Link href="/terms-conditions" className="hover:text-[#FFDD00]">Terms & Conditions</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-[#FFDD00]">Privacy Policy</Link></li>
                <li><Link href="/hipaa-notice" className="hover:text-[#FFDD00]">HIPAA Notice</Link></li>
                <li><Link href="/telehealth-notice" className="hover:text-[#FFDD00]">Telehealth Notice</Link></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-white/10" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-white/60 text-sm" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>© GOLD'S HEALTH 2025, ALL RIGHTS RESERVED</p>
            <p className="text-center text-white/40 text-xs">Compounded in the USA</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProductCard({ category, name, type, badge, inStock }: { category: string; name: string; type: string; badge?: string; inStock?: boolean }) {
  return (
    <Card className="hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#FFDD00]">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="text-xs font-semibold">{category}</Badge>
          {badge && <Badge className="bg-[#EF4049] text-white font-bold">{badge}</Badge>}
        </div>
        {inStock && <p className="text-xs text-green-600 font-semibold">In Stock</p>}
        <CardTitle className="text-lg mt-2" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{type}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] flex-1 font-bold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Get Started</Button>
        <Button size="sm" variant="outline" className="flex-1 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Explore</Button>
      </CardFooter>
    </Card>
  );
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="bg-[#444444] border-[#FFDD00]/20 text-white">
      <CardContent className="pt-6">
        <h3 className="text-lg font-bold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{title}</h3>
        <p className="text-white/80">{description}</p>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ quote, name, result }: { quote: string; name: string; result: string }) {
  return (
    <Card className="bg-white">
      <CardContent className="pt-6">
        <p className="text-lg italic mb-4 text-[#444444]">"{quote}"</p>
        <Separator className="my-4 bg-[#FFDD00]/20" />
        <p className="font-bold text-[#444444]">{name}</p>
        <p className="text-sm text-[#FFDD00] font-bold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{result}</p>
      </CardContent>
    </Card>
  );
}
