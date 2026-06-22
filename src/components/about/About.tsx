import FadeIn from "@/components/shared/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <FadeIn>
        <div className="mb-12 flex items-center gap-4">
          <span className="rounded-lg border border-indigo-500/30 px-3 py-1 text-indigo-400">
            #01
          </span>

          <div className="h-px flex-1 bg-white/10" />

          <span className="font-mono text-white/70">
            {"<ABOUT />"}
          </span>
        </div>
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

        <FadeIn>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

            <h2 className="text-4xl font-bold leading-tight">
              Building AI systems,
              intelligent web experiences
              and scalable digital products.
            </h2>

            <p className="mt-8 text-slate-400 leading-relaxed">
              I'm Rakshit Chadgal, a B.Tech AI & ML student at MIET Jammu.

              I enjoy building AI-powered solutions,
              web applications and digital products while continuously learning through certifications, cloud programs and hands-on projects.
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed">
              My goal is to build products, startups
              and content ecosystems that create
              long-term value.
            </p>

          </div>
        </FadeIn>

        <FadeIn>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

            <h3 className="mb-6 text-lg font-semibold">
              Constraints
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex justify-between">
                <span>Location</span>
                <span>Jammu, India</span>
              </div>

              <div className="flex justify-between">
                <span>Focus</span>
                <span>AI & ML</span>
              </div>

              <div className="flex justify-between">
                <span>College</span>
                <span>Model Institute of Engineering and Technology Jammu</span>
              </div>

              <div className="flex justify-between">
                <span>Status</span>
                <span>Open to Projects</span>
              </div>

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}