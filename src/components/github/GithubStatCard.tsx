type Props = {
  value: string;
  label: string;
};

export default function GithubStatCard({
  value,
  label,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <div className="text-4xl font-bold">
        {value}
      </div>

      <div className="mt-2 text-slate-400">
        {label}
      </div>

    </div>
  );
}