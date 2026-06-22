type Props = {
  value: string;
  label: string;
};

export default function StatsCard({
  value,
  label,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
      <div className="text-3xl font-bold">
        {value}
      </div>

      <div className="mt-2 text-sm text-slate-400">
        {label}
      </div>
    </div>
  );
}