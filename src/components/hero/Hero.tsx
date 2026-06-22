import TechStack from "./TechStack";
import SocialDock from "./SocialDock";
// Use native image element instead of next/image to avoid missing module in this environment
import FadeIn from "@/components/shared/FadeIn";
import MetricCard from "./MetricCard";
import HeroOrb from "@/components/orb/HeroOrb";
import HeroHUD from "./HeroHUD";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
        
        <FadeIn>

        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-green-400" />

            Available For Projects
        </div>

        <div className="flex flex-col justify-center">

          <span className="mb-4 text-sm tracking-[0.35em] text-indigo-400 uppercase">
            AI • ML • WEB DEVELOPMENT
          </span>
        
          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Rakshit
            <br />
            <span className="text-indigo-500">
              Chadgal
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-slate-400">
            AI & ML enthusiast focused on building
            intelligent systems, modern web experiences,
            automation workflows and future-ready digital products.
          </p>
          <TechStack />

          <div className="mt-10 grid grid-cols-3 gap-4">

            <MetricCard
                end={9}
                label="Certifications"
            />

            <MetricCard
                end={5}
                label="Badges"
            />

            <MetricCard
                end={3}
                label="Projects"
            />

            </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-xl bg-indigo-600 px-6 py-4 font-semibold transition hover:bg-indigo-500">
              View Projects
            </button>

            <a
              href="/resume/Rakshit-Chadgal-Resume.pdf"
              download
              className="rounded-xl border border-white/10 px-6 py-4 font-semibold"
            >
              Download Resume
            </a>

            <div className="mt-8">
                <SocialDock />
            </div>

          </div>
        </div>
        </FadeIn>

        <FadeIn>
        <div className="flex items-center justify-center">

          <div className="relative flex items-center justify-center">

            <HeroOrb />
            <HeroHUD />

            <img
              src="/profile/rakshit.png"
              alt="Rakshit"
              width={420}
              height={420}
              className="relative z-20 rounded-3xl border border-white/10 shadow-2xl"
            />

          </div>

        </div>
        </FadeIn>

      </div>
    </section>
  );
}