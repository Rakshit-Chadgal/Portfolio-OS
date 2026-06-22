const skills = [
  "Python",
  "Machine Learning",
  "Next.js",
  "Web Development",
  "React",
  "AI Agents",
  "Google Cloud",
];

export default function TechStack() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-lg"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}