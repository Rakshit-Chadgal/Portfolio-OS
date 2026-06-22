import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import CertificateCard from "./CertificateCard";
import BadgeCard from "./BadgeCard";

export default function Education() {
  return (
    <section
      id="education"
      className="py-32"
    >
      <Container>

        <SectionHeading
          number="06"
          title="Education & Certifications"
        />

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="mb-4 text-2xl font-bold">
              MIET Jammu
            </h3>

            <p className="text-slate-400">
              B.Tech Computer Science
              (AI & Machine Learning)
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-white/10 p-4">
                <h4 className="text-2xl font-bold">
                  9+
                </h4>

                <p className="text-sm text-slate-400">
                  Certificates
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-4">
                <h4 className="text-2xl font-bold">
                  5+
                </h4>

                <p className="text-sm text-slate-400">
                  Badges
                </p>
              </div>

            </div>

          </div>

          <div className="grid gap-4">

            <CertificateCard
              title="Machine Learning with Python"
              issuer="LinkedIn Learning"
            />

            <CertificateCard
              title="AI Business Strategy"
              issuer="LinkedIn Learning"
            />

            <CertificateCard
              title="Data Visualization"
              issuer="LinkedIn Learning"
            />

          </div>

        </div>

        <div className="mt-12">

          <h3 className="mb-6 text-xl font-bold">
            Featured Badges
          </h3>

          <div className="mt-10 flex justify-center">

            <a
              href="/certificates"
              className="rounded-2xl border border-white/10 px-6 py-4 transition hover:border-indigo-500/40"
            >
              View All Certificates
            </a>

          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">

            <BadgeCard
              title="AI Skills Fest"
            />

            <BadgeCard
              title="LookML"
            />

            <BadgeCard
              title="Cloud Collaboration"
            />

            <BadgeCard
              title="Load Balancing"
            />

            <BadgeCard
              title="Data Models"
            />

          </div>

        </div>

      </Container>
    </section>
  );
}