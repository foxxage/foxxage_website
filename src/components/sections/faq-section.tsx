import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is an AI Agent?",
    answer: "An AI Agent is like a smart digital teammate. It can chat with customers, answer questions, capture leads, and even perform tasks — all automatically, 24/7."
  },
  {
    question: "How can automation help my business?",
    answer: "Automation removes repetitive, boring tasks so you can focus on growth. Think: no more manual copy-pasting, no more missed leads, and no more answering the same questions over and over."
  },
  {
    question: "Do I need technical skills to use Foxxage solutions?",
    answer: "Nope 🦊 — we handle the technical setup for you. You just tell us what you need automated, and we deliver a ready-to-use system."
  },
  {
    question: "Can you integrate with the tools I already use?",
    answer: "Yes! We integrate with CRMs, WhatsApp, Gmail, Slack, Google Sheets, HubSpot, Notion, and dozens of other tools. If it has an API, we can connect it."
  },
  {
    question: "How long does it take to set up?",
    answer: "Most projects are ready in a few days to a couple of weeks, depending on complexity. No long IT timelines."
  },
  {
    question: "Is this affordable for small businesses?",
    answer: "Absolutely. We design solutions to be cost-effective and scalable — so you only pay for what you actually need."
  },
  {
    question: "What if I need changes later?",
    answer: "No problem. We can add new automations, tweak existing workflows, or expand your setup as your business grows."
  },
  {
    question: "Do AI Agents replace my employees?",
    answer: "AI Agents don’t replace your whole team — but they can take over repetitive, time-consuming tasks, so you don’t need to hire extra staff for busywork. This means lower costs, fewer errors, and faster response times, all while keeping your business lean and efficient."
  },
  {
    question: "Is my data safe?",
    answer: "Yes. We use secure integrations and industry best practices to keep your data protected. Your privacy and confidentiality are a top priority."
  },
  {
    question: "How do we get started?",
    answer: "Easy — click “Build My AI Agent”, tell us about your workflow or problem, and we’ll design your first automation or AI Agent."
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`} className="glass-card animated-outline rounded-2xl px-6 border-b-0 mb-0">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
