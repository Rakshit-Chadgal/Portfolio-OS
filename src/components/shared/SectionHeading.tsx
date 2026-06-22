type Props = {
  number: string;
  title: string;
};

export default function SectionHeading({
  number,
  title,
}: Props) {
  return (
    <div className="mb-16 flex items-center gap-6">
      <div className="rounded-md border border-white/10 px-3 py-2 text-sm">
        #{number}
      </div>

      <div className="h-px flex-1 bg-white/10" />

      <h2 className="font-mono text-sm uppercase tracking-[0.35em]">
        {title}
      </h2>
    </div>
  );
}