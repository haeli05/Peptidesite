import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Gold's Gym Styling */}
      <section className="relative bg-gradient-to-b from-[#FFFEF0] to-white py-20 md:py-32" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-[#EF4049]/10 text-[#EF4049] hover:bg-[#EF4049]/20 text-sm font-semibold px-4 py-1">
            40% OFF - Sale Ends In: 00 Days 00 Hours 00 Minutes 00 Seconds
          </Badge>
          <Link href="/">
            <div className="flex justify-center mb-6">
              <span className="text-5xl md:text-7xl font-bold text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>GOLD'S HEALTH</span>
            </div>
          </Link>
          
          {/* Navigation Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/weight-loss" className="text-[#444444] font-medium hover:text-[#FFDD00] font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Weight Loss</Link>
            <Link href="/sexual-health" className="text-[#444444] font-medium hover:text-[#FFDD00] font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Better Intimacy</Link>
            <Link href="/daily-health" className="text-[#444444] font-medium hover:text-[#FFDD00] font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Daily Health</Link>
            <Link href="/hair" className="text-[#444444] font-medium hover:text-[#FFDD00] font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Hair Growth</Link>
            <Link href="/how-it-works" className="text-[#444444] font-medium hover:text-[#FFDD00] font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>How It Works</Link>
            <Link href="/login" className="text-[#444444] font-medium hover:text-[#FFDD00] font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Login</Link>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Doctor-Trusted Care, <br className="hidden md:block" />
            Personalized for You
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFDD00] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Personalized GLP-1's <br />
            <span className="text-[#EF4049]">40% Off</span> Sale
          </h2>
          <p className="text-xl md:text-2xl text-[#444444] mb-8 max-w-2xl mx-auto">
            Premium Prescriptions <strong>At The Lowest Prices</strong>
          </p>
          <p className="text-lg text-[#444444] mb-2">
            GLP-1s from $4/day, delivered fast
          </p>
          <p className="text-[#444444]/60 mb-8">Free Shipping</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/weight-loss">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Weight Loss</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Achieve your weight loss goals</p>
                  <p className="text-sm text-[#FFDD00] mt-2 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>View All Weight Loss Products →</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/sexual-health">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Better Intimacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Gain Confidence and Last Longer</p>
                  <p className="text-sm text-[#FFDD00] mt-2 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>View All Better Intimacy Products →</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/daily-health">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Daily Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Become the Best version of yourself</p>
                  <p className="text-sm text-[#FFDD00] mt-2 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>View All Daily Health Products →</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/hair">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Hair Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Lasting solutions for fuller hair</p>
                  <p className="text-sm text-[#FFDD00] mt-2 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>View All Hair Growth Products →</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-[#444444] border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            <div>
              <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>FDA-Regulated Pharmacies</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>100% Online Process</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Free & Discreet Shipping</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Affordable Pricing</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>No Hidden Fees</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Board Certified Physicians</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Featured Products</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard
              category="Weight Loss"
              name="Personalized GLP-1"
              type="Injectable"
              badge="40% OFF"
              inStock={true}
            />
            <ProductCard
              category="Weight Loss"
              name="Ozempic"
              type="Injectable"
              inStock={true}
            />
            <ProductCard
              category="Weight Loss"
              name="Zepbound"
              type="Injectable"
              inStock={true}
            />
            <ProductCard
              category="Weight Loss"
              name="Wegovy"
              type="Injectable"
              inStock={true}
            />
            <ProductCard
              category="Weight Loss"
              name="Saxenda"
              type="Injectable"
              inStock={true}
            />
            <ProductCard
              category="Better Intimacy"
              name="Tadalafil"
              type="Pill"
              inStock={true}
            />
            <ProductCard
              category="Better Intimacy"
              name="Sildenafil"
              type="Pill"
              inStock={true}
            />
            <ProductCard
              category="Better Intimacy"
              name="Cialis"
              type="Pill"
              inStock={true}
            />
            <ProductCard
              category="Better Intimacy"
              name="Viagra"
              type="Pill"
              inStock={true}
            />
            <ProductCard
              category="Daily Health"
              name="NAD+"
              type="Injectable"
              inStock={true}
            />
            <ProductCard
              category="Daily Health"
              name="Sermorelin"
              type="Injectable"
              inStock={true}
            />
            <ProductCard
              category="Daily Health"
              name="Methylene Blue"
              type="Pill"
              inStock={true}
            />
            <ProductCard
              category="Hair"
              name="Finasteride"
              type="Pill"
              inStock={true}
            />
            <ProductCard
              category="Hair"
              name="Oral Minoxidil"
              type="Pill"
              inStock={true}
            />
            <ProductCard
              category="Hair"
              name="Finasteride & Minoxidil Spray"
              type="Spray"
              inStock={true}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section - Gold's Gym Dark */}
      <section className="py-16 bg-[#444444] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Personalized For You</h2>
          <p className="text-center text-white/80 mb-12" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>40% OFF</p>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              title="Clinically Prescribed By Licensed Professionals"
              description="Free care and support from licensed providers nationwide."
            />
            <BenefitCard
              title="20% Weight Loss In One Year"
              description="Proven results with our personalized programs."
            />
            <BenefitCard
              title="Never Pay for Monthly Memberships or App Fees"
              description="Transparent pricing with no hidden costs."
            />
            <BenefitCard
              title="All Dosages at the Same Low Price"
              description="We don't charge you based on dosage changes."
            />
            <BenefitCard
              title="Free & Fast Shipping"
              description="Discreetly shipped to your front door quickly."
            />
            <BenefitCard
              title="Free 24/7 Support with our Health Concierge"
              description="Manage all your goals and prescriptions in one place."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#FFFEF0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Hear From Gold's Health Customers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Gold's Health helped me get my energy back — I feel sharper, stronger, and finally excited to take on each day."
              name="Antonia"
              result="Lost 50 Pounds"
            />
            <TestimonialCard
              quote="Thanks to Gold's Health, I'm sleeping better, moving easier, and feeling like myself again."
              name="Jacob"
              result="Lost 80 Pounds"
            />
            <TestimonialCard
              quote="Gold's Health changed my relationship with food — no crash diets, no guilt, just steady, real progress."
              name="Mireya"
              result="Lost 52 Pounds"
            />
            <TestimonialCard
              quote="I never thought I could stick to something — Gold's Health made it easy and sustainable."
              name="Cindy"
              result="Lost 120 Pounds"
            />
            <TestimonialCard
              quote="My clothes fit better, my joints don't ache anymore, and I actually look forward to being active!"
              name="Illiana"
              result="Lost 40 Pounds"
            />
            <TestimonialCard
              quote="I lost 75 pounds with Gold's Health and gained so much more — confidence, freedom, and better health."
              name="Robert"
              result="Lost 75 Pounds"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FFFEF0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Ready to Get Started?</h2>
          <p className="text-lg text-[#444444]/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards your health goals today. Our team is ready to help you succeed.
          </p>
          <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Get Started
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Gold's Health Frequently Asked Questions</h2>
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

      {/* Footer */}
      <footer className="bg-[#444444] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>GOLD'S HEALTH</h3>
              <p className="text-white/80">Premium Prescriptions at The Lowest Prices</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Products</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/weight-loss" className="hover:text-[#FFDD00]">Weight Loss</Link></li>
                <li><Link href="/daily-health" className="hover:text-[#FFDD00]">Daily Health</Link></li>
                <li><Link href="/hair" className="hover:text-[#FFDD00]">Hair Growth</Link></li>
                <li><Link href="/how-it-works" className="hover:text-[#FFDD00]">How It Works</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Company & Terms</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/about" className="hover:text-[#FFDD00]">About</Link></li>
                <li><Link href="/faq" className="hover:text-[#FFDD00]">FAQs</Link></li>
                <li><Link href="/returns" className="hover:text-[#FFDD00]">Returns</Link></li>
                <li><Link href="/contact" className="hover:text-[#FFDD00]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Terms</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/terms-conditions" className="hover:text-[#FFDD00]">Terms & Conditions</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-[#FFDD00]">Privacy Policy</Link></li>
                <li><Link href="/hipaa-notice" className="hover:text-[#FFDD00]">HIPAA Notice</Link></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-white/20" />
          <p className="text-center text-white/60" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>© GOLD'S HEALTH 2025, ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </main>
  );
}

function ProductCard({ category, name, type, badge, inStock }: { category: string; name: string; type: string; badge?: string; inStock?: boolean }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="text-xs">{category}</Badge>
          {badge && <Badge className="bg-[#EF4049] text-white">{badge}</Badge>}
        </div>
        {inStock && <p className="text-xs text-green-600">In Stock</p>}
        <CardTitle className="text-lg mt-2">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{type}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] flex-1 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Get Started</Button>
        <Button size="sm" variant="outline" className="flex-1">Explore</Button>
      </CardFooter>
    </Card>
  );
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="bg-[#333333] border-[#FFDD00]/20 text-white">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{title}</h3>
        <p className="text-white/80">{description}</p>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ quote, name, result }: { quote: string; name: string; result: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-lg italic mb-4">"{quote}"</p>
        <Separator className="my-4" />
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-[#FFDD00] font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{result}</p>
      </CardContent>
    </Card>
  );
}
