import { AgentPromptAnimation } from "@/components/agent-prompt-animation";

export function AgentPromptSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AgentPromptAnimation />
        </div>
      </div>
    </section>
  );
}
