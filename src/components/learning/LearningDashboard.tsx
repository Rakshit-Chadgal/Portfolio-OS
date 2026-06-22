import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import LearningCard from "./LearningCard";

export default function LearningDashboard() {
  return (
    <section className="py-32">

      <Container>

        <SectionHeading
          number="02"
          title="Learning Dashboard"
        />

        <div className="grid gap-6 lg:grid-cols-3">

          <LearningCard
            title="LinkedIn Learning"
            description="Machine Learning, AI Strategy, Excel and Data Visualization."
            progress={21}
          />

          <LearningCard
            title="Google Cloud"
            description="Skills Arcade, LookML, Cloud Collaboration and Infrastructure."
            progress={35}
          />

          <LearningCard
            title="AI Skills Fest"
            description="AI ecosystem exploration and hands-on learning."
            progress={100}
          />

        </div>

      </Container>

    </section>
  );
}