import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p>Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <p>At Foxxage, your privacy matters to us. This Privacy Policy explains what data we collect, how we use it, and how we keep it safe when you visit our website or use our services.</p>

          <br />

          <h2><strong>1. Information We Collect</strong></h2>
          <p>We may collect:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, or other details you voluntarily submit through our contact form or when booking a service.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website (pages visited, time on site, device information, IP address) to improve our services.</li>
            <li><strong>Cookies & Tracking:</strong> We may use cookies to enhance your experience, remember preferences, and analyze website traffic.</li>
          </ul>

          <br />

          <h2><strong>2. How We Use Your Information</strong></h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries or support requests</li>
            <li>Send relevant updates, if you opted in</li>
            <li>Analyze usage patterns to optimize website performance</li>
          </ul>
          <p>We never sell, trade, or rent your personal information to third parties.</p>

          <br />

          <h2><strong>3. Third-Party Services</strong></h2>
          <p>We may use trusted third-party tools like analytics providers, chatbots, or payment processors. These services have their own privacy policies and may collect data to perform their function (for example, Google Analytics for traffic analysis).</p>

          <br />

          <h2><strong>4. Data Protection</strong></h2>
          <p>We use secure systems to store and protect your personal data. Access is restricted to authorized personnel only, and we take steps to prevent unauthorized access, alteration, or disclosure.</p>

          <br />

          <h2><strong>5. Your Rights</strong></h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the data we have about you</li>
            <li>Request corrections or deletion</li>
            <li>Opt out of communications</li>
            <li>Disable cookies in your browser settings</li>
          </ul>

          <br />

          <h2><strong>6. Cookies</strong></h2>
          <p>You can accept or refuse cookies. Please note that disabling cookies may affect how our website functions.</p>

          <br />

          <h2><strong>7. Changes to This Policy</strong></h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Effective Date.”</p>
          
          <br />

          <h2><strong>8. Contact Us</strong></h2>
          <p>If you have any questions about this Privacy Policy or how we handle your data, you can reach us at:</p>
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
