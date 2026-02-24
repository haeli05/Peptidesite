import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SaxendaPage() {
  return (
    <main className="flex min-h-screen flex-col">

      {/* ═══ 1. HERO ═══ */}
      <section className="relative bg-[#FFFEF0] pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left - Text */}
            <div>
              <Link href="/weight-loss" className="inline-flex items-center gap-2 text-sm text-[#444444]/60 hover:text-[#444444] transition mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                Back to Weight Loss
              </Link>
              <div className="inline-block border border-[#444444]/15 rounded-full px-4 py-1.5 mb-5">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Weight Loss</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#444444] mb-3 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Saxenda<span className="text-[#FFDD00]">.</span>
              </h1>
              <p className="text-sm text-[#444444]/50 mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>(liraglutide)</p>
              <p className="text-lg md:text-xl font-semibold text-[#444444] mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Daily GLP-1 injection for lasting results
              </p>
              <p className="text-[#444444]/70 text-base mb-6 leading-relaxed">
                Liraglutide injection that works by mimicking GLP-1 to help regulate appetite and food intake. Daily dosing for consistent support.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-1.5 bg-white border border-[#444444]/10 rounded-full px-4 py-2 text-sm text-[#444444]">
                  <svg className="w-4 h-4 text-[#FFDD00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Injectable
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-[#444444]/10 rounded-full px-4 py-2 text-sm text-[#444444]">
                  <svg className="w-4 h-4 text-[#FFDD00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Daily
                </span>
              </div>
              <Link href="/login">
                <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-sm px-10 py-6 font-bold rounded-lg uppercase tracking-wider" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                  Get Started
                </Button>
              </Link>
            </div>
            {/* Right - Product Image */}
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a454a_Weight-Loss.jpg"
                alt="Saxenda (liraglutide)"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-[#444444]/10" />

      {/* ═══ 2. WHAT IS SAXENDA ═══ */}
      <section className="py-16 md:py-24 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            What is Saxenda?
          </h2>
          <p className="text-[#444444]/70 text-base leading-relaxed mb-4">
            Saxenda (liraglutide) is an FDA-approved injectable medication for chronic weight management. It belongs to the GLP-1 receptor agonist class and works by mimicking the naturally occurring hormone GLP-1, which plays a key role in appetite regulation and food intake.
          </p>
          <p className="text-[#444444]/70 text-base leading-relaxed mb-4">
            Unlike once-weekly options, Saxenda is administered as a daily subcutaneous injection. This daily dosing provides consistent, around-the-clock appetite control, helping to reduce hunger and caloric intake throughout each day. Many patients appreciate the steady, predictable support that daily dosing offers.
          </p>
          <p className="text-[#444444]/70 text-base leading-relaxed">
            Saxenda is prescribed alongside a reduced-calorie diet and increased physical activity as part of a comprehensive weight management plan. Clinical trials have demonstrated that patients using liraglutide experience meaningful weight loss when combined with lifestyle modifications.
          </p>
        </div>
      </section>

      <Separator className="bg-[#444444]/10" />

      {/* ═══ 3. WHO IS SAXENDA FOR ═══ */}
      <section className="py-16 md:py-24 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Who is Saxenda for?
          </h2>
          <p className="text-[#444444]/70 text-base leading-relaxed mb-6">
            Saxenda is designed for adults who meet specific criteria for chronic weight management support:
          </p>
          <ul className="space-y-3">
            {[
              "Adults with a BMI of 30 or greater (obesity)",
              "Adults with a BMI of 27 or greater (overweight) who also have at least one weight-related health condition such as type 2 diabetes, high blood pressure, or high cholesterol",
              "Individuals who prefer a daily injection for more consistent appetite control throughout the day",
              "Those who have not achieved sufficient weight loss through diet and exercise alone",
              "Patients who want an established, well-studied GLP-1 medication with a proven safety profile",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#444444]/80 text-base">
                <svg className="w-5 h-5 text-[#FFDD00] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Separator className="bg-[#444444]/10" />

      {/* ═══ 4. HOW IT WORKS (3 Steps) ═══ */}
      <section className="py-16 md:py-24 bg-[#FFFEF0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block border border-[#444444]/15 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>How It Works</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Get Started in 3 Easy Steps
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Complete your online health assessment",
                desc: "Share your health history, current medications, and weight management goals through our secure intake form. A licensed Gold Peptides provider will evaluate whether Saxenda is the right fit for your needs.",
                image: "https://cdn.prod.website-files.com/680837d163525d9ff4a44785/68361a4d4ca098653e5baae1_important.jpg",
              },
              {
                step: "02",
                title: "Get a personalized prescription",
                desc: "If eligible, your provider will create a customized treatment plan with the appropriate Saxenda dosing schedule. Your prescription is tailored to your unique health profile and weight loss objectives.",
                image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4580_Provider-Writes-an-RX.jpg",
              },
              {
                step: "03",
                title: "Receive your medication at home",
                desc: "Once approved, your prescription is processed through our trusted network of licensed pharmacies and delivered directly to your doorstep quickly, securely, and discreetly.",
                image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4585_Box-V4.jpg",
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <img src={step.image} alt={step.title} className="w-full rounded-2xl mb-5 shadow-md aspect-[4/3] object-cover" />
                <span className="text-xs font-bold text-[#FFDD00] tracking-wider" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>STEP {step.step}</span>
                <h3 className="text-lg font-bold text-[#444444] mt-1 mb-2" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{step.title}</h3>
                <p className="text-[#444444]/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/login">
              <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-sm px-10 py-6 font-bold rounded-lg uppercase tracking-wider" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 5. FDA DISCLAIMER ═══ */}
      <section className="py-8 bg-[#f5f5f0] border-t border-[#444444]/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[11px] text-[#444444]/50 leading-relaxed">
            <strong>Disclaimer:</strong> Gold Peptides offers access to weight management medications through licensed healthcare providers. The information on this page is for educational purposes only and does not constitute medical advice. Saxenda (liraglutide) is a prescription medication. Only a licensed healthcare provider can determine if this medication is appropriate for you. Individual results may vary. All medications are dispensed by licensed pharmacies. Compounded drug products are not approved or evaluated for safety, effectiveness, or quality by the FDA. Prescription required.
          </p>
        </div>
      </section>

      {/* ═══ 6. BACK LINK ═══ */}
      <section className="py-6 bg-[#FFFEF0] border-t border-[#444444]/10">
        <div className="container mx-auto px-4 text-center">
          <Link href="/weight-loss" className="inline-flex items-center gap-2 text-sm font-semibold text-[#444444] hover:text-[#FFDD00] transition" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to All Weight Loss Medications
          </Link>
        </div>
      </section>
    </main>
  );
}
