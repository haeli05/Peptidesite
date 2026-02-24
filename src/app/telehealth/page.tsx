import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function TelehealthConsentPage() {
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
              Telehealth Consent
            </h1>
            <p className="text-lg text-[#444444]/60">
              Informed consent for telehealth services
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
                This Telehealth Informed Consent (&quot;Consent&quot;) describes the terms under which Gold Peptides (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides telehealth services through our platform. By using our telehealth services, you acknowledge that you have read, understand, and agree to the terms outlined in this Consent. Please read this document carefully before proceeding with any telehealth consultation.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 1 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Nature of Telehealth Services
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                Telehealth involves the delivery of healthcare services using electronic communications, information technology, or other means between a healthcare provider and a patient who are not in the same physical location. Our telehealth services may include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>Asynchronous (store-and-forward) medical consultations where you submit health information and a licensed provider reviews it at a later time</li>
                <li>Review and evaluation of your medical history, symptoms, and health questionnaire responses</li>
                <li>Diagnosis and treatment recommendations based on the information you provide</li>
                <li>Prescribing of medications when clinically appropriate, at the sole discretion of the provider</li>
                <li>Follow-up care and ongoing monitoring of your treatment progress</li>
                <li>Health education and counseling related to your treatment plan</li>
              </ul>
              <p className="text-[#444444]/70 text-base leading-relaxed mt-4">
                The healthcare providers on our platform are independently licensed physicians and medical professionals. They exercise their own independent clinical judgment in evaluating your health information and determining appropriate treatment. Gold Peptides facilitates the connection between you and these providers but does not itself practice medicine.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 2 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Benefits of Telehealth
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                Telehealth services offer several potential benefits, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>Improved access to healthcare, particularly for individuals in remote or underserved areas</li>
                <li>Convenience of receiving medical care from the comfort of your home</li>
                <li>Reduced travel time, associated costs, and time away from work or family</li>
                <li>Timely access to medical consultations without long wait times for appointments</li>
                <li>Discreet and private consultations for sensitive health concerns</li>
                <li>Access to a broader network of licensed healthcare providers</li>
                <li>Electronic prescribing for faster pharmacy processing</li>
              </ul>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 3 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Risks and Limitations of Telehealth
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                As with any medical service, there are potential risks and limitations associated with telehealth, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>The inability to perform a physical examination, which may limit the provider&apos;s ability to diagnose certain conditions. In some cases, the provider may determine that an in-person visit is necessary.</li>
                <li>Technology-related risks, including the possibility of interruption or loss of data due to technical failures, network issues, or equipment malfunctions</li>
                <li>Although we implement robust security measures, there is a potential risk that electronic communications may be intercepted by unauthorized third parties</li>
                <li>Delays in evaluation and treatment could occur due to deficiencies or failures of electronic equipment or technology</li>
                <li>The provider may not have access to all of your medical records, which may affect the quality of the clinical assessment</li>
                <li>A lack of access to all available diagnostic testing that might be available in an in-person setting</li>
                <li>The potential for misdiagnosis or incomplete diagnosis due to the inherent limitations of remote evaluation</li>
              </ul>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 4 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Patient Rights
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                As a patient using our telehealth services, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>The right to be informed about the nature, risks, and benefits of telehealth before consenting to receive services</li>
                <li>The right to withdraw your consent and discontinue telehealth services at any time without affecting your right to future care or treatment</li>
                <li>The right to request a referral to an in-person healthcare provider at any time</li>
                <li>The right to ask questions about your diagnosis, treatment plan, and any prescribed medications</li>
                <li>The right to know the identity and qualifications of the healthcare providers involved in your care</li>
                <li>The right to access your medical records in accordance with applicable law</li>
                <li>The right to privacy and confidentiality of your health information as described in our{" "}
                  <Link href="/hipaa" className="text-[#444444] underline hover:text-[#FFDD00]">
                    HIPAA Notice of Privacy Practices
                  </Link>
                </li>
                <li>The right to receive a copy of this Telehealth Consent at any time upon request</li>
              </ul>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 5 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Privacy and Confidentiality
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                We are committed to protecting the privacy and confidentiality of your personal and health information. All information shared during telehealth consultations is treated as protected health information (PHI) under HIPAA. We implement administrative, physical, and technical safeguards to protect your information, including encryption of data in transit and at rest, secure authentication mechanisms, and access controls. Our privacy practices are detailed in our{" "}
                <Link href="/privacy" className="text-[#444444] underline hover:text-[#FFDD00]">
                  Privacy Policy
                </Link>
                {" "}and{" "}
                <Link href="/hipaa" className="text-[#444444] underline hover:text-[#FFDD00]">
                  HIPAA Notice of Privacy Practices
                </Link>
                . By using our telehealth services, you consent to the electronic transmission of your health information as necessary to provide care.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 6 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Technical Requirements
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                To use our telehealth services, you will need:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>A device with internet access (computer, tablet, or smartphone)</li>
                <li>A modern web browser (Chrome, Firefox, Safari, or Edge) updated to its latest version</li>
                <li>A stable internet connection</li>
                <li>A valid email address for account creation and communication</li>
              </ul>
              <p className="text-[#444444]/70 text-base leading-relaxed mt-3">
                You are responsible for ensuring that your equipment and internet connection meet these requirements. Gold Peptides is not responsible for any technical issues on your end that may affect the delivery of telehealth services.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 7 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Emergency Situations
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                Our telehealth services are NOT intended for medical emergencies. If you are experiencing a medical emergency, including but not limited to chest pain, difficulty breathing, severe bleeding, loss of consciousness, suicidal thoughts, or any condition that you believe requires immediate medical attention, please call 911 or go to your nearest emergency room immediately. Do not rely on our telehealth services for emergency medical care. Gold Peptides is not an emergency medical service and is not equipped to handle emergency situations. If a provider determines during a consultation that your condition requires emergency care, they will advise you to seek immediate in-person medical attention.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 8 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Patient Responsibilities
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                By using our telehealth services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>Provide accurate, complete, and truthful information about your health history, current medications, allergies, and symptoms</li>
                <li>Promptly inform your provider of any changes in your health condition or if you experience adverse effects from prescribed medications</li>
                <li>Follow the treatment plan as prescribed by your healthcare provider</li>
                <li>Ask questions if you do not understand any aspect of your diagnosis or treatment</li>
                <li>Inform your primary care physician or other healthcare providers about any treatment received through our platform</li>
                <li>Use the telehealth services in a private location where your health information cannot be overheard by others</li>
                <li>Keep all prescribed medications secure and not share them with others</li>
              </ul>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 9 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Consent Withdrawal
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed">
                You have the right to withdraw your consent for telehealth services at any time. To withdraw your consent, you may contact us in writing at{" "}
                <a href="mailto:support@goldpeptides.com" className="text-[#444444] underline hover:text-[#FFDD00]">
                  support@goldpeptides.com
                </a>
                . Withdrawal of consent will not affect the legality of any services provided prior to withdrawal. Please note that withdrawal of consent may limit our ability to provide certain services to you. If you withdraw your consent during an active treatment plan, we strongly recommend that you follow up with an in-person healthcare provider to ensure continuity of care.
              </p>
            </div>

            <Separator className="bg-[#444444]/10" />

            {/* Section 10 */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#444444]"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Acknowledgment and Agreement
              </h2>
              <p className="text-[#444444]/70 text-base leading-relaxed mb-3">
                By using our telehealth services, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#444444]/70 text-base leading-relaxed">
                <li>You have read and understand this Telehealth Consent in its entirety</li>
                <li>You understand the nature, risks, and benefits of telehealth services as described above</li>
                <li>You understand that telehealth services are not a replacement for in-person medical care in all situations</li>
                <li>You understand that a prescription is not guaranteed and is at the sole discretion of the treating provider</li>
                <li>You consent to receive healthcare services via telehealth through the Gold Peptides platform</li>
                <li>You have had the opportunity to ask questions about telehealth services and have had those questions answered to your satisfaction</li>
                <li>You voluntarily consent to participate in telehealth services</li>
              </ul>
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
                If you have any questions about this Telehealth Consent or our telehealth services, please contact us:
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
