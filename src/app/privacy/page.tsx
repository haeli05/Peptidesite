import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
                Gold Peptides (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website goldpeptides.com and associated telehealth services (collectively, the &quot;Services&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our Services. Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 1 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Information We Collect
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-4">
                We collect information in several ways when you use our Services:
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Personal Information</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    When you create an account, complete a health questionnaire, or place an order, we may collect your name, email address, phone number, date of birth, shipping address, billing address, and payment information. This information is necessary to provide you with our Services and process your transactions.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Health Information</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    To facilitate telehealth consultations and determine appropriate treatments, we collect health-related information including your medical history, current medications, allergies, symptoms, health conditions, lifestyle information, and photographs you may upload as part of your health assessment. This information is protected under HIPAA and our{" "}
                    <Link href="/hipaa" className="text-[#444444] underline hover:text-[#FFDD00]">
                      HIPAA Notice of Privacy Practices
                    </Link>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Usage Data</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    We automatically collect certain information when you access our Services, including your IP address, browser type and version, operating system, referring URLs, pages viewed, links clicked, the date and time of your visit, and other standard server log information. We may also collect information about the device you use to access our Services, including the hardware model, operating system version, unique device identifiers, and mobile network information.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Cookies and Tracking Technologies</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    We use cookies, web beacons, pixel tags, and similar tracking technologies to collect information about your browsing activities. Cookies are small data files stored on your device that help us improve our Services and your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services.
                  </p>
                </div>
              </div>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 2 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                How We Use Your Information
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>To provide, maintain, and improve our Services, including facilitating telehealth consultations with licensed healthcare providers</li>
                <li>To process your orders, manage your account, and send you order confirmations and updates</li>
                <li>To communicate with you about your treatment, prescriptions, and follow-up care</li>
                <li>To share your health information with licensed providers and licensed pharmacies for treatment and prescription fulfillment</li>
                <li>To process payments and prevent fraudulent transactions</li>
                <li>To send you marketing communications, promotional offers, and newsletters (you may opt out at any time)</li>
                <li>To personalize your experience and deliver content and product offerings relevant to your interests</li>
                <li>To monitor and analyze usage trends and improve the functionality of our Services</li>
                <li>To detect, prevent, and address technical issues, security breaches, and fraud</li>
                <li>To comply with legal obligations and enforce our terms of service</li>
              </ul>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 3 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                How We Share Your Information
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                We may share your information in the following circumstances:
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Healthcare Providers</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    We share your health information with the licensed healthcare providers on our platform who review your health questionnaire and determine appropriate treatment options. These providers are bound by their own professional obligations and HIPAA requirements.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Pharmacies</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    When a prescription is issued, we share necessary information with licensed pharmacies to fulfill your prescription. This includes your name, shipping address, prescription details, and relevant medical information required for safe dispensing.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Service Providers</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    We may share your information with third-party vendors, consultants, and service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting, customer service, and marketing assistance. These service providers are contractually obligated to protect your information and use it only for the purposes for which it was disclosed.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Legal Requirements</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency), to protect the rights, property, or safety of Gold Peptides, our users, or others, or to detect, prevent, or address fraud, security, or technical issues.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Business Transfers</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    If Gold Peptides is involved in a merger, acquisition, or sale of all or a portion of its assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your personal information.
                  </p>
                </div>
              </div>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 4 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Data Security
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                We implement administrative, technical, and physical security measures designed to protect your personal and health information from unauthorized access, use, alteration, and disclosure. These measures include encryption of data in transit and at rest, secure server infrastructure, access controls, regular security assessments, and employee training on data protection practices. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 5 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Data Retention
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                We retain your personal information for as long as your account is active or as needed to provide you Services. We will retain and use your information as necessary to comply with our legal obligations (including medical record retention requirements), resolve disputes, and enforce our agreements. Health records are retained in accordance with applicable federal and state laws, which may require retention for a minimum period of six to ten years from the date of last treatment.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 6 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Your Rights and Choices
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Account Information</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    You may update, correct, or delete your account information at any time by logging into your account or contacting us. Note that we may retain certain information as required by law or for legitimate business purposes.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Marketing Communications</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    You may opt out of receiving promotional emails by following the unsubscribe instructions included in each email or by contacting us. Even if you opt out of marketing communications, we may still send you non-promotional messages, such as those about your account, orders, or ongoing treatment.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Cookies</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Do Not Track Signals</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not want your online activity tracked. We currently do not respond to DNT signals because there is no consistent industry standard for compliance.
                  </p>
                </div>
              </div>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 7 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                California Residents
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li><strong>Right to Know:</strong> You have the right to request information about the categories and specific pieces of personal information we have collected about you, the categories of sources from which we collect personal information, the business purpose for collecting personal information, and the categories of third parties with whom we share personal information.</li>
                <li><strong>Right to Delete:</strong> You have the right to request the deletion of personal information we have collected from you, subject to certain exceptions.</li>
                <li><strong>Right to Correct:</strong> You have the right to request that we correct inaccurate personal information that we maintain about you.</li>
                <li><strong>Right to Opt-Out:</strong> You have the right to opt out of the sale or sharing of your personal information. Gold Peptides does not sell your personal information.</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA/CPRA rights.</li>
              </ul>
              <p className="text-[#444444]/70 text-base leading-relaxed mt-3">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:support@goldpeptides.com" className="text-[#444444] underline hover:text-[#FFDD00]">
                  support@goldpeptides.com
                </a>
                . We will verify your identity before processing your request. Please note that health information protected under HIPAA may be exempt from certain CCPA/CPRA provisions.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 8 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Children&apos;s Privacy
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we learn that we have collected personal information from a child under 18, we will take steps to delete that information as quickly as possible. If you believe that a child under 18 has provided us with personal information, please contact us immediately.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 9 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Third-Party Links
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                Our Services may contain links to third-party websites and services that are not operated by us. If you click a third-party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 10 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Changes to This Privacy Policy
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Effective Date&quot; at the top. We will also notify you via email for material changes. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Contact */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Contact Us
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                If you have any questions or concerns about this Privacy Policy, please contact us:
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
