import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function RefundCancellationPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="font-bold">Refund & Cancellation Policy</h1>
          <br />
          <p>Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <br />
          <p>At Foxxage, we work hard to deliver high-quality AI Agents and workflow automation solutions. This policy explains how cancellations and refunds work when you purchase our services.</p>

          <br />

          <h2><strong>1. Cancellations</strong></h2>
          <br />
          <ul>
            <li><strong>Before Work Begins:</strong> You may cancel your project before we start working on it for a full refund.</li>
            <br />
            <li><strong>After Work Has Started:</strong> If work has already begun, we may deduct a portion of the payment for the work already completed.</li>
            <br />
            <li><strong>After Delivery:</strong> Once we deliver the completed solution, cancellations are no longer accepted.</li>
          </ul>

          <br />

          <h2><strong>2. Refunds</strong></h2>
          <br />
          <p><strong>Refunds may be issued in the following cases:</strong></p>
          <ul>
            <li>Project is cancelled before work begins → 100% refund.</li>
            <li>Project is partially completed → pro-rated refund based on percentage of work done.</li>
            <li>If we are unable to deliver the agreed solution due to technical reasons on our end, you will receive a full refund.</li>
          </ul>
          <br />
          <p><strong>Refunds are not provided for:</strong></p>
          <ul>
            <li>Change of mind after delivery.</li>
            <li>Client delays, missing information, or failure to provide required inputs.</li>
            <li>Custom integrations or third-party costs already incurred on your behalf.</li>
          </ul>

          <br />

          <h2><strong>3. Revisions</strong></h2>
          <br />
          <p>We offer revisions according to the agreed project scope. Additional revisions or changes outside the original scope may incur extra charges.</p>

          <br />

          <h2><strong>4. How to Request a Refund or Cancellation</strong></h2>
          <br />
          <p>To request a refund or cancel a project:</p>
          <ul>
            <li>📩 Email: hi@foxxage.com</li>
            <li>📞 WhatsApp: +91-90319-98319</li>
          </ul>
          <br />
          <p>We will review your request and process eligible refunds within 7-10 business days.</p>
          
          <br />

          <h2><strong>5. Disputes</strong></h2>
          <br />
          <p>If you are dissatisfied with the service, contact us first so we can resolve the issue. We value fair, friendly solutions and will do our best to make things right.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
