"use client";

type Props = {
  open: boolean;
};

export default function AssistantPanel({
  open,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed bottom-28 right-8 z-50 w-80 rounded-3xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl">

      <h3 className="mb-4 text-lg font-bold">
        AI Assistant
      </h3>

      <div className="space-y-3">

        <button className="w-full rounded-xl border border-white/10 p-3 text-left">
          <a
            href="#projects"
            className="block w-full rounded-xl border border-white/10 p-3"
          >
            View Projects
          </a>
        </button>

        <button className="w-full rounded-xl border border-white/10 p-3 text-left">
          <a
            href="#education"
            className="block w-full rounded-xl border border-white/10 p-3"
          >
            View Certificates
          </a>
        </button>

        <button className="w-full rounded-xl border border-white/10 p-3 text-left">
          <a 
            href="/resume/rakshit_resume.pdf"
            download
            className="block w-full rounded-xl border border-white/10 p-3"
          >
            Download Resume
          </a>
        </button>

        <button className="w-full rounded-xl border border-white/10 p-3 text-left">
          Web Development Services
        </button>

        <button className="w-full rounded-xl border border-white/10 p-3 text-left">
          Video Editing Services
        </button>

        <button className="w-full rounded-xl border border-white/10 p-3 text-left">
          Contact Rakshit
        </button>

      </div>

      <div className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-4">

        <h4 className="font-semibold">
            Available Services
        </h4>

        <ul className="mt-3 text-sm text-slate-300">

            <li>
            • Portfolio Websites
            </li>

            <li>
            • AI Integrations
            </li>

            <li>
            • Video Editing
            </li>

        </ul>

        </div>

    </div>

    

  );
}