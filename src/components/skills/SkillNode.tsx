type Props = {
  title: string;
  description: string;
};

export default function SkillNode({
  title,
  description,
}: Props) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:scale-105 hover:border-indigo-500/40 hover:bg-white/10">

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {description}
      </p>

    </div>
  );
}