import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <p>Welcome to Foxxage. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

          <h2>Information We Collect</h2>
          <p>We may collect personal information from you such as your name, email address, phone number, and message when you fill out our contact form. We may also collect non-personal information, such as browser type, operating system, and web pages visited to help us manage our website.</p>

          <h2>Use of Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and fulfill your requests.</li>
            <li>Send you marketing and promotional communications.</li>
            <li>Improve our website and services.</li>
            <li>Understand how our services are used.</li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>

          <h2>Security of Your Information</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

          <h2>Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at hi@foxxage.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
