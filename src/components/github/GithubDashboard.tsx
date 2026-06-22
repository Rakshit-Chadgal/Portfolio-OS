import GithubStatCard from "./GithubStatCard";

export default function GithubDashboard() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 flex items-center gap-4">

          <span className="rounded-lg border border-indigo-500/30 px-3 py-1 text-indigo-400">
            #07
          </span>

          <div className="h-px flex-1 bg-white/10" />

          <span className="font-mono text-white/70">
            {"<GITHUB />"}
          </span>

        </div>

        <h2 className="mb-12 text-5xl font-bold">
          GitHub Intelligence
        </h2>

        <div className="grid gap-6 md:grid-cols-4">

          <GithubStatCard
            value="10+"
            label="Repositories"
          />

          <GithubStatCard
            value="5+"
            label="Projects"
          />

          <GithubStatCard
            value="AI"
            label="Primary Focus"
          />

          <GithubStatCard
            value="2026"
            label="Learning Year"
          />

        </div>

      </div>

    </section>
  );
}