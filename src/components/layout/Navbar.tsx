import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="font-bold tracking-[0.3em]">
          RC / 2026
        </div>

        <div className="hidden gap-8 md:flex">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-white/10 px-4 py-2">
            Resume
          </button>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}