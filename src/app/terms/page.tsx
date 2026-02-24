import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative bg-[#FFFEF0] pt-28 pb-14 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1
              className="text-4xl md:text-5xl font-bold text-[#444444] mb-3 leading-[1.1]"
              style={{ fontFamily: "var(--font-oswald), sans-serif" }}
            >
              Terms &amp; Conditions
            </h1>
            <p className="text-lg text-[#444444]/60">
              Effective Date: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10">
            {/* Introduction */}
            <div>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                Welcome to Gold Peptides. These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the Gold Peptides website at goldpeptides.com and all related services (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 1 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                1. Acceptance of Terms
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                By creating an account, completing a health questionnaire, making a purchase, or otherwise using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our{" "}
                <Link href="/privacy" className="text-[#444444] underline hover:text-[#FFDD00]">
                  Privacy Policy
                </Link>
                ,{" "}
                <Link href="/hipaa" className="text-[#444444] underline hover:text-[#FFDD00]">
                  HIPAA Notice of Privacy Practices
                </Link>
                , and{" "}
                <Link href="/telehealth" className="text-[#444444] underline hover:text-[#FFDD00]">
                  Telehealth Consent
                </Link>
                , which are incorporated herein by reference. We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Services after any changes constitutes acceptance of the revised Terms.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 2 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                2. Description of Services
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                Gold Peptides is a telehealth platform that connects patients with licensed healthcare providers for online medical consultations. Our Services include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>Asynchronous telehealth consultations with licensed healthcare providers</li>
                <li>Review of health questionnaires and medical history by licensed physicians</li>
                <li>Prescription of medications when medically appropriate, at the sole discretion of the provider</li>
                <li>Fulfillment and delivery of prescribed medications through licensed pharmacies</li>
                <li>Ongoing support and follow-up care through our platform</li>
              </ul>
              <p className="text-[#444444]/70 text-base leading-relaxed mt-4 font-medium">
                IMPORTANT: Our Services are NOT intended for medical emergencies. If you are experiencing a medical emergency, please call 911 or go to your nearest emergency room immediately. Gold Peptides does not provide emergency medical services, and our platform should not be used as a substitute for emergency care.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 3 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                3. Eligibility
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                To use our Services, you must meet the following requirements:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>You must be at least 18 years of age</li>
                <li>You must be a resident of the United States</li>
                <li>You must be located in a state where our partnered healthcare providers are licensed to practice</li>
                <li>You must provide accurate, truthful, and complete information in your health questionnaire and account registration</li>
                <li>You must have the legal capacity to enter into a binding agreement</li>
              </ul>
              <p className="text-[#444444]/70 text-base leading-relaxed mt-3">
                By using our Services, you represent and warrant that you meet all of the foregoing eligibility requirements. We reserve the right to verify your eligibility and to refuse service to anyone at any time for any reason.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 4 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                4. User Account and Responsibilities
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                When you create an account with us, you agree to the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account</li>
                <li>You will provide accurate, current, and complete information during the registration process and in your health questionnaire</li>
                <li>You will promptly update your account information if it changes</li>
                <li>You will notify us immediately of any unauthorized use of your account or any other breach of security</li>
                <li>You will not share your account with anyone else or allow others to access your account</li>
                <li>You will comply with all applicable laws and regulations in connection with your use of the Services</li>
              </ul>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 5 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                5. Prohibited Uses
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                You agree not to use the Services for any of the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>Providing false, inaccurate, or misleading information in your health questionnaire or account</li>
                <li>Seeking prescriptions for someone other than yourself</li>
                <li>Attempting to obtain medications for purposes other than legitimate medical treatment</li>
                <li>Reselling, distributing, or transferring any medications obtained through our Services</li>
                <li>Interfering with or disrupting the integrity or performance of the Services</li>
                <li>Attempting to gain unauthorized access to our systems, other user accounts, or data</li>
                <li>Using the Services for any illegal, fraudulent, or harmful purpose</li>
                <li>Harassing, threatening, or abusing our healthcare providers, staff, or other users</li>
                <li>Reproducing, duplicating, copying, selling, or exploiting any portion of the Services without express written permission</li>
              </ul>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 6 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                6. Medical Disclaimer
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                The content on our website is provided for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. The healthcare providers on our platform exercise their independent professional judgment in evaluating and treating patients. Gold Peptides does not practice medicine and does not interfere with the practice of medicine by the providers on our platform. A prescription is not guaranteed and is at the sole discretion of the treating provider based on your health questionnaire, medical history, and clinical evaluation.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 7 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                7. Payment Terms
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                By placing an order through our Services, you agree to the following payment terms:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>All prices are listed in U.S. dollars and are subject to change without notice</li>
                <li>Payment is due at the time of order placement</li>
                <li>We accept major credit cards, debit cards, and other payment methods as displayed at checkout</li>
                <li>You agree to pay all charges incurred by you or on your behalf through the Services, at the prices in effect when such charges are incurred</li>
                <li>Our Services are generally not covered by health insurance. We do not submit claims to insurance companies on your behalf</li>
                <li>If a provider determines that treatment is not appropriate for you, we will issue a full refund for the consultation fee</li>
                <li>Subscription plans will auto-renew at the end of each billing cycle unless you cancel prior to the renewal date</li>
              </ul>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 8 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                8. Shipping and Delivery
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                Medications are shipped directly from our licensed pharmacy partners. We offer free standard shipping on all orders. Shipping times typically range from 3-7 business days, depending on your location and the availability of the medication. Expedited shipping options may be available at an additional cost. All medications are shipped in discreet, unmarked packaging to protect your privacy. We are not responsible for shipping delays caused by carriers, weather, or other events outside our control. You are responsible for providing an accurate shipping address, and we are not liable for packages delivered to an incorrect address provided by you.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 9 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                9. Returns and Refunds
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                Due to the nature of prescription medications and for safety and regulatory reasons, we generally cannot accept returns of dispensed medications. For more information about our return and refund policies, please visit our{" "}
                <Link href="/returns" className="text-[#444444] underline hover:text-[#FFDD00]">
                  Returns &amp; Refunds
                </Link>
                {" "}page. If you receive a damaged or incorrect product, please contact us within 48 hours at{" "}
                <a href="mailto:support@goldpeptides.com" className="text-[#444444] underline hover:text-[#FFDD00]">
                  support@goldpeptides.com
                </a>
                {" "}for assistance.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 10 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                10. Intellectual Property
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                All content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Gold Peptides or its licensors and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 11 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                11. Limitation of Liability
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, GOLD PEPTIDES, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD PARTIES; (III) ANY CONTENT OBTAINED FROM THE SERVICES; OR (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT. IN NO EVENT SHALL OUR AGGREGATE LIABILITY FOR ALL CLAIMS RELATED TO THE SERVICES EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 12 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                12. Indemnification
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                You agree to defend, indemnify, and hold harmless Gold Peptides, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the Services, including, but not limited to, any use of the Services&apos; content, services, and products other than as expressly authorized in these Terms.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 13 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                13. Dispute Resolution
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                Any dispute, controversy, or claim arising out of or relating to these Terms or the breach, termination, or invalidity thereof shall first be attempted to be resolved through good-faith negotiations. If the dispute cannot be resolved through negotiations within thirty (30) days, either party may submit the dispute to binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Consumer Arbitration Rules. The arbitration shall be conducted in the English language, and the arbitral award shall be final and binding upon both parties. YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 14 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                14. Governing Law
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles. Any legal action or proceeding not subject to arbitration shall be brought exclusively in the federal or state courts located in the State of Delaware, and you consent to the personal jurisdiction of such courts.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 15 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                15. Termination
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 16 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                16. Changes to Terms
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect by posting the updated Terms on our website and updating the &quot;Effective Date.&quot; What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 17 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                17. Severability
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Contact */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Contact Information
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                If you have any questions about these Terms &amp; Conditions, please contact us:
              </p>
              <div className="mt-4 bg-[#FFFEF0] rounded-lg p-5 border border-[#444444]/10">
                <p className="text-[#444444] font-bold mb-1">Gold Peptides</p>
                <p className="text-[#444444]/70 text-sm">
                  Email:{" "}
                  <a href="mailto:support@goldpeptides.com" className="text-[#444444] underline hover:text-[#FFDD00]">
                    support@goldpeptides.com
                  </a>
                </p>
                <p className="text-[#444444]/70 text-sm mt-1">
                  Website:{" "}
                  <Link href="/" className="text-[#444444] underline hover:text-[#FFDD00]">
                    goldpeptides.com
                  </Link>
                </p>
              </div>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Last Updated */}
            <div>
              <p className="text-[#444444]/50 text-sm">
                Last updated: January 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
