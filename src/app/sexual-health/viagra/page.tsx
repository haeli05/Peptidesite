import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ViagraPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-[#FFFEF0] pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-[#EF4049] font-semibold mb-3" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Better Intimacy
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-[#444444] mb-4 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Viagra <span className="text-2xl md:text-3xl font-normal text-[#444444]/60">(sildenafil)</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#444444]/70 mb-2" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                The original ED treatment, trusted worldwide
              </p>
              <div className="flex items-center gap-3 mt-4 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wide bg-[#444444]/10 text-[#444444] px-3 py-1 rounded-full">Pill</span>
                <span className="text-xs font-semibold uppercase tracking-wide bg-[#444444]/10 text-[#444444] px-3 py-1 rounded-full">As Needed</span>
                <span className="text-xs font-semibold text-green-600">In Stock</span>
              </div>
              <Link href="/login">
                <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-10 py-6 font-bold rounded-lg" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a454c_sex.jpg"
                alt="Viagra - ED Treatment"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Viagra? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            What is Viagra?
          </h2>
          <Separator className="mb-8 bg-[#FFDD00] h-1 w-16" />
          <p className="text-lg text-[#444444]/80 leading-relaxed mb-6">
            Viagra is the brand-name version of sildenafil and the world&apos;s most recognized ED medication. Since its introduction, Viagra has helped millions of men worldwide regain confidence and improve their intimate relationships.
          </p>
          <p className="text-lg text-[#444444]/80 leading-relaxed">
            Viagra takes effect in 30-60 minutes for reliable results. As a PDE5 inhibitor, it works by increasing blood flow to achieve and maintain firmer erections. It is taken as needed before sexual activity and has decades of clinical data supporting its safety and effectiveness.
          </p>
        </div>
      </section>

      {/* Who is it for? */}
      <section className="py-16 md:py-24 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Who is Viagra for?
          </h2>
          <Separator className="mb-8 bg-[#FFDD00] h-1 w-16" />
          <p className="text-lg text-[#444444]/80 mb-8">
            Viagra is designed for men who prefer the trusted brand-name option. It may be right for you if:
          </p>
          <ul className="space-y-4">
            {[
              "You want the original, brand-name ED medication trusted by millions",
              "You have difficulty achieving or maintaining an erection",
              "You prefer an as-needed treatment with a 30-60 minute onset",
              "You value the confidence of a globally recognized brand",
              "You are looking for a medication with an extensive clinical track record",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#FFDD00] flex-shrink-0" />
                <span className="text-[#444444]/80 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-[#333333] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            How It <span className="text-[#FFDD00]">Works</span>
          </h2>
          <p className="text-center text-white/60 mb-14 max-w-2xl mx-auto">
            Getting started is simple. Follow these three easy steps.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Complete Your Online Visit",
                desc: "Answer a few questions about your health and goals. It only takes a few minutes from the comfort of your home.",
                img: "https://cdn.prod.website-files.com/680837d163525d9ff4a44785/68361a4d4ca098653e5baae1_important.jpg",
              },
              {
                step: "02",
                title: "Provider Reviews & Prescribes",
                desc: "A licensed healthcare provider reviews your information and writes a prescription if appropriate.",
                img: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4580_Provider-Writes-an-RX.jpg",
              },
              {
                step: "03",
                title: "Delivered to Your Door",
                desc: "Your medication is shipped free and discreetly in plain packaging right to your doorstep.",
                img: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4585_Box-V4.jpg",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-52 object-cover" />
                  <span className="absolute top-3 left-3 bg-[#FFDD00] text-[#444444] font-bold text-sm px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                    Step {s.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                  {s.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FDA Disclaimer */}
      <section className="py-10 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="border border-[#444444]/10 rounded-lg p-6 bg-white">
            <p className="text-xs text-[#444444]/50 leading-relaxed">
              <strong className="text-[#444444]/70">FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Viagra (sildenafil) is a prescription medication and requires a consultation with a licensed healthcare provider. Individual results may vary. Always consult your physician before starting any new treatment. Gold Peptides does not provide medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-10 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 text-center">
          <Link href="/sexual-health" className="inline-flex items-center gap-2 text-[#444444] hover:text-[#FFDD00] transition-colors font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to All Better Intimacy Products
          </Link>
        </div>
      </section>
    </main>
  );
}
