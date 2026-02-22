import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ReturnsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#FFFEF0] to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Returns & Refunds
          </h1>
          <p className="text-xl md:text-2xl text-[#444444] mb-8 max-w-2xl mx-auto">
            Our return policy for medications and products
          </p>
        </div>
      </section>

      {/* Returns Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Return Policy</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Medications</h3>
                    <p className="text-[#444444]/80">
                      Due to the nature of prescription medications, we cannot accept returns or offer refunds once a prescription has been dispensed. This is for your safety and complies with federal regulations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Shipping Issues</h3>
                    <p className="text-[#444444]/80">
                      If your package arrives damaged or is lost in transit, please contact our support team within 48 hours for a replacement or refund. We'll work with you to resolve the issue promptly.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Wrong Product</h3>
                    <p className="text-[#444444]/80">
                      If you receive the wrong product, please contact us immediately. We'll arrange for the correct product to be shipped at no additional cost.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Cancellation</h3>
                    <p className="text-[#444444]/80">
                      You may cancel your subscription at any time before your prescription is shipped. Once shipped, standard return policies apply.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>How to Request a Return</h3>
                    <p className="text-[#444444]/80">
                      To initiate a return or report an issue, please contact our support team at support@goldshealth.com or call 1-800-GOLDS-HEALTH. Please have your order number ready.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Refund Timeline</h2>
                <p className="text-[#444444]/80 mb-4">
                  Refunds, when approved, are processed within 5-7 business days. The time it takes for the refund to appear in your account may vary depending on your financial institution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FFFEF0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Need Help?</h2>
          <p className="text-lg text-[#444444]/80 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with any concerns.
          </p>
          <Button size="lg" className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] text-lg px-8 font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Contact Support
          </Button>
        </div>
      </section>
    </main>
  );
}
