import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#FFFEF0] to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#444444] mb-6" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-[#444444] mb-8 max-w-2xl mx-auto">
            We're here to help with any questions
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Email Us</h3>
                  <p className="text-[#444444]/80 mb-4">For general inquiries:</p>
                  <p className="text-[#FFDD00] font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>support@goldshealth.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Call Us</h3>
                  <p className="text-[#444444]/80 mb-4">Our support team is available 24/7:</p>
                  <p className="text-[#FFDD00] font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>1-800-GOLDS-HEALTH</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input type="text" className="w-full p-2 border rounded-md" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input type="text" className="w-full p-2 border rounded-md" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full p-2 border rounded-md" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea className="w-full p-2 border rounded-md h-32" placeholder="How can we help you?"></textarea>
                  </div>
                  <Button className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] w-full font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-[#FFFEF0]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Other Ways to Reach Us</h2>
            <p className="text-[#444444]/80 mb-4">
              For fastest response, we recommend using our 24/7 chat support or calling our support line.
            </p>
            <p className="text-[#444444]/80">
              Our business hours: Monday - Friday, 9AM - 6PM EST
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
