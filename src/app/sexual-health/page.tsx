import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function SexualHealthPage() {
  const products = [
    { name: "Sildenafil", type: "Pill", description: "The most popular erectile dysfunction medication, known as the little blue pill." },
    { name: "Tadalafil", type: "Pill", description: "Long-lasting ED medication that can work for up to 36 hours." },
    { name: "Viagra", type: "Pill", description: "Brand-name medication for treating erectile dysfunction." },
    { name: "Cialis", type: "Pill", description: "Extended-duration ED medication for spontaneity." },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative bg-[#333333] pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Better Intimacy
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-2">
              Gain Confidence and Last Longer
            </p>
            <p className="text-white/80 text-lg mb-1">Premium ED medications at affordable prices</p>
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
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Better Intimacy Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <Card key={product.name} className="hover:shadow-lg transition-shadow border border-transparent hover:border-[#FFDD00]/40 bg-white">
                <CardHeader className="pb-2">
                  <Badge variant="outline" className="text-[10px] font-semibold uppercase tracking-wide w-fit">Better Intimacy</Badge>
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
              { title: "100% Online Process", desc: "Complete consultation from the comfort of your home." },
              { title: "Free & Discreet Shipping", desc: "Delivered in plain packaging to your door." },
              { title: "Board Certified Physicians", desc: "Licensed healthcare professionals to guide your care." },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Ready to Improve Your Intimacy?</h2>
          <p className="text-[#444444]/60 mb-8 max-w-2xl mx-auto">
            Get started today with our easy online consultation.
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
