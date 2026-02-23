import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Online Survey",
      description: "Complete a simple online survey about your health history and goals. A licensed provider will review your information and may order lab tests if necessary."
    },
    {
      number: "02",
      title: "Personalized Treatment Plan",
      description: "If eligible, your provider will create a treatment plan tailored to your unique needs, with compounded GLP-1 medication prescribed accordingly."
    },
    {
      number: "03",
      title: "Medication Delivery",
      description: "Once approved, your prescription is processed through our trusted network of licensed compounding pharmacies and shipped discreetly to your address."
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative bg-[#333333] pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              How Does Gold Peptides Work?
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8">
              Get started in 3 easy steps
            </p>
            <Link href="/login">
              <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-10 py-6 font-bold rounded-lg" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 md:py-20 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-14 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Getting Started Is Simple
          </h2>
          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={i}>
                <div className="flex gap-6 items-start">
                  <div className="text-4xl md:text-5xl font-bold text-[#FFDD00] leading-none" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{step.number}</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{step.title}</h3>
                    <p className="text-[#444444]/60">{step.description}</p>
                  </div>
                </div>
                {i < steps.length - 1 && <Separator className="mt-10 bg-[#444444]/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-[#333333] text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-14 text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Why Choose <span className="text-[#FFDD00]">Gold Peptides</span>
          </h2>
          <div className="space-y-10">
            {[
              { title: "100% Online", desc: "No in-person visits required. Everything done from home." },
              { title: "Licensed Providers", desc: "Board-certified physicians available in all 50 states." },
              { title: "Affordable Pricing", desc: "No hidden fees or membership charges." },
            ].map((b, i) => (
              <div key={i}>
                <h3 className="text-xl md:text-2xl font-bold text-[#FFDD00] mb-2" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{b.title}</h3>
                <p className="text-white/60">{b.desc}</p>
                {i < 2 && <Separator className="mt-10 bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Support */}
      <section className="py-16 md:py-20 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Ongoing Support</h2>
          <p className="text-[#444444]/60 mb-8">
            After approval, you&apos;ll have access to your care team for ongoing support. Your provider can adjust your treatment plan as needed, and our Health Concierge is available 24/7.
          </p>
          <Link href="/login">
            <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-10 py-6 font-bold rounded-lg" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
