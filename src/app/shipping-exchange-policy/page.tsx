
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ShippingExchangePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="font-bold">Shipping & Exchange Policy</h1>
          <br />
          <p>Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <br />
          <p>This Shipping & Exchange Policy applies to all services provided by Foxxage. Since we primarily offer digital services and solutions, physical shipping is not applicable.</p>

          <br />

          <h2><strong>1. Service Delivery</strong></h2>
          <br />
          <p>All our AI Agents and workflow automation solutions are delivered digitally. Upon project completion, you will receive access to your solution through the agreed-upon channels, which may include:</p>
          <ul>
            <li>Direct integration with your existing platforms (e.g., CRM, WhatsApp).</li>
            <li>Access to a cloud-based dashboard or control panel.</li>
            <li>Email delivery of reports or relevant credentials.</li>
          </ul>
          <p>Project timelines and delivery milestones will be outlined in your service agreement.</p>
          <br />

          <h2><strong>2. Exchange Policy</strong></h2>
          <br />
          <p>Due to the custom nature of our digital services, we do not offer exchanges. However, we are committed to ensuring your satisfaction and provide revisions as outlined below.</p>
          
          <br />

          <h2><strong>3. Revisions & Modifications</strong></h2>
          <br />
          <p>We believe in getting it right. Your project scope will include a set number of revisions to ensure the final solution meets your expectations. The revision process is as follows:</p>
          <ul>
            <li><strong>Initial Delivery:</strong> We will deliver the first version of your automation solution.</li>
            <li><strong>Feedback:</strong> You provide feedback and request changes based on the agreed-upon project scope.</li>
            <li><strong>Implementation:</strong> We implement the requested revisions.</li>
          </ul>
          <p>Any requests for changes or new features that fall outside the original scope of work may be subject to additional fees. We will always provide a clear quote for any out-of-scope work before proceeding.</p>

          <br />

          <h2><strong>4. Contact Us</strong></h2>
          <br />
          <p>If you have any questions about our delivery process or revision policy, please contact us:</p>
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
