import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative bg-[#333333] pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.1]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/70">
              We&apos;re here to help with any questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-14 md:py-20 bg-[#FFFEF0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-lg p-6 border border-[#444444]/10">
              <h3 className="text-xl font-bold mb-3 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Email Us</h3>
              <p className="text-[#444444]/60 mb-3 text-sm">For general inquiries:</p>
              <p className="text-[#444444] font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>support@goldpeptides.com</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[#444444]/10">
              <h3 className="text-xl font-bold mb-3 text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Call Us</h3>
              <p className="text-[#444444]/60 mb-3 text-sm">Our support team is available 24/7:</p>
              <p className="text-[#444444] font-semibold" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>1-800-GOLD-PEPTIDES</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 md:p-8 border border-[#444444]/10">
            <h3 className="text-xl font-bold mb-6 text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#444444]/70">First Name</label>
                  <input type="text" className="w-full p-2.5 border border-[#444444]/15 rounded-lg bg-[#FFFEF0] text-sm focus:outline-none focus:border-[#FFDD00]" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#444444]/70">Last Name</label>
                  <input type="text" className="w-full p-2.5 border border-[#444444]/15 rounded-lg bg-[#FFFEF0] text-sm focus:outline-none focus:border-[#FFDD00]" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-[#444444]/70">Email</label>
                <input type="email" className="w-full p-2.5 border border-[#444444]/15 rounded-lg bg-[#FFFEF0] text-sm focus:outline-none focus:border-[#FFDD00]" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-[#444444]/70">Message</label>
                <textarea className="w-full p-2.5 border border-[#444444]/15 rounded-lg bg-[#FFFEF0] text-sm h-32 focus:outline-none focus:border-[#FFDD00]" placeholder="How can we help you?"></textarea>
              </div>
              <Button className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] w-full font-bold rounded-lg" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-14 bg-[#333333]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Other Ways to Reach Us</h2>
          <p className="text-white/50 mb-2 text-sm">
            For fastest response, we recommend using our 24/7 chat support or calling our support line.
          </p>
          <p className="text-white/50 text-sm">
            Our business hours: Monday - Friday, 9AM - 6PM EST
          </p>
        </div>
      </section>
    </main>
  );
}
