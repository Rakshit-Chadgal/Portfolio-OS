"use client";

const badges = [
  "AI Skills Fest",
  "LookML",
  "Cloud",
  "Data Models",
  "Load Balancing",
  "Collaboration",
];

export default function BadgeRing() {
  return (
    <div className="relative flex h-[500px] items-center justify-center overflow-hidden">

      <div className="absolute h-[300px] w-[300px] animate-spin rounded-full border border-indigo-500/20"
        style={{
          animationDuration: "25s",
        }}
      />

      {badges.map((badge, index) => {
        const angle =
          (index * 360) / badges.length;

        return (
          <div
            key={badge}
            className="absolute"
            style={{
              transform: `
                rotate(${angle}deg)
                translateY(-150px)
              `,
            }}
          >
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              {badge}
            </div>
          </div>
        );
      })}

    </div>
  );
}