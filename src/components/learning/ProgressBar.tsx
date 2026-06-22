type Props = {
  value: number;
};

export default function ProgressBar({
  value,
}: Props) {
  return (
    <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-indigo-500 transition-all duration-1000"
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
}