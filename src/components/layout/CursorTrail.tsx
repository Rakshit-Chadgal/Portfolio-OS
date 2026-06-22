"use client";

import { useEffect, useState } from "react";

export default function CursorTrail() {
  const [pos, setPos] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[999] h-6 w-6 rounded-full bg-indigo-500/40 blur-md"
      style={{
        left: pos.x,
        top: pos.y,
      }}
    />
  );
}