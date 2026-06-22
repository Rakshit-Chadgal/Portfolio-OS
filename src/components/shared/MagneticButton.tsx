"use client";

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="rounded-xl bg-indigo-600 px-6 py-4 font-semibold transition-all duration-300 hover:scale-105"
    >
      {children}
    </button>
  );
}