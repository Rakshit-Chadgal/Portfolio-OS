"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import FloatingNode from "./FloatingNode";
import NeuralLine from "./NeuralLine";
import OrbScene from "./OrbScene";

export default function HeroOrb() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(
        (e.clientX - window.innerWidth / 2) * 0.01
      );

      mouseY.set(
        (e.clientY - window.innerHeight / 2) * 0.01
      );
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        move
      );
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="absolute flex h-[700px] w-[700px] items-center justify-center"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      {/* Glow */}
      <div className="absolute h-[650px] w-[650px] rounded-full bg-indigo-500/10 blur-[120px]" />

      {/* Glass Ring */}
      <div className="absolute h-[650px] w-[650px] rounded-[40px] border border-white/10 backdrop-blur-sm" />

      {/* Orb */}
      <div className="absolute h-[650px] w-[650px]">
        <OrbScene />
      </div>

      {/* Neural Lines */}
      <NeuralLine className="top-24 left-32 w-40 rotate-12" />

      <NeuralLine className="bottom-24 right-32 w-40 -rotate-12" />

      <NeuralLine className="top-1/2 left-12 w-32" />

      {/* Floating Nodes */}
      <FloatingNode
        title="AI Agents"
        className="-top-8 left-20"
      />

      <FloatingNode
        title="Machine Learning"
        className="top-20 -right-10"
      />

      <FloatingNode
        title="Next.js"
        className="bottom-20 -left-10"
      />

      <FloatingNode
        title="Google Cloud"
        className="-bottom-8 right-20"
      />
    </motion.div>
  );
}