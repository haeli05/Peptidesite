import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DailyHealthPage() {
  const products = [
    { name: "NAD+", type: "Injectable", description: "Support cellular health and energy with NAD+ injections." },
    { name: "Sermorelin", type: "Injectable", description: "Growth hormone-releasing peptide for anti-aging and vitality." },
    { name: "Methylene Blue", type: "Pill", description: "Cognitive support and mitochondrial health supplement." },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#FFFEF0] to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Daily Health
          </h1>
          <p className="text-xl md:text-2xl text-[#444444] mb-8 max-w-2xl mx-auto">
            Become the Best version of yourself
          </p>
          <p className="text-lg text-[#444444] mb-8">Premium anti-aging and wellness treatments</p>
          <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Get Started
          </Button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Daily Health Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.name} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="text-xs">Daily Health</Badge>
                  </div>
                  <p className="text-xs text-green-600">In Stock</p>
                  <CardTitle className="text-lg mt-2">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{product.type}</p>
                  <p className="text-sm text-[#444444]/80 mt-2">{product.description}</p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] flex-1 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Get Started</Button>
                  <Button size="sm" variant="outline" className="flex-1">Explore</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#444444] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Why Choose Gold's Health</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#333333] border-[#FFDD00]/20 text-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Clinically Prescribed</h3>
                <p className="text-white/80">Free care and support from licensed providers.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#333333] border-[#FFDD00]/20 text-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Free 24/7 Support</h3>
                <p className="text-white/80">Health Concierge available around the clock.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#333333] border-[#FFDD00]/20 text-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Free & Fast Shipping</h3>
                <p className="text-white/80">Discreetly shipped to your front door.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FFFEF0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Start Your Wellness Journey</h2>
          <p className="text-lg text-[#444444]/80 mb-8 max-w-2xl mx-auto">
            Get started today and become the best version of yourself.
          </p>
          <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Get Started
          </Button>
        </div>
      </section>
    </main>
  );
}
