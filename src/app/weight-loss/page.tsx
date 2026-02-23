import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function WeightLossPage() {
  const products = [
    { name: "Personalized GLP-1", type: "Injectable", badge: "40% OFF", description: "Tailored GLP-1 treatment plan based on your unique health profile and goals." },
    { name: "Ozempic", type: "Injectable", description: "Once-weekly GLP-1 injection for type 2 diabetes and weight management." },
    { name: "Zepbound", type: "Injectable", description: "FDA-approved injectable medication for chronic weight management." },
    { name: "Wegovy", type: "Injectable", description: "Weekly injection for adults with obesity or overweight with weight-related conditions." },
    { name: "Saxenda", type: "Injectable", description: "Daily injection for long-term weight management." },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative bg-[#333333] pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[#EF4049] text-white text-xs font-bold">40% OFF - Sale Ends Soon</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Weight Loss Programs
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-2">
              Achieve your weight loss goals with personalized GLP-1 treatments
            </p>
            <p className="text-white/80 text-lg mb-1">
              GLP-1s from <strong className="text-[#FFDD00]">$4/day</strong>, delivered fast
            </p>
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
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Weight Loss Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <Card key={product.name} className="hover:shadow-lg transition-shadow border border-transparent hover:border-[#FFDD00]/40 bg-white">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="text-[10px] font-semibold uppercase tracking-wide">Weight Loss</Badge>
                    {product.badge && <Badge className="bg-[#EF4049] text-white text-[10px] font-bold">{product.badge}</Badge>}
                  </div>
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
            Why Choose <span className="text-[#FFDD00]">Gold Peptides</span> for Weight Loss
          </h2>
          <div className="space-y-10">
            {[
              { title: "Clinically Prescribed", desc: "Free care and support from licensed providers nationwide." },
              { title: "20% Weight Loss In One Year", desc: "Proven results with our personalized programs." },
              { title: "No Membership Fees", desc: "Never pay for monthly memberships or app fees." },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Ready to Start Your Weight Loss Journey?</h2>
          <p className="text-[#444444]/60 mb-8 max-w-2xl mx-auto">
            Get started today and achieve your weight loss goals with personalized care.
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
