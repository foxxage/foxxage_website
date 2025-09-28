import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1>Terms & Conditions</h1>
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Foxxage website (the "Service") operated by Foxxage ("us", "we", or "our").</p>

          <h2>Agreement to Terms</h2>
          <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

          <h2>Services</h2>
          <p>We provide AI agents and workflow automation services. The specifics of the services will be outlined in a separate agreement or statement of work. We reserve the right to modify or discontinue the Service at any time without prior notice.</p>
          
          <h2>Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Foxxage and its licensors. The Service is protected by copyright, trademark, and other laws of both the foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Foxxage.</p>

          <h2>Limitation of Liability</h2>
          <p>In no event shall Foxxage, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

          <h2>Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions.</p>

          <h2>Changes</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at hi@foxxage.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
