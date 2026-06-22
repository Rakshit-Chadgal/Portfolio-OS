import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <section
      id="journey"
      className="py-32"
    >
      <Container>

        <SectionHeading
          number="04"
          title="Journey Timeline"
        />

        <div className="relative mx-auto max-w-4xl">

          <div className="absolute left-2 top-0 h-full w-[2px] bg-white/10" />

          <div className="space-y-10">

            <TimelineItem
              year="2024"
              title="Started Programming"
              description="Began exploring coding and problem solving."
            />

            <TimelineItem
              year="2025"
              title="AI Exploration"
              description="Started learning Artificial Intelligence and Machine Learning."
            />

            <TimelineItem
              year="2026"
              title="AI Skills Fest"
              description="Earned badges and explored AI ecosystems."
            />

            <TimelineItem
              year="2026"
              title="MIET AI & ML"
              description="Started B.Tech in AI & Machine Learning."
            />

            <TimelineItem
              year="Future"
              title="AI Startup"
              description="Building scalable AI-powered products."
            />

          </div>

        </div>

      </Container>
    </section>
  );
}