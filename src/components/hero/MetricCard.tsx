"use client";

import CountUp from "react-countup";

type Props = {
  end: number;
  label: string;
};

export default function MetricCard({
  end,
  label,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <h3 className="text-2xl font-bold">
        <CountUp end={end} duration={2} />+
      </h3>

      <p className="text-sm text-slate-400">
        {label}
      </p>
    </div>
  );
}