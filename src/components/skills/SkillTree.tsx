import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import SkillNode from "./SkillNode";

export default function SkillTree() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <Container>

        <SectionHeading
          number="03"
          title="Skill Intelligence"
        />

        <div className="grid gap-6 lg:grid-cols-2">

          <SkillNode
            title="Artificial Intelligence"
            description="Machine Learning, Prompt Engineering, AI Workflows and Intelligent Systems."
          />

          <SkillNode
            title="Web Development"
            description="React, Next.js, TailwindCSS, Full Stack Architecture."
          />

          <SkillNode
            title="Cloud & Infrastructure"
            description="Google Cloud, Deployment, Hosting and Modern Development Workflows."
          />

          <SkillNode
            title="Content Creation"
            description="Branding, Streaming, Video Editing and Digital Growth."
          />

        </div>

      </Container>
    </section>
  );
}