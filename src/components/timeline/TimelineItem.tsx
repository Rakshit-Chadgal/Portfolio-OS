type Props = {
  year: string;
  title: string;
  description: string;
};

export default function TimelineItem({
  year,
  title,
  description,
}: Props) {
  return (
    <div className="relative pl-12">

      <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-indigo-500" />

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">

        <span className="text-sm text-indigo-400">
          {year}
        </span>

        <h3 className="mt-2 text-xl font-bold">
          {title}
        </h3>

        <p className="mt-3 text-slate-400">
          {description}
        </p>

      </div>

    </div>
  );
}