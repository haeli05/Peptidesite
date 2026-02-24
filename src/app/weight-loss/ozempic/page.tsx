import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function OzempicPage() {
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
                Ozempic<span className="text-[#FFDD00]">.</span>
              </h1>
              <p className="text-sm text-[#444444]/50 mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>(semaglutide)</p>
              <p className="text-lg md:text-xl font-semibold text-[#444444] mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Clinically proven GLP-1 for weight management
              </p>
              <p className="text-[#444444]/70 text-base mb-6 leading-relaxed">
                Semaglutide injection that helps regulate appetite and blood sugar. Originally approved for type 2 diabetes, widely used for weight management.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-1.5 bg-white border border-[#444444]/10 rounded-full px-4 py-2 text-sm text-[#444444]">
                  <svg className="w-4 h-4 text-[#FFDD00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Injectable
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-[#444444]/10 rounded-full px-4 py-2 text-sm text-[#444444]">
                  <svg className="w-4 h-4 text-[#FFDD00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Once Weekly
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
                src="https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4577_Weight-Loss-Banner-02.jpg"
                alt="Ozempic (semaglutide)"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-[#444444]/10" />

      {/* ═══ 2. WHAT IS OZEMPIC ═══ */}
      <section className="py-16 md:py-24 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            What is Ozempic?
          </h2>
          <p className="text-[#444444]/70 text-base leading-relaxed mb-4">
            Ozempic (semaglutide) is a GLP-1 receptor agonist that was originally developed and FDA-approved for the treatment of type 2 diabetes. It works by mimicking the natural hormone GLP-1, which plays a critical role in regulating blood sugar levels, appetite, and digestion.
          </p>
          <p className="text-[#444444]/70 text-base leading-relaxed mb-4">
            Due to its powerful appetite-suppressing effects, Ozempic has become widely recognized for its ability to support significant weight loss. Semaglutide slows gastric emptying, helping you feel fuller for longer, while also reducing cravings and overall caloric intake.
          </p>
          <p className="text-[#444444]/70 text-base leading-relaxed">
            Administered as a once-weekly subcutaneous injection, Ozempic offers a convenient dosing schedule. It is typically prescribed alongside lifestyle modifications including a balanced diet and regular physical activity for optimal results.
          </p>
        </div>
      </section>

      <Separator className="bg-[#444444]/10" />

      {/* ═══ 3. WHO IS OZEMPIC FOR ═══ */}
      <section className="py-16 md:py-24 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Who is Ozempic for?
          </h2>
          <p className="text-[#444444]/70 text-base leading-relaxed mb-6">
            Ozempic may be a suitable option for adults looking for clinically proven weight management support:
          </p>
          <ul className="space-y-3">
            {[
              "Adults seeking clinically proven GLP-1 therapy for weight management",
              "Individuals with type 2 diabetes who also want to manage their weight",
              "Those who have struggled to lose weight through diet and exercise alone",
              "Patients looking for a once-weekly injectable that fits into a busy lifestyle",
              "Adults who want appetite regulation and blood sugar control in one medication",
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
                desc: "Share your health history, current medications, and weight management goals through our secure intake form. A licensed Gold Peptides provider will evaluate whether Ozempic is a good fit for you.",
                image: "https://cdn.prod.website-files.com/680837d163525d9ff4a44785/68361a4d4ca098653e5baae1_important.jpg",
              },
              {
                step: "02",
                title: "Get a personalized prescription",
                desc: "If eligible, your provider will craft a personalized treatment plan with the right Ozempic dosage for your health profile and goals. Every prescription is tailored to your unique needs.",
                image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4580_Provider-Writes-an-RX.jpg",
              },
              {
                step: "03",
                title: "Receive your medication at home",
                desc: "Once your prescription is ready, it is processed through our network of licensed pharmacies and shipped directly to your doorstep quickly, securely, and discreetly.",
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
            <strong>Disclaimer:</strong> Gold Peptides offers access to weight management medications through licensed healthcare providers. The information on this page is for educational purposes only and does not constitute medical advice. Ozempic (semaglutide) is a prescription medication. Only a licensed healthcare provider can determine if this medication is appropriate for you. Individual results may vary. All medications are dispensed by licensed pharmacies. Compounded drug products are not approved or evaluated for safety, effectiveness, or quality by the FDA. Prescription required.
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
