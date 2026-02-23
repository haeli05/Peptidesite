import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative bg-[#333333] pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              About Gold Peptides
            </h1>
            <p className="text-lg md:text-xl text-white/70">
              Your trusted partner in personalized healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Our Mission</h2>
              <p className="text-[#444444]/70 text-lg leading-relaxed">
                Gold Peptides is dedicated to providing accessible, affordable healthcare solutions to help you achieve your wellness goals. We believe everyone deserves personalized care that&apos;s convenient and confidential.
              </p>
            </div>
            <Separator className="bg-[#444444]/10" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Our Approach</h2>
              <p className="text-[#444444]/70 text-lg leading-relaxed">
                We connect you with licensed healthcare providers who create personalized treatment plans tailored to your unique needs. Our 100% online process makes it easy to get the care you need from the comfort of your home.
              </p>
            </div>
            <Separator className="bg-[#444444]/10" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Why Choose Us</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Licensed Providers", desc: "Board-certified physicians in all 50 states" },
                  { title: "Affordable Pricing", desc: "No hidden fees or membership costs" },
                  { title: "Discreet Shipping", desc: "Free, plain packaging delivery" },
                  { title: "24/7 Support", desc: "Health Concierge available anytime" },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-lg p-5 border border-[#444444]/10">
                    <h3 className="font-bold mb-1 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{item.title}</h3>
                    <p className="text-[#444444]/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#333333]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Ready to Get Started?</h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their health with Gold Peptides.
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
