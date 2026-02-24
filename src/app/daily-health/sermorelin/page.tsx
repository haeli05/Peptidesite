import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SermorelinPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-[#FFFEF0] pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-[#EF4049] uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Daily Health
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#444444] mb-4 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Sermorelin
              </h1>
              <p className="text-xl md:text-2xl text-[#444444]/70 mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Naturally boost your growth hormone levels
              </p>
              <p className="text-[#444444]/60 mb-2 text-sm">
                <span className="font-semibold text-[#444444]">Type:</span> Injectable
              </p>
              <p className="text-green-600 text-sm font-semibold mb-8">In Stock &bull; Free & Discreet Shipping</p>
              <Link href="/login">
                <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-10 py-6 font-bold rounded-lg" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a45f0_Daily-Health0Cons.jpg"
                alt="Sermorelin"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Sermorelin? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            What is Sermorelin?
          </h2>
          <Separator className="mb-8 bg-[#FFDD00] h-1 w-16" />
          <p className="text-lg text-[#444444]/70 leading-relaxed">
            Sermorelin is a growth hormone-releasing hormone (GHRH) analog that stimulates your body&apos;s natural production of growth hormone. Unlike synthetic HGH, Sermorelin works with your pituitary gland to boost growth hormone levels naturally. It supports muscle recovery, fat metabolism, sleep quality, and overall vitality, helping you feel and perform your best as you age.
          </p>
        </div>
      </section>

      {/* Who is it for? */}
      <section className="py-16 md:py-24 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Who is Sermorelin for?
          </h2>
          <Separator className="mb-8 bg-[#FFDD00] h-1 w-16" />
          <p className="text-lg text-[#444444]/70 mb-6">
            Adults experiencing age-related decline in energy, recovery, and body composition. Sermorelin may be right for you if you experience:
          </p>
          <ul className="space-y-4">
            {[
              "Declining energy levels and fatigue throughout the day",
              "Slow recovery after workouts or physical activity",
              "Difficulty maintaining lean muscle mass",
              "Increased body fat despite diet and exercise",
              "Poor sleep quality or difficulty staying asleep",
              "Desire to support natural growth hormone production",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#FFDD00] flex-shrink-0" />
                <span className="text-[#444444]/70 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-[#333333]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            How It Works
          </h2>
          <p className="text-center text-white/50 mb-14 max-w-2xl mx-auto">Three simple steps to get started with Sermorelin</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Complete Your Health Assessment",
                desc: "Answer a few questions about your health history and goals so our providers can personalize your treatment.",
                img: "https://cdn.prod.website-files.com/680837d163525d9ff4a44785/68361a4d4ca098653e5baae1_important.jpg",
              },
              {
                step: "2",
                title: "Provider Writes Your Prescription",
                desc: "A licensed provider reviews your assessment and prescribes the right Sermorelin protocol for you.",
                img: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4580_Provider-Writes-an-RX.jpg",
              },
              {
                step: "3",
                title: "Delivered to Your Door",
                desc: "Your Sermorelin injections are shipped free and discreetly directly to your home.",
                img: "https://cdn.prod.website-files.com/683079b098a24bdd710a41e6/683079b098a24bdd710a4585_Box-V4.jpg",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full aspect-[4/3] object-cover" />
                  <div className="absolute top-3 left-3 bg-[#FFDD00] text-[#444444] font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                    {s.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{s.title}</h3>
                <p className="text-white/50 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FDA Disclaimer */}
      <section className="py-10 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="border border-[#444444]/10 rounded-lg p-6 bg-white">
            <p className="text-xs text-[#444444]/40 leading-relaxed">
              <span className="font-semibold text-[#444444]/60">FDA Disclaimer:</span> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Gold Peptides products are prescribed by licensed healthcare providers. Individual results may vary. Always consult with a healthcare professional before starting any new treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-10 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 text-center">
          <Link href="/daily-health" className="text-[#444444]/60 hover:text-[#444444] transition-colors text-sm font-semibold inline-flex items-center gap-2">
            <span>&larr;</span> Back to Daily Health
          </Link>
        </div>
      </section>
    </main>
  );
}
