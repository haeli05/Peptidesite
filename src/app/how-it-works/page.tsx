import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up online and complete your health profile. It only takes a few minutes to get started."
    },
    {
      number: "02",
      title: "Complete Your Consultation",
      description: "Answer questions about your health history and goals. Our licensed providers will review your information."
    },
    {
      number: "03",
      title: "Get Your Personalized Plan",
      description: "Within days, you'll receive a customized treatment plan tailored to your unique needs and goals."
    },
    {
      number: "04",
      title: "Receive Your Medication",
      description: "Your prescription is shipped discreetly and free to your door. Track your delivery every step of the way."
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "Connect with our Health Concierge anytime. Adjust your plan as needed with your provider."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#FFFEF0] to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            How Gold's Health Works
          </h1>
          <p className="text-xl md:text-2xl text-[#444444] mb-8 max-w-2xl mx-auto">
            Get started in 5 simple steps
          </p>
          <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Get Started
          </Button>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="mb-6 border-0 shadow-none">
                <CardContent className="flex gap-6 p-6">
                  <div className="text-4xl font-bold text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{step.number}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>{step.title}</h3>
                    <p className="text-[#444444]/80">{step.description}</p>
                  </div>
                </CardContent>
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
                <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>100% Online</h3>
                <p className="text-white/80">No in-person visits required. Everything done from home.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#333333] border-[#FFDD00]/20 text-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Licensed Providers</h3>
                <p className="text-white/80">Board-certified physicians available in all 50 states.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#333333] border-[#FFDD00]/20 text-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Affordable Pricing</h3>
                <p className="text-white/80">No hidden fees or membership charges.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FFFEF0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Ready to Get Started?</h2>
          <p className="text-lg text-[#444444]/80 mb-8 max-w-2xl mx-auto">
            Join thousands of others who have transformed their health with Gold's Health.
          </p>
          <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Get Started
          </Button>
        </div>
      </section>
    </main>
  );
}
