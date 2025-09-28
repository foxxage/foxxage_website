import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer: "We primarily work with startups and small to medium-sized enterprises (SMEs). Our solutions are designed to be scalable and affordable, making them a perfect fit for growing businesses that want to leverage AI and automation without the enterprise-level price tag."
  },
  {
    question: "Is this going to be expensive?",
    answer: "Not at all. We pride ourselves on providing cost-effective solutions. We'll work with your budget to identify the highest-impact automation opportunities, ensuring you get the best return on your investment."
  },
  {
    question: "How long does it take to build an AI agent?",
    answer: "The timeline depends on the complexity of the agent and the integrations required. However, our process is built for speed. Simple agents can often be deployed within a week, while more complex projects may take a few weeks. We'll give you a clear timeline upfront."
  },
  {
    question: "Do I need to be a tech expert to use your services?",
    answer: "Absolutely not! That's what we're here for. We handle all the technical heavy lifting, from setup to integration and maintenance. We deliver a ready-to-use solution and provide the training you need to manage it with ease."
  },
  {
    question: "Can you integrate with the software I already use?",
    answer: "Yes, most likely. We can integrate with hundreds of popular apps, including CRMs, email marketing platforms, payment gateways, and social media tools like WhatsApp. Let us know what you're using, and we'll figure out the best way to connect everything."
  }
];

export function FaqSection() {
  return (
    <section className="py-8 md:py-12" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-foreground/70">Quick answers to common questions.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card animated-outline mb-4 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
