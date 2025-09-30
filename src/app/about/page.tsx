import type { Metadata } from 'next';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutHeroSection } from "@/components/sections/about/hero-section";
import { StorySection } from "@/components/sections/about/story-section";
import { MissionVisionSection } from "@/components/sections/about/mission-vision-section";
import { ValuesSection } from "@/components/sections/about/values-section";
import { HowWeWorkSection } from "@/components/sections/about/how-we-work-section";
import { StatsSection } from "@/components/sections/about/stats-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: 'About Us – Foxxage | AI Agents & Workflow Automation',
  description: 'Foxxage builds AI Agents and workflow automations that remove busywork, cut costs, and help teams grow. Learn about our mission, values, and how we work.',
  openGraph: {
    title: 'About Us – Foxxage',
    description: 'Foxxage builds AI Agents and workflow automations that remove busywork, cut costs, and help teams grow. Learn about our mission, values, and how we work.',
    images: [{
      url: 'https://foxxage.com/og-image-about.png', // Assuming this will be created
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
  }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"Organization",
            "name":"Foxxage",
            "url":"https://foxxage.com",
            "logo":"https://foxxage.com/favicon.svg",
            "sameAs":["https://instagram.com/foxxage","https://linkedin.com/company/foxxage"],
            "contactPoint":[{"@type":"ContactPoint","email":"hi@foxxage.com","telephone":"+91-90319-98319","contactType":"customer support","areaServed":"Worldwide"}]
          }) }}
        />
      <Header />
      <main className="flex-grow">
        <AboutHeroSection />
        <StorySection />
        <MissionVisionSection />
        <ValuesSection />
        <HowWeWorkSection />
        <StatsSection />
        <CtaSection
          title="Ready to Outfox Work?"
          subtitle="Tell us what’s slowing you down — we’ll build an AI Agent that fixes it."
          buttonText="Build My AI Agent"
          buttonLink="/#contact"
        />
      </main>
      <Footer />
    </div>
  );
}
