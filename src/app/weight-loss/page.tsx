import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#FFFEF0] to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-[#EF4049]/10 text-[#EF4049] hover:bg-[#EF4049]/20 text-sm font-semibold px-4 py-1">
            40% OFF - Sale Ends Soon
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Weight Loss Programs
          </h1>
          <p className="text-xl md:text-2xl text-[#444444] mb-8 max-w-2xl mx-auto">
            Achieve your weight loss goals with personalized GLP-1 treatments
          </p>
          <p className="text-lg text-[#444444] mb-2">
            GLP-1s from $4/day, delivered fast
          </p>
          <p className="text-[#444444]/60 mb-8">Free Shipping</p>
          <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Get Started
          </Button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Weight Loss Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.name} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="text-xs">Weight Loss</Badge>
                    {product.badge && <Badge className="bg-[#EF4049] text-white">{product.badge}</Badge>}
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
          <h2 className="text-3xl font-bold text-center mb-12 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Why Choose Gold's Health for Weight Loss</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#333333] border-[#FFDD00]/20 text-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Clinically Prescribed</h3>
                <p className="text-white/80">Free care and support from licensed providers nationwide.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#333333] border-[#FFDD00]/20 text-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>20% Weight Loss In One Year</h3>
                <p className="text-white/80">Proven results with our personalized programs.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#333333] border-[#FFDD00]/20 text-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>No Membership Fees</h3>
                <p className="text-white/80">Never pay for monthly memberships or app fees.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FFFEF0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Ready to Start Your Weight Loss Journey?</h2>
          <p className="text-lg text-[#444444]/80 mb-8 max-w-2xl mx-auto">
            Get started today and achieve your weight loss goals with personalized care.
          </p>
          <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Get Started
          </Button>
        </div>
      </section>
    </main>
  );
}
