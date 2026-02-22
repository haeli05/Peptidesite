import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-emerald-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
            40% OFF - Sale Ends Soon
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Doctor-Trusted Care, <br className="hidden md:block" />
            Personalized for You
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Premium Prescriptions <strong>At The Lowest Prices</strong>
          </p>
          <p className="text-lg text-slate-600 mb-2">
            GLP-1s from $4/day, delivered fast
          </p>
          <p className="text-slate-500 mb-8">Free Shipping</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/weight-loss">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Weight Loss</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Achieve your weight loss goals with personalized GLP-1 treatments.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/sexual-health">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Better Intimacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Gain confidence and perform better with proven treatments.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/daily-health">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Daily Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Become the best version of yourself with anti-aging solutions.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/hair">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Hair Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Lasting solutions for fuller, healthier hair.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            <div>
              <p className="font-semibold text-sm">FDA-Regulated Pharmacies</p>
            </div>
            <div>
              <p className="font-semibold text-sm">100% Online Process</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Free & Discreet Shipping</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Affordable Pricing</p>
            </div>
            <div>
              <p className="font-semibold text-sm">No Hidden Fees</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Board Certified Physicians</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard
              category="Weight Loss"
              name="Personalized GLP-1"
              type="Injectable"
              badge="40% OFF"
            />
            <ProductCard
              category="Weight Loss"
              name="Ozempic"
              type="Injectable"
            />
            <ProductCard
              category="Weight Loss"
              name="Zepbound"
              type="Injectable"
            />
            <ProductCard
              category="Weight Loss"
              name="Wegovy"
              type="Injectable"
            />
            <ProductCard
              category="Weight Loss"
              name="Saxenda"
              type="Injectable"
            />
            <ProductCard
              category="Better Intimacy"
              name="Tadalafil"
              type="Pill"
            />
            <ProductCard
              category="Better Intimacy"
              name="Sildenafil"
              type="Pill"
            />
            <ProductCard
              category="Better Intimacy"
              name="Cialis"
              type="Pill"
            />
            <ProductCard
              category="Better Intimacy"
              name="Viagra"
              type="Pill"
            />
            <ProductCard
              category="Daily Health"
              name="NAD+"
              type="Injectable"
            />
            <ProductCard
              category="Daily Health"
              name="Sermorelin"
              type="Injectable"
            />
            <ProductCard
              category="Daily Health"
              name="Methylene Blue"
              type="Pill"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose PeptideSite</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              title="Clinically Prescribed"
              description="Free care and support from licensed providers nationwide."
            />
            <BenefitCard
              title="20% Weight Loss"
              description="Proven results in just one year with our personalized programs."
            />
            <BenefitCard
              title="No Membership Fees"
              description="Never pay for monthly memberships or app fees."
            />
            <BenefitCard
              title="All Dosages Same Price"
              description="We don't charge you based on dosage changes."
            />
            <BenefitCard
              title="Free Fast Shipping"
              description="Discreetly shipped to your front door quickly."
            />
            <BenefitCard
              title="24/7 Support"
              description="Free support with our Health Concierge team."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hear From Our Customers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="PeptideSite helped me get my energy back — I feel sharper, stronger, and finally excited to take on each day."
              name="Antonia"
              result="Lost 50 Pounds"
            />
            <TestimonialCard
              quote="Thanks to PeptideSite, I'm sleeping better, moving easier, and feeling like myself again."
              name="Jacob"
              result="Lost 80 Pounds"
            />
            <TestimonialCard
              quote="PeptideSite changed my relationship with food — no crash diets, no guilt, just steady, real progress."
              name="Mireya"
              result="Lost 52 Pounds"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is PeptideSite, and how does it work?</AccordionTrigger>
              <AccordionContent>
                PeptideSite is a personalized health platform that connects you with licensed providers to support your wellness goals. After an initial consultation, you'll receive a customized plan, which may include medications, lifestyle recommendations, and ongoing support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Who are the providers at PeptideSite?</AccordionTrigger>
              <AccordionContent>
                Our network comprises licensed healthcare professionals experienced in weight management and overall wellness. They are dedicated to guiding you through your journey with personalized care.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What if the prescribed medication isn't effective for me?</AccordionTrigger>
              <AccordionContent>
                If you find that the initial medication isn't yielding the desired results, our providers will reassess and adjust your treatment plan to better suit your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What weight loss medications does PeptideSite offer?</AccordionTrigger>
              <AccordionContent>
                PeptideSite offers clinician-guided medical weight loss options that may include GLP-1 medications (and related therapies) based on your health history, goals, and eligibility. Your provider will recommend the most appropriate option after your consultation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How soon will I have my first consultation?</AccordionTrigger>
              <AccordionContent>
                Typically, you'll have your initial consultation within a few days of signing up. This allows our providers to understand your goals and tailor a plan accordingly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Is PeptideSite available in my state?</AccordionTrigger>
              <AccordionContent>
                PeptideSite operates across all 50 states, ensuring nationwide access to our services.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards your health goals today. Our team is ready to help you succeed.
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
            Get Started Now
          </Button>
        </div>
      </section>
    </main>
  );
}

function ProductCard({ category, name, type, badge }: { category: string; name: string; type: string; badge?: string }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="text-xs">{category}</Badge>
          {badge && <Badge className="bg-red-500 text-white">{badge}</Badge>}
        </div>
        <CardTitle className="text-lg mt-2">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{type}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 flex-1">Get Started</Button>
        <Button size="sm" variant="outline" className="flex-1">Explore</Button>
      </CardFooter>
    </Card>
  );
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="bg-emerald-700 border-emerald-500 text-white">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-emerald-100">{description}</p>
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
        <p className="text-sm text-emerald-600">{result}</p>
      </CardContent>
    </Card>
  );
}
