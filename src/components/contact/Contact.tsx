"use client";

import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-400">
          #06
        </span>

        <span className="text-sm font-semibold tracking-[0.25em] text-slate-400">
          {"<CONTACT />"}
        </span>
      </div>

      <div className="grid gap-20 lg:grid-cols-2">
        {/* Left Side */}

        <div>
          <h2 className="text-6xl font-black leading-[0.95] md:text-7xl">
            Let's build
            <br />
            something
            <br />
            <span className="text-indigo-500">
              secure.
            </span>
          </h2>

          <a
            href="mailto:rakshitchadgal@gmail.com"
            className="mt-12 inline-block border-b-2 border-indigo-500 pb-2 text-2xl font-medium transition hover:text-indigo-400"
          >
            rakshitchadgal@gmail.com
          </a>

          <div className="mt-16">
            <p className="mb-6 text-sm font-bold tracking-[0.3em] text-slate-400">
              SOCIALS
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com"
                target="_blank"
                className="block text-lg text-slate-400 transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="block text-lg text-slate-400 transition hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://x.com"
                target="_blank"
                className="block text-lg text-slate-400 transition hover:text-white"
              >
                X / Twitter ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm font-bold tracking-[0.2em] text-slate-400">
                  NAME
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold tracking-[0.2em] text-slate-400">
                  EMAIL
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-sm font-bold tracking-[0.2em] text-slate-400">
                SUBJECT
              </label>

              <input
                type="text"
                placeholder="What's this about?"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm font-bold tracking-[0.2em] text-slate-400">
                MESSAGE
              </label>

              <textarea
                rows={7}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 px-6 py-5 text-lg font-semibold transition hover:bg-indigo-500"
            >
              <Send size={20} />
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}