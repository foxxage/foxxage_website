
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
          <p>Effective Date: 2nd October, 2025</p>
          <br />
          <p>At Foxxage, we provide AI agents and workflow automation services. This Refund & Cancellation Policy explains how clients can cancel services and under what conditions refunds may be issued.</p>
          <br />
          <h2><strong>1. Service Subscriptions</strong></h2>
          <ul>
            <li className="py-2">i) All services are provided on a subscription or project basis as agreed with the client.</li>
            <li className="py-2">ii) Subscriptions renew automatically unless canceled prior to the next billing cycle.</li>
            <li className="py-2">iii) Clients are responsible for payments for all active subscriptions or projects.</li>
          </ul>
          <br />
          <h2><strong>2. Cancellation Policy</strong></h2>
          <ul>
            <li className="py-2">i) Before Service Start: Clients may cancel a service or project before work begins without any charges.</li>
            <li className="py-2">ii) After Service Start: If work has commenced, partial or full charges may apply depending on the effort already performed.</li>
            <li className="py-2">iii) Cancellation requests must be submitted via email to hi@foxxage.com.</li>
          </ul>
          <br />
          <h2><strong>3. Refund Policy</strong></h2>
          <ul>
            <li className="py-2">i) All fees are non-refundable unless otherwise stated.</li>
            <li className="py-2">i) Refunds may be considered only in exceptional circumstances, such as:
              <ul>
                <li className="py-2">- Failure of Foxxage to deliver the services as per the agreed scope.</li>
                <li className="py-2">- Material breach of contract by Foxxage.</li>
              </ul>
            </li>
            <li className="py-2">iii) Refunds, if approved, will be processed to the original payment method within a reasonable time frame.</li>
          </ul>
          <br />
          <h2><strong>4. Modifications & Service Changes</strong></h2>
          <ul>
            <li className="py-2">i) Clients may request modifications to the service or project.</li>
            <li className="py-2">ii) Changes may affect timelines and fees.</li>
            <li className="py-2">iii) Refunds will not be provided for delays or additional work resulting from client-requested modifications.</li>
          </ul>
          <br />
          <h2><strong>5. Force Majeure & Delays</strong></h2>
            <p className="py-2">i) Foxxage is not liable for delays caused by events beyond our reasonable control, including but not limited to:</p>
            <ul>
              <li className="py-2">- Client delays in providing required information</li>
              <li className="py-2">- Technical or connectivity issues</li>
              <li className="py-2">- Acts of God, natural disasters, or government restrictions</li>
            </ul>
          <br />
          <h2><strong>6. Contact for Refunds & Cancellations</strong></h2>
          <p className="py-2">To request cancellation or discuss potential refunds, please contact:</p>
          <p className="py-2">Email: info@foxxage.com</p>
          <p className="py-2">Foxxage will review all requests and respond in a timely manner.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
