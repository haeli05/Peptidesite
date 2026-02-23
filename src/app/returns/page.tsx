import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ReturnsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative bg-[#333333] pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Returns & Refunds
            </h1>
            <p className="text-lg md:text-xl text-white/70">
              Our return policy for medications and products
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg p-6 md:p-8 border border-[#444444]/10">
            <h2 className="text-2xl font-bold mb-8 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Return Policy</h2>
            <div className="space-y-8">
              {[
                { title: "Medications", desc: "Due to the nature of prescription medications, we cannot accept returns or offer refunds once a prescription has been dispensed. This is for your safety and complies with federal regulations." },
                { title: "Shipping Issues", desc: "If your package arrives damaged or is lost in transit, please contact our support team within 48 hours for a replacement or refund. We'll work with you to resolve the issue promptly." },
                { title: "Wrong Product", desc: "If you receive the wrong product, please contact us immediately. We'll arrange for the correct product to be shipped at no additional cost." },
                { title: "Cancellation", desc: "You may cancel your subscription at any time before your prescription is shipped. Once shipped, standard return policies apply." },
                { title: "How to Request a Return", desc: "To initiate a return or report an issue, please contact our support team at support@goldpeptides.com or call 1-800-GOLD-PEPTIDES. Please have your order number ready." },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{item.title}</h3>
                  <p className="text-[#444444]/70 text-sm">{item.desc}</p>
                  {i < 4 && <Separator className="mt-8 bg-[#444444]/10" />}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 md:p-8 border border-[#444444]/10 mt-6">
            <h2 className="text-2xl font-bold mb-4 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Refund Timeline</h2>
            <p className="text-[#444444]/70 text-sm">
              Refunds, when approved, are processed within 5-7 business days. The time it takes for the refund to appear in your account may vary depending on your financial institution.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#333333]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Need Help?</h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with any concerns.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-10 py-6 font-bold rounded-lg" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Contact Support
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
