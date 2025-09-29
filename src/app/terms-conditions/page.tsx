import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="font-bold">Terms & Conditions</h1>
          <br />
          <p>Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <br />

          <p>Welcome to Foxxage! By using our website and services, you agree to the following Terms & Conditions. Please read them carefully before proceeding.</p>

          <br />

          <h2><strong>1. Acceptance of Terms</strong></h2>
          <br />
          <p>By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree, please do not use our services.</p>

          <br />

          <h2><strong>2. Services Provided</strong></h2>
          <p>Foxxage provides AI Agents, workflow automation solutions, and related consulting services. We strive to keep our services available, reliable, and secure, but we do not guarantee uninterrupted or error-free operation.</p>

          <br />

          <h2><strong>3. User Responsibilities</strong></h2>
          <p>By using Foxxage, you agree to:</p>
          <ul>
            <li>Provide accurate information when filling out forms or contacting us.</li>
            <li>Use our services only for lawful purposes.</li>
            <li>Not misuse our website or attempt to disrupt its functionality (e.g., hacking, spreading malware).</li>
          </ul>

          <br />

          <h2><strong>4. Payments & Pricing</strong></h2>
          <p>Where applicable, service fees will be agreed upon before any work begins. Payments must be made according to the agreed terms. Late or missing payments may result in delayed delivery or suspension of services.</p>

          <br />

          <h2><strong>5. Intellectual Property</strong></h2>
          <p>All content on this website — including logos, graphics, text, and designs — is the property of Foxxage unless otherwise stated. You may not copy, reproduce, or use our intellectual property without prior written consent.</p>

          <br />

          <h2><strong>6. Third-Party Tools & Links</strong></h2>
          <p>Our website may include links or integrations with third-party services. We are not responsible for the content, policies, or performance of these external sites or tools.</p>

          <br />

          <h2><strong>7. Limitation of Liability</strong></h2>
          <p>Foxxage is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability will not exceed the amount paid by you for the service in question.</p>

          <br />

          <h2><strong>8. Privacy & Data Protection</strong></h2>
          <p>Your privacy is important to us. Please review our <Link href="/privacy-policy">Privacy Policy</Link> to understand how we collect, use, and protect your information.</p>

          <br />

          <h2><strong>9. Termination</strong></h2>
          <p>We reserve the right to suspend or terminate access to our services if these Terms are violated or if there is misuse of our platform.</p>

          <br />

          <h2><strong>10. Changes to Terms</strong></h2>
          <p>We may update these Terms from time to time. Any changes will be posted on this page with an updated “Effective Date.” Continued use of our website means you accept the revised Terms.</p>

          <br />

          <h2><strong>11. Contact Us</strong></h2>
          <p>If you have questions about these Terms, contact us at:</p>
          <ul>
            <li>📩 Email: hi@foxxage.com</li>
            <li>📞 Phone/WhatsApp: +91-90319-98319</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
