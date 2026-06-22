type Props = {
  title: string;
  className: string;
};

export default function FloatingNode({
  title,
  className,
}: Props) {
  return (
    <div
      className={`absolute animate-bounce z-30 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl ${className}`}
    >
      {title}
    </div>
  );
}