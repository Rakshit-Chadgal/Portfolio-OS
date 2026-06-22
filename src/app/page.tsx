import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import SkillTree from "@/components/skills/SkillTree";
import LearningDashboard from "@/components/learning/LearningDashboard";
import Timeline from "@/components/timeline/Timeline";
import Projects from "@/components/projects/Projects";
import Education from "@/components/certificates/Education";
import Reveal from "@/components/shared/Reveal";
import AssistantButton from "@/components/assistant/AssistantButton";
import BadgeVault from "@/components/certificates/BadgeVault";
import GithubDashboard from "@/components/github/GithubDashboard";
import Contact from "@/components/contact/Contact";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <LearningDashboard />
        </Reveal>

        <Reveal>
          <SkillTree />
        </Reveal>

        <Reveal>
          <Timeline />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Education />
        </Reveal>

        <Reveal>
          <BadgeVault />
        </Reveal>

        <Reveal>
          <GithubDashboard />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
        
      </main>

      <AssistantButton />

      <Footer />
    </>
  );
}