export default function HeroHUD() {
  return (
    <div className="absolute -right-10 bottom-10 z-40 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

      <div className="text-xs text-slate-400">
        SYSTEM STATUS
      </div>

      <div className="mt-2 flex items-center gap-2">

        <div className="h-2 w-2 rounded-full bg-green-400" />

        <span>
          Available For Projects
        </span>

      </div>

      <div className="mt-4 text-sm text-slate-400">
        AI • ML • Web Dev
      </div>

    </div>
  );
}