type Props = {
  className: string;
};

export default function NeuralLine({
  className,
}: Props) {
  return (
    <div
      className={`absolute h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 opacity-40 ${className}`}
    />
  );
}