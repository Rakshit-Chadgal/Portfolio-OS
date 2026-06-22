"use client";

import { motion } from "framer-motion";

interface Props {
  index: number;
  title: string;
  category: string;
  description: string;
  video: string;
}

export default function ProjectCard({
  index,
  title,
  category,
  description,
  video,
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="group relative overflow-hidden border-b border-white/10 p-6"
    >
      <div className="grid grid-cols-12 items-center gap-6">

        <div className="col-span-2 relative">

          <span className="font-mono text-indigo-400">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="pointer-events-none absolute left-0 top-8 z-20 hidden w-64 overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl group-hover:block">

            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="h-40 w-full object-cover"
            />

          </div>

        </div>

        <div className="col-span-5">
          <p className="text-xs uppercase tracking-widest text-indigo-400">
            {category}
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {title}
          </h3>

          <p className="mt-2 text-slate-400">
            {description}
          </p>
        </div>

        <div className="col-span-3">
          <span className="rounded-full border border-white/10 px-4 py-2 text-sm">
            Active
          </span>
        </div>

        <div className="col-span-2 text-right">
          <button className="rounded-xl border border-white/10 px-4 py-2">
            View
          </button>
        </div>

      </div>
    </motion.div>
  );
}