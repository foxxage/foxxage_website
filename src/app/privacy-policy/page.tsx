
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="font-bold">Privacy Policy</h1>
          <br />
          <p>Effective Date: 2nd October, 2025</p>
          <br />
          <p>Welcome to Foxxage’s Privacy Policy (“Privacy Policy”).</p>
          <br />
          <p>Foxxage (“Foxxage,” “we,” “us,” or “our”) provides: Workflow automation and AI agent services (“Service”).</p>
          <br />
          <p>This Privacy Policy explains how we collect, use, store, and share your personal data when you use our Service.</p>
          <br />
          <p>Unless otherwise defined, terms in this Privacy Policy have the same meaning as in our Terms and Conditions.</p>

          <br />
          <h2><strong>1. Application of this Privacy Policy</strong></h2>
          <br />
          <p>i) When we process personal data strictly on our clients’ instructions, we act as a data processor. You should review the client’s privacy policies for how they handle your data.</p>
          <br />
          <p>ii) When we collect data directly through our Platform or Services, we act as a data controller and are responsible for how your personal data is processed.</p>
          <br />
          <p>iii) By using our Service, you consent to the collection, use, storage, and sharing of your personal data as described in this Privacy Policy.</p>

          <br />
          <h2><strong>2. Personal Data We Collect</strong></h2>
          <br />
          <p>We collect personal data necessary to provide AI agents and workflow automation, including:</p>
          <p>i) Identity Data: user name, business name</p>
          <br />
          <p>ii) Contact Data: email address, phone number</p>
          <br />
          <p>iii) Business Details: business address, APIs, business-specific personal information</p>
          <br />
          <p>iv) Technical Data: device information, browser type, IP address, usage data</p>
          <br />
          <p>v) Workflow & Service Data: information related to workflows, AI agent configurations, and platform interactions</p>
          <br />
          <p>We also collect aggregated or anonymized data for analysis, optimization, and research purposes.</p>
          <p>Children’s Data: Our Service is not intended for individuals under 13, and we do not knowingly collect information from children.</p>

          <br />
          <h2><strong>3. How We Collect Data</strong></h2>
          <br />
          <p>We collect data through:</p>
          <p>i) Direct Interactions: when you provide data while using our Platform, creating AI agents, integrating APIs, or contacting support.</p>
          <br />
          <p>ii) Automated Technologies: cookies, server logs, or analytics tools to capture technical and usage data.</p>
          <br />
          <p>iii) Third Parties: data may come from authorized integrations, analytics services, or APIs you connect to our Platform.</p>

          <br />
          <h2><strong>4. Cookies</strong></h2>
          <br />
          <p>We use cookies to enhance your Platform experience:</p>
          <p>i) Essential Cookies: necessary for Platform functionality.</p>
          <br />
          <p>ii) Analytical Cookies: track usage and improve service.</p>
          <br />
          <p>iii) Preference Cookies: remember settings and preferences.</p>
          <br />
          <p>iv) Targeting Cookies: personalize experiences and workflow recommendations.</p>
          <br />
          <p>You may manage or block cookies via your browser, though essential functionality may be affected.</p>

          <br />
          <h2><strong>5. Use of Personal Data</strong></h2>
          <br />
          <p>We use your personal data to:</p>
          <p>i) Provide and maintain the Platform and Services</p>
          <br />
          <p>ii) Build and manage AI agents and workflow automation</p>
          <br />
          <p>iii) Communicate updates or notifications</p>
          <br />
          <p>iv) Respond to queries, requests, or support issues</p>
          <br />
          <p>v) Analyze and improve the Platform and Services</p>
          <br />
          <p>vi) Comply with legal obligations</p>
          <br />
          <p>vii) Perform tasks as instructed by our clients (if applicable)</p>
          <br />
          <p>Legal bases for processing include consent, contractual necessity, legitimate interests, or legal compliance.</p>

          <br />
          <h2><strong>6. Disclosure of Personal Data</strong></h2>
          <br />
          <p>We do not sell or trade personal data. We may share data with:</p>
          <p>i) Internal Teams: for service operation and analytics</p>
          <br />
          <p>ii) Trusted Third Parties: service providers assisting with Platform operations, payment processing, or analytics</p>
          <br />
          <p>iii) Regulatory Authorities: when required by law</p>
          <br />
          <p>All third parties are required to keep your personal data secure and only process it for authorized purposes.</p>

          <br />
          <h2><strong>7. Cross-Border Transfers</strong></h2>
          <br />
          <p>Your personal data may be transferred to countries where our servers or service providers operate. Such transfers comply with applicable legal frameworks, including standard contractual clauses where required.</p>

          <br />
          <h2><strong>8. Data Security</strong></h2>
          <br />
          <p>We implement reasonable technical and organizational measures to protect personal data, including secure servers, encryption, and access control. Only authorized personnel can access personal data.</p>

          <br />
          <h2><strong>9. Data Retention</strong></h2>
          <br />
          <p>i) Personal data is retained only as long as necessary for service purposes, legal obligations, or resolving disputes.</p>
          <br />
          <p>ii) Usage and workflow data may be anonymized for research or analytics purposes and retained indefinitely.</p>

          <br />
          <h2><strong>10. Your Rights</strong></h2>
          <br />
          <p>Depending on your location and applicable laws, you may have rights to:</p>
          <p>i) Access, correct, or erase personal data</p>
          <br />
          <p>ii) Object to or restrict processing</p>
          <br />
          <p>iii) Request data portability</p>
          <br />
          <p>iv) Withdraw consent for processing or revoke API/third-party access</p>
          <br />
          <p>Requests can be submitted via hi@foxxage.com. We aim to respond within 72 hours.</p>

          <br />
          <h2><strong>11. Updates to This Privacy Policy</strong></h2>
          <br />
          <p>We may update this Privacy Policy occasionally. Updates will be communicated via the Platform or email. Continued use of the Service constitutes consent to the updated Privacy Policy.</p>

          <br />
          <h2><strong>12. Disclaimers</strong></h2>
          <br />
          <p>Information you voluntarily share publicly (e.g., forums, social media) may be collected by others. Foxxage is not responsible for such collection or disclosure.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
