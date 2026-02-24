import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function HIPAAPage() {
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
              HIPAA Notice of Privacy Practices
            </h1>
            <p className="text-lg text-[#444444]/60">
              How we protect your health information
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
              <p className="text-[#444444]/80 text-base leading-relaxed">
                THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
              </p>
              <p className="text-[#444444]/70 text-base leading-relaxed mt-4">
                Gold Peptides (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy and security of your protected health information (PHI) as required by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and its implementing regulations. This Notice of Privacy Practices describes how we may use and disclose your PHI and your rights regarding that information. As a telehealth platform connecting patients with licensed healthcare providers, we are required by law to maintain the privacy of your PHI, to provide you with this notice of our legal duties and privacy practices, and to follow the terms of the notice currently in effect.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 1 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                How We May Use and Disclose Your PHI
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-4">
                We may use and disclose your protected health information for the following purposes:
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Treatment</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    We may use your PHI to provide, coordinate, or manage your healthcare and related services. This includes sharing information with the licensed healthcare providers on our platform who evaluate your health questionnaire and medical history to determine appropriate treatment plans. We may also share your PHI with pharmacies that fulfill your prescriptions.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Payment</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    We may use and disclose your PHI to bill and collect payment for the services and products we provide. This may include sharing information with payment processors and billing services as necessary to process your transactions.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Healthcare Operations</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    We may use and disclose your PHI for our healthcare operations, which include quality assessment and improvement activities, reviewing the competence or qualifications of healthcare professionals, conducting training programs, accreditation, certification, licensing, or credentialing activities.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">As Required by Law</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    We will disclose your PHI when required to do so by federal, state, or local law. This includes disclosures to public health authorities, the Food and Drug Administration (FDA), law enforcement officials, and in response to court orders or subpoenas.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Public Health Activities</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    We may disclose your PHI for public health activities, such as reporting adverse reactions to medications, notifying people of recalls of products they may be using, or reporting suspected abuse or neglect to government authorities.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Health and Safety</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    We may use or disclose your PHI when necessary to prevent a serious and imminent threat to your health and safety or the health and safety of the public or another person.
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
                Uses and Disclosures Requiring Your Authorization
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                Except as outlined above, we will not use or disclose your PHI without your written authorization. Uses and disclosures not described in this notice will be made only with your written authorization. You may revoke your authorization at any time by submitting a written request to our Privacy Officer. Revocation of your authorization will not affect any actions we took in reliance on your authorization before we received your revocation. This includes, but is not limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>Marketing purposes beyond treatment-related communications</li>
                <li>Sale of your protected health information</li>
                <li>Most uses of psychotherapy notes, if applicable</li>
                <li>Other uses and disclosures not described in this notice</li>
              </ul>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 3 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Your Rights Regarding Your PHI
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-4">
                You have the following rights regarding the protected health information we maintain about you:
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Right to Inspect and Copy</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    You have the right to inspect and obtain a copy of your PHI that is contained in a designated record set for as long as we maintain the record. You must submit your request in writing. We may charge a reasonable, cost-based fee for copies. We may deny your request in certain limited circumstances, and if we do, you may request a review of the denial.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Right to Request Amendment</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    If you believe that your PHI is incorrect or incomplete, you may request that we amend the information. Your request must be in writing and must state the reason for the amendment. We may deny your request if the information was not created by us, is not part of the record set, is not available for inspection, or is accurate and complete.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Right to an Accounting of Disclosures</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    You have the right to request a list of certain disclosures we have made of your PHI. This list will not include disclosures made for treatment, payment, or healthcare operations, or disclosures made with your written authorization. Your request must be in writing and must state a time period, which may not be longer than six years.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Right to Request Restrictions</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    You have the right to request a restriction on the PHI we use or disclose about you for treatment, payment, or healthcare operations. You also have the right to request a limit on the PHI we disclose about you to someone involved in your care. While we will consider your request, we are not required to agree to it, except in certain circumstances involving self-pay transactions.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Right to Request Confidential Communications</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    You have the right to request that we communicate with you about medical matters in a certain way or at a certain location. For example, you may request that we contact you only by email or only at a specific phone number. We will accommodate all reasonable requests.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Right to a Paper Copy of This Notice</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    You have the right to a paper copy of this notice. You may ask us to give you a copy of this notice at any time by contacting our Privacy Officer.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#444444] mb-1">Right to Be Notified of a Breach</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">
                    You have the right to be notified in the event that we (or one of our business associates) discover a breach of your unsecured PHI. We will notify you as required by law.
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
                Our Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>We are required by law to maintain the privacy and security of your protected health information.</li>
                <li>We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.</li>
                <li>We must follow the duties and privacy practices described in this notice and give you a copy of it.</li>
                <li>We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.</li>
              </ul>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 5 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Filing a Complaint
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                If you believe your privacy rights have been violated, you may file a complaint with us or with the Secretary of the U.S. Department of Health and Human Services. To file a complaint with us, contact our Privacy Officer using the information provided below. All complaints must be submitted in writing. We will not retaliate against you for filing a complaint.
              </p>
              <p className="text-[#444444]/70 text-base leading-relaxed mt-3">
                You may also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., Washington, D.C. 20201, calling 1-877-696-6775, or visiting{" "}
                <span className="text-[#444444] font-medium">www.hhs.gov/ocr/privacy/hipaa/complaints/</span>.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 6 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Changes to This Notice
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                We reserve the right to change this notice and make the new notice provisions effective for all PHI that we maintain, including PHI we created or received before we made the changes. We will post a copy of the current notice on our website at{" "}
                <Link href="/" className="text-[#444444] font-medium underline hover:text-[#FFDD00]">
                  goldpeptides.com
                </Link>
                . The notice will contain the effective date on the first page.
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
                If you have any questions about this notice or wish to exercise any of your rights described above, please contact our Privacy Officer:
              </p>
              <div className="mt-4 bg-[#FFFEF0] rounded-lg p-5 border border-[#444444]/10">
                <p className="text-[#444444] font-bold mb-1">Gold Peptides - Privacy Officer</p>
                <p className="text-[#444444]/70 text-sm">
                  Email:{" "}
                  <a href="mailto:support@goldpeptides.com" className="text-[#444444] underline hover:text-[#FFDD00]">
                    support@goldpeptides.com
                  </a>
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
