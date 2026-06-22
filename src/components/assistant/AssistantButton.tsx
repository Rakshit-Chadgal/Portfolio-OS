"use client";

import { useState } from "react";
import AssistantPanel from "./AssistantPanel";

export default function AssistantButton() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <AssistantPanel
        open={open}
      />

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-indigo-600 shadow-2xl transition hover:scale-110"
      >
        AI
      </button>
    </>
  );
}