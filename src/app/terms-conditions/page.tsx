
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="font-bold">Terms and Conditions</h1>
          <br />
          <p>Effective Date: 2nd October, 2025</p>
          <br />
          <p>These terms and conditions (“Terms”) govern your access to and use of the services provided by Foxxage (“Service”) through https://www.foxxage.com (“Platform”). By using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.</p>

          <br />
          <h2><strong>1. Eligibility</strong></h2>
          <ul>
            <li className="py-2">i) You must have the legal capacity to enter into contracts and be 18 years or older.</li>
            <li className="py-2">ii) If using the Service on behalf of a business or organization, you confirm that you have authority to bind that entity to these Terms.</li>
          </ul>

          <br />
          <h2><strong>2. Service Description</strong></h2>
          <p>Foxxage provides services including:</p>
          <ul>
            <li className="py-2">i) Building AI agents for businesses</li>
            <li className="py-2">ii) Workflow automation and process optimization</li>
            <li className="py-2">iii) Integration of APIs and business tools for automation</li>
            <li className="py-2">iv) Support, consulting, and analytics related to AI agents and workflow services</li>
          </ul>

          <br />
          <h2><strong>3. Registration and Account</strong></h2>
          <ul>
            <li className="py-2">i) You may be required to register and provide accurate business and contact information.</li>
            <li className="py-2">ii) You are responsible for maintaining the security and confidentiality of your account credentials.</li>
            <li className="py-2">iii) You are responsible for all activity that occurs under your account.</li>
          </ul>

          <br />
          <h2><strong>4. Service Fees and Subscriptions</strong></h2>
          <ul>
            <li className="py-2">i) Services may be offered on a subscription or pay-per-service basis.</li>
            <li className="py-2">ii) All fees are due as per the agreed payment schedule and are non-refundable unless otherwise specified.</li>
            <li className="py-2">iii) Payments must be made according to the agreed terms. Late or missing payments may result in delayed delivery or suspension of services.</li>
            <li className="py-2">iv) Foxxage reserves the right to change fees or payment terms with reasonable notice.</li>
            <li className="py-2">v) Payment processing may involve third-party payment providers; Foxxage is not liable for errors or delays caused by them.</li>
          </ul>

          <br />
          <h2><strong>5. Use of Services</strong></h2>
          <ul>
            <li className="py-2">i) You agree to use the Service only for lawful purposes and in accordance with these Terms.</li>
            <li className="py-2">ii) You will not misuse the Service or interfere with its operation.</li>
            <li className="py-2">iii) You must provide accurate and complete information required to deliver the Service.</li>
          </ul>

          <br />
          <h2><strong>6. User Data and Content</strong></h2>
          <ul>
            <li className="py-2">i) You grant Foxxage the right to use your business data and inputs for the provision, improvement, and support of the Service.</li>
            <li className="py-2">ii) Foxxage may process data to optimize AI agents, workflow automation, and analytics.</li>
            <li className="py-2">iii) You are responsible for the accuracy, legality, and completeness of the data provided.</li>
          </ul>

          <br />
          <h2><strong>7. Third-Party Services</strong></h2>
          <ul>
            <li className="py-2">i) The Service may integrate or interact with third-party platforms, tools, or APIs.</li>
            <li className="py-2">ii) Use of third-party services is at your risk and subject to their respective terms and policies.</li>
          </ul>

          <br />
          <h2><strong>8. Intellectual Property</strong></h2>
          <p>Foxxage owns or licenses all intellectual property in the Service and related materials.</p>
          <ul>
            <li className="py-2">i) All content on this website — including logos, graphics, text, and designs — is the property of Foxxage unless otherwise stated. You may not copy, reproduce, or use our intellectual property without prior written consent.</li>
            <li className="py-2">ii) You retain rights to your own business data, but grant Foxxage a license to use it to deliver the Service.</li>
            <li className="py-2">iii) Feedback provided to Foxxage may be used freely to improve services.</li>
          </ul>

          <br />
          <h2><strong>9. Term and Termination</strong></h2>
          <ul>
            <li className="py-2">i) These Terms remain in effect until terminated by either party.</li>
            <li className="py-2">ii) Foxxage may suspend or terminate your access to the Service for breach of Terms, non-payment, or other legitimate reasons.</li>
            <li className="py-2">iii) Upon termination, your access to the Service ends, but obligations that survive termination remain enforceable.</li>
          </ul>

          <br />
          <h2><strong>10. Disclaimers and Warranties</strong></h2>
          <ul>
            <li className="py-2">i) The Service is provided “as-is” without warranties of any kind.</li>
            <li className="py-2">ii) Foxxage does not guarantee specific results or uninterrupted operation.</li>
            <li className="py-2">iii) You accept responsibility for using the Service and any outcomes from its use.</li>
          </ul>

          <br />
          <h2><strong>11. Limitation of Liability</strong></h2>
          <ul>
            <li className="py-2">i) Foxxage is not liable for indirect, incidental, or consequential damages arising from use or inability to use the Service.</li>
            <li className="py-2">ii) Liability for direct damages is limited to the amount paid for the Service in the preceding 12 months.</li>
          </ul>

          <br />
          <h2><strong>12. Governing Law and Dispute Resolution</strong></h2>
          <ul>
            <li className="py-2">i) These Terms are governed by the laws of India.</li>
            <li className="py-2">ii) Disputes will be resolved by arbitration under Indian law, and decisions are final and binding.</li>
          </ul>

          <br />
          <h2><strong>13. Grievance Redressal</strong></h2>
          <ul>
            <li className="py-2">i) For complaints or queries, contact hi@foxxage.com.</li>
            <li className="py-2">ii) Foxxage will address grievances in accordance with applicable laws.</li>
          </ul>

          <br />
          <h2><strong>14. Miscellaneous</strong></h2>
          <ul>
            <li className="py-2">i) Changes: Foxxage may revise these Terms at any time; continued use constitutes acceptance.</li>
            <li className="py-2">ii) Severability: Invalid provisions do not affect the remainder of the Terms.</li>
            <li className="py-2">iii)  Force Majeure: Foxxage is not liable for delays caused by events beyond its control.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
