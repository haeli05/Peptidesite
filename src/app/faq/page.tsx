import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    { q: "What is Gold Peptides, and how does it work?", a: "Gold Peptides is a personalized health platform that connects you with licensed providers to support your wellness goals. After an initial consultation, you'll receive a customized plan, which may include medications, lifestyle recommendations, and ongoing support." },
    { q: "Who are the providers at Gold Peptides?", a: "Our network comprises licensed healthcare professionals experienced in weight management and overall wellness. They are dedicated to guiding you through your journey with personalized care." },
    { q: "What if the prescribed medication isn't effective for me?", a: "If you find that the initial medication isn't yielding the desired results, our providers will reassess and adjust your treatment plan to better suit your needs." },
    { q: "What weight loss medications does Gold Peptides offer?", a: "Gold Peptides offers clinician-guided medical weight loss options that may include GLP-1 medications (and related therapies) based on your health history, goals, and eligibility. Your provider will recommend the most appropriate option after your consultation." },
    { q: "How soon will I have my first consultation?", a: "Typically, you'll have your initial consultation within a few days of signing up. This allows our providers to understand your goals and tailor a plan accordingly." },
    { q: "Is Gold Peptides available in my state?", a: "Gold Peptides operates across all 50 states, ensuring nationwide access to our services." },
    { q: "How do I get started with Gold Peptides?", a: "Begin by signing up on our website. You'll complete a health questionnaire, after which you'll be matched with a provider to initiate your personalized wellness plan." },
    { q: "What is the cost of treatment?", a: "Our pricing is transparent with no hidden fees. GLP-1 treatments start at $4/day with free shipping. All dosages are available at the same low price." },
    { q: "Is my information kept confidential?", a: "Yes, we take privacy seriously. All your health information is protected under HIPAA regulations and our strict privacy policy." },
    { q: "Can I cancel my subscription at any time?", a: "Yes, you can cancel your subscription at any time with no penalties or hidden fees." },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative bg-[#333333] pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-white/70">
              Find answers to common questions about Gold Peptides
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#333333]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Still Have Questions?</h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us anytime.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-10 py-6 font-bold rounded-lg" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
