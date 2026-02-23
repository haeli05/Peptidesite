import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function DailyHealthPage() {
  const products = [
    { name: "NAD+", type: "Injectable", description: "Support cellular health and energy with NAD+ injections." },
    { name: "Sermorelin", type: "Injectable", description: "Growth hormone-releasing peptide for anti-aging and vitality." },
    { name: "Methylene Blue", type: "Pill", description: "Cognitive support and mitochondrial health supplement." },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative bg-[#333333] pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Daily Health
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-2">
              Become the Best version of yourself
            </p>
            <p className="text-white/80 text-lg mb-1">Premium anti-aging and wellness treatments</p>
            <p className="text-white/40 text-sm mb-8">Free & Discreet Shipping</p>
            <Link href="/login">
              <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-10 py-6 font-bold rounded-lg" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14 md:py-20 bg-[#FFFEF0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Daily Health Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <Card key={product.name} className="hover:shadow-lg transition-shadow border border-transparent hover:border-[#FFDD00]/40 bg-white">
                <CardHeader className="pb-2">
                  <Badge variant="outline" className="text-[10px] font-semibold uppercase tracking-wide w-fit">Daily Health</Badge>
                  <p className="text-[11px] text-green-600 font-semibold mt-1">In Stock</p>
                  <CardTitle className="text-base mt-1.5" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{product.type}</p>
                  <p className="text-sm text-[#444444]/70 mt-2">{product.description}</p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] flex-1 font-bold text-xs" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Get Started</Button>
                  <Button size="sm" variant="outline" className="flex-1 text-xs font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Explore</Button>
                </CardFooter>
              </Card>
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
              { title: "Clinically Prescribed", desc: "Free care and support from licensed providers." },
              { title: "Free 24/7 Support", desc: "Health Concierge available around the clock." },
              { title: "Free & Fast Shipping", desc: "Discreetly shipped to your front door." },
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Start Your Wellness Journey</h2>
          <p className="text-[#444444]/60 mb-8 max-w-2xl mx-auto">
            Get started today and become the best version of yourself.
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
