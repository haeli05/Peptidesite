import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Gold's Health, and how does it work?",
      answer: "Gold's Health is a personalized health platform that connects you with licensed providers to support your wellness goals. After an initial consultation, you'll receive a customized plan, which may include medications, lifestyle recommendations, and ongoing support."
    },
    {
      question: "Who are the providers at Gold's Health?",
      answer: "Our network comprises licensed healthcare professionals experienced in weight management and overall wellness. They are dedicated to guiding you through your journey with personalized care."
    },
    {
      question: "What if the prescribed medication isn't effective for me?",
      answer: "If you find that the initial medication isn't yielding the desired results, our providers will reassess and adjust your treatment plan to better suit your needs."
    },
    {
      question: "What weight loss medications does Gold's Health offer?",
      answer: "Gold's Health offers clinician-guided medical weight loss options that may include GLP-1 medications (and related therapies) based on your health history, goals, and eligibility. Your provider will recommend the most appropriate option after your consultation."
    },
    {
      question: "How soon will I have my first consultation?",
      answer: "Typically, you'll have your initial consultation within a few days of signing up. This allows our providers to understand your goals and tailor a plan accordingly."
    },
    {
      question: "Is Gold's Health available in my state?",
      answer: "Gold's Health operates across all 50 states, ensuring nationwide access to our services."
    },
    {
      question: "How do I get started with Gold's Health?",
      answer: "Begin by signing up on our website. You'll complete a health questionnaire, after which you'll be matched with a provider to initiate your personalized wellness plan."
    },
    {
      question: "What is the cost of treatment?",
      answer: "Our pricing is transparent with no hidden fees. GLP-1 treatments start at $4/day with free shipping. All dosages are available at the same low price."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Yes, we take privacy seriously. All your health information is protected under HIPAA regulations and our strict privacy policy."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time with no penalties or hidden fees."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#FFFEF0] to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-[#444444] mb-8 max-w-2xl mx-auto">
            Find answers to common questions about Gold's Health
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-[#444444]/80">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FFFEF0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Still Have Questions?</h2>
          <p className="text-lg text-[#444444]/80 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us anytime.
          </p>
          <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Contact Us
          </Button>
        </div>
      </section>
    </main>
  );
}
