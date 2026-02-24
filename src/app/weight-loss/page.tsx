"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

/* ─── FAQ Accordion Item ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-[#444444]/10 shadow-sm">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-transparent border-none cursor-pointer">
        <h3 className="text-sm md:text-base font-semibold text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{question}</h3>
        <div className="flex-shrink-0 w-5 h-5 text-[#444444] transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
          <svg width="100%" height="100%" viewBox="0 0 64 64" fill="currentColor"><path d="M34 30V6H30V30H6V34H30V58H34V34H58V30H34Z" /></svg>
        </div>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? "500px" : "0px", opacity: open ? 1 : 0 }}>
        <div className="px-5 pb-4"><p className="text-[#444444]/70 text-sm leading-relaxed">{answer}</p></div>
      </div>
    </div>
  );
}

/* ─── Testimonial Card ─── */
function TestimonialCard({ quote, name, result }: { quote: string; name: string; result: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-[#444444]/10 shadow-sm cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="px-5 py-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-[#444444] text-sm" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{name}</p>
            <p className="text-xs text-[#FFDD00] font-bold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{result}</p>
          </div>
          <div className="flex-shrink-0 w-4 h-4 text-[#444444] transition-transform duration-300 ml-4" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
            <svg width="100%" height="100%" viewBox="0 0 64 64" fill="currentColor"><path d="M34 30V6H30V30H6V34H30V58H34V34H58V30H34Z" /></svg>
          </div>
        </div>
        {open && (
          <>
            <Separator className="my-3 bg-[#FFDD00]/20" />
            <p className="text-[#444444]/70 text-sm italic">&ldquo;{quote}&rdquo;</p>
          </>
        )}
      </div>
    </div>
  );
}

export default function WeightLossPage() {
  return (
    <main className="flex min-h-screen flex-col">

      {/* ═══ 1. HERO ═══ */}
      <section className="relative bg-[#FFFEF0] pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left - Text */}
            <div>
              <div className="inline-block border border-[#444444]/15 rounded-full px-4 py-1.5 mb-5">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Weight Loss</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#444444] mb-5 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Personalized GLP-1<br />(Injection)
              </h1>
              <p className="text-[#444444]/70 text-base md:text-lg mb-6 leading-relaxed">
                Weight loss made easy with personalized prescriptions for GLP-1 weight loss medications clinically proven to curb appetite and deliver sustainable results.
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Lose up to 1.5% of your body fat per week",
                  "Free shipping",
                  "Lab tested for quality to promote patient safety",
                  "Get approved with this 3-min quiz, no insurance needed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[#444444]/80 text-sm">
                    <svg className="w-4 h-4 text-[#FFDD00] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#444444] font-bold text-lg mb-1" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Personalized GLP-1&apos;s for as low as <span className="text-[#FFDD00]">$5/Day</span>
              </p>
              <p className="text-[#444444]/50 text-xs mb-6">*Price shown applies to 12-month plan paid upfront or with buy now, pay later programs.</p>
              <Link href="/login">
                <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-sm px-10 py-6 font-bold rounded-lg uppercase tracking-wider" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                  Get Started
                </Button>
              </Link>
            </div>
            {/* Right - Product Image */}
            <div className="relative">
              <div className="absolute top-4 right-4 bg-[#EF4049] text-white text-xs font-bold px-3 py-1.5 rounded-full z-10" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>40% OFF</div>
              <img
                src="https://cdn.prod.website-files.com/680837d163525d9ff4a44785/682e6a76911cecb6d93db3a4_Personalized-GLP-1-Injection-Main-IMage.jpg"
                alt="Personalized GLP-1 Injection"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. QUALITY & SAFETY ═══ */}
      <section className="py-16 md:py-24 bg-[#FFFEF0] border-t border-[#444444]/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            How does Gold Peptides ensure quality and safety?
          </h2>
          <p className="text-[#444444]/70 text-base leading-relaxed">
            At Gold Peptides, your safety is our top priority. We partner exclusively with state licensed, FDA registered compounding pharmacies. Each compounded medication undergoes rigorous third party testing through accredited FDA and DEA registered laboratories to ensure consistent quality and safety. Every pharmacy partner is carefully vetted, and each batch of medication is thoroughly tested for purity and potency. Patients can request a Certificate of Analysis at any time to review detailed testing results for their prescription.
          </p>
        </div>
      </section>

      {/* ═══ 3. WHAT IS COMPOUNDED SEMAGLUTIDE ═══ */}
      <section className="py-16 md:py-24 bg-[#FFFEF0] border-t border-[#444444]/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            What is compounded semaglutide?
          </h2>
          <p className="text-[#444444]/70 text-base leading-relaxed">
            Compounded semaglutide (also known as compounded GLP-1) is a weight loss medication that uses the same active ingredient found in certain FDA approved treatments. It works by mimicking natural hormones that help regulate appetite and digestion, supporting effective weight loss when paired with healthy lifestyle habits. Each dose is tailored to the individual and compounded by a licensed pharmacy that adheres to FDA registration standards. After a consultation with one of Gold Peptides&apos; licensed healthcare providers, the medication is prescribed for self-injection once weekly.
          </p>
        </div>
      </section>

      {/* ═══ 4. WHO IS THIS FOR ═══ */}
      <section className="py-16 md:py-24 bg-[#FFFEF0] border-t border-[#444444]/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Who is Personalized GLP-1 for?
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                If you&apos;ve tried restrictive diets, dealt with persistent cravings, or you&apos;re ready for an evidence-based approach, Gold Peptides provides clinician-guided weight loss care built around proven treatments and measurable progress. Whether your goal is modest weight loss or a significant change, your plan is personalized to your health profile, monitored over time, and designed to fit into real life without guesswork.
              </p>
            </div>
            <div>
              <img
                src="https://cdn.prod.website-files.com/680837d163525d9ff4a44785/681f747785b83fc21fa876fc_Weight-Loss-Lifestyle.jpg"
                alt="Weight loss lifestyle"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. WHAT DOES IT DO (4 benefits) ═══ */}
      <section className="py-16 md:py-20 bg-[#FFFEF0] border-t border-[#444444]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#444444] mb-12" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            What does Personalized GLP-1 do?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { title: "Reduces Appetite", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" },
              { title: "Helps You Feel Full", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" },
              { title: "Controls Cravings", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" },
              { title: "Supports Real Weight Loss", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[#444444]/10 p-5 text-center shadow-sm">
                <div className="w-10 h-10 mx-auto mb-3 bg-[#FFDD00]/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FFDD00]" fill="currentColor" viewBox="0 0 24 24"><path d={item.icon} /></svg>
                </div>
                <h3 className="text-sm font-bold text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. TESTIMONIALS ═══ */}
      <section className="py-16 md:py-20 bg-[#FFFEF0] border-t border-[#444444]/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="inline-block border border-[#444444]/15 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Why Gold Peptides</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-[#444444] mb-10" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Hear From Gold Peptides Customers
          </h2>
          <div className="space-y-2.5">
            <TestimonialCard quote="Gold Peptides helped me get my energy back — I feel sharper, stronger, and finally excited to take on each day." name="Antonia" result="Lost 50 Pounds" />
            <TestimonialCard quote="Thanks to Gold Peptides, I'm sleeping better, moving easier, and feeling like myself again." name="Jacob" result="Lost 80 Pounds" />
            <TestimonialCard quote="Gold Peptides changed my relationship with food — no crash diets, no guilt, just steady, real progress." name="Mireya" result="Lost 52 Pounds" />
            <TestimonialCard quote="I never thought I could stick to something — Gold Peptides made it easy and sustainable." name="Cindy" result="Lost 120 Pounds" />
            <TestimonialCard quote="My clothes fit better, my joints don't ache anymore, and I actually look forward to being active!" name="Illiana" result="Lost 40 Pounds" />
            <TestimonialCard quote="I lost 75 pounds with Gold Peptides and gained so much more — confidence, freedom, and better health." name="Robert" result="Lost 75 Pounds" />
          </div>
        </div>
      </section>

      {/* ═══ 7. HOW IT WORKS (3 Steps) ═══ */}
      <section className="py-16 md:py-24 bg-[#FFFEF0] border-t border-[#444444]/10">
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
                title: "Start with a simple online survey",
                desc: "Tell us about your health history, lifestyle, and weight loss goals through our secure online intake form. A licensed Gold Peptides provider will review your information to make sure GLP-1 is the right fit for you.",
                image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/68361a4d4ca098653e5baae1_important.jpg",
              },
              {
                step: "02",
                title: "Personalized care, prescribed for you",
                desc: "If eligible, your provider will create a treatment plan tailored to your unique needs, with compounded GLP-1 medication prescribed to match your goals safely and effectively.",
                image: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4580_Provider-Writes-an-RX.jpg",
              },
              {
                step: "03",
                title: "Easy access to your medication",
                desc: "Once approved, your prescription is processed through our trusted network of licensed compounding pharmacies. Your medication is then shipped directly to your door — quickly, securely, and discreetly.",
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

      {/* ═══ 8. TRUST & QUALITY ═══ */}
      <section className="py-16 md:py-24 bg-[#FFFEF0] border-t border-[#444444]/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <img
                src="https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4587_doctor.jpg"
                alt="Doctor consultation"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="inline-block border border-[#444444]/15 rounded-full px-4 py-1.5 mb-4">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Trusted</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                GLP-1s — Backed By Science and Verified for Safety
              </h2>
              <div className="space-y-5">
                {[
                  { title: "Potency Test", desc: "Performed every 3-6 months to confirm each medication batch stays within +/-10% of the intended active ingredient concentration." },
                  { title: "Sterility Test", desc: "Ensures the medication is sterile and free of bacteria, mold, or other pathogens. Every batch must meet USP 797.1 sterility guidelines." },
                  { title: "pH Test", desc: "Checks the medication's acid/base levels to reduce irritation and ensure smooth, comfortable injections." },
                  { title: "Endotoxin Test", desc: "Screens for bacterial endotoxins. Each batch must fall within the safe thresholds defined by USP 85 to pass." },
                ].map((test) => (
                  <div key={test.title}>
                    <h4 className="text-sm font-bold text-[#444444] mb-1" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{test.title}</h4>
                    <p className="text-[#444444]/60 text-sm leading-relaxed">{test.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/login">
                  <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-sm px-10 py-6 font-bold rounded-lg uppercase tracking-wider" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9. MORE TESTIMONIALS ═══ */}
      <section className="py-16 md:py-20 bg-[#FFFEF0] border-t border-[#444444]/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="inline-block border border-[#444444]/15 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Testimonials</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-[#444444] mb-10" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Real Talk, Real Results
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Ethan L.", quote: "I've tried everything. This was the first time I saw real results without the usual crash." },
              { name: "Jordan T.", quote: "The personalized dosing made all the difference. I've lost weight without feeling starved or stressed." },
              { name: "Maria V.", quote: "I love that it's tailored to me. This isn't a fad — it's something I can actually stick to." },
              { name: "Sophie B.", quote: "My cravings are way down and I feel in control for the first time in years. It's a game changer." },
              { name: "Tadeusz H.", quote: "Weekly injections are super manageable. Way easier than anything I've done before — and it works." },
              { name: "Emily C.", quote: "I used to feel stuck. Now I feel like I'm finally moving in the right direction — physically and mentally." },
              { name: "Zoey H.", quote: "Nothing else worked for me. I'm down 18 pounds and my energy levels are up, too." },
              { name: "Julek C.", quote: "I was skeptical, but I've been pleasantly surprised. This has become a sustainable part of my routine." },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-xl border border-[#444444]/10 p-5 shadow-sm">
                <p className="text-[#444444]/70 text-sm italic mb-3">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-[#444444] text-sm font-bold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10. FAQ ═══ */}
      <section className="py-16 md:py-20 bg-[#FFFEF0] border-t border-[#444444]/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div className="md:sticky md:top-32 md:self-start">
              <div className="inline-block border border-[#444444]/15 rounded-full px-4 py-1.5 mb-5">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#444444] leading-tight" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Gold Peptides GLP-1 Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              <FAQItem question="What is Gold Peptides, and how does it work?" answer="Gold Peptides is a personalized health platform that connects you with licensed providers to support your wellness goals. After an initial consultation, you'll receive a customized plan, which may include medications, lifestyle recommendations, and ongoing support." />
              <FAQItem question="Who are the providers at Gold Peptides?" answer="Our network comprises licensed healthcare professionals experienced in weight management and overall wellness. They are dedicated to guiding you through your journey with personalized care." />
              <FAQItem question="What if the prescribed medication isn't effective for me?" answer="If you find that the initial medication isn't yielding the desired results, our providers will reassess and adjust your treatment plan to better suit your needs." />
              <FAQItem question="What weight loss medications does Gold Peptides offer?" answer="Gold Peptides offers clinician-guided medical weight loss options that may include GLP-1 medications (and related therapies) based on your health history, goals, and eligibility. Your provider will recommend the most appropriate option after your consultation." />
              <FAQItem question="How soon will I have my first consultation?" answer="Typically, you'll have your initial consultation within a few days of signing up. This allows our providers to understand your goals and tailor a plan accordingly." />
              <FAQItem question="Is Gold Peptides available in my state?" answer="Gold Peptides operates across all 50 states, ensuring nationwide access to our services." />
              <FAQItem question="How do I get started with Gold Peptides?" answer="Begin by signing up on our website. You'll complete a health questionnaire, after which you'll be matched with a provider to initiate your personalized wellness plan." />
              <FAQItem question="What is compounded semaglutide?" answer="Compounded semaglutide is a weight loss medication that uses the same active ingredient found in certain FDA approved treatments. It works by mimicking natural hormones that help regulate appetite and digestion, supporting effective weight loss when paired with healthy lifestyle habits." />
              <FAQItem question="Is GLP-1 medication safe?" answer="GLP-1 medications have been extensively studied and shown to be effective for weight management. All medications prescribed through Gold Peptides are compounded by licensed pharmacies and undergo rigorous testing for purity and potency." />
              <FAQItem question="How quickly will I see results?" answer="Results vary by individual, but many patients begin to notice changes within the first few weeks of treatment. Consistent use, combined with healthy lifestyle habits, typically leads to the best outcomes." />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 11. FDA DISCLAIMER ═══ */}
      <section className="py-8 bg-[#f5f5f0] border-t border-[#444444]/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[11px] text-[#444444]/50 leading-relaxed">
            <strong>Disclaimer:</strong> Gold Peptides offers compounded GLP-1s exclusively from U.S. pharmacies. While these pharmacies are highly regulated, the FDA has not evaluated the medications for safety, quality, or efficacy. Compounded drug products are not approved or evaluated for safety, effectiveness, or quality by the FDA. Prescription required. The assessment provided on the Gold Peptides website does not create a clinician-patient relationship and is intended for informational purposes only. Individual results may vary.
          </p>
        </div>
      </section>
    </main>
  );
}
