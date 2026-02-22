import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HairPage() {
  const products = [
    { name: "Finasteride", type: "Pill", description: "FDA-approved oral medication for male pattern hair loss." },
    { name: "Oral Minoxidil", type: "Pill", description: "Hair growth pill for stimulating hair follicles." },
    { name: "Finasteride & Minoxidil Spray", type: "Spray", description: "Combination topical treatment for enhanced results." },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#FFFEF0] to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Hair Growth
          </h1>
          <p className="text-xl md:text-2xl text-[#444444] mb-8 max-w-2xl mx-auto">
            Lasting solutions for fuller hair
          </p>
          <p className="text-lg text-[#444444] mb-8">Fight back where it's thinning up top</p>
          <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Get Started
          </Button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Hair Growth Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.name} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="text-xs">Hair</Badge>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Why Choose Gold's Health for Hair</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#333333] border-[#FFDD00]/20 text-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>FDA-Approved Treatments</h3>
                <p className="text-white/80">Proven medications for hair regrowth.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#333333] border-[#FFDD00]/20 text-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Personalized Plans</h3>
                <p className="text-white/80">Tailored treatment based on your specific needs.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#333333] border-[#FFDD00]/20 text-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Free Consultations</h3>
                <p className="text-white/80">Ongoing support from licensed providers.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FFFEF0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Regrow Your Hair Today</h2>
          <p className="text-lg text-[#444444]/80 mb-8 max-w-2xl mx-auto">
            Get started with our effective hair growth treatments.
          </p>
          <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Get Started
          </Button>
        </div>
      </section>
    </main>
  );
}
