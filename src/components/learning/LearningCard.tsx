import ProgressBar from "./ProgressBar";

type Props = {
  title: string;
  description: string;
  progress: number;
};

export default function LearningCard({
  title,
  description,
  progress,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {description}
      </p>

      <ProgressBar value={progress} />

      <div className="mt-3 text-sm text-indigo-400">
        {progress}% Complete
      </div>

    </div>
  );
}