export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[220px]" />

      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
    </div>
  );
}