import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function CollaborationFooter() {
  const words = ["impactful", "scalable", "creative", "meaningful"];

  return (
    <div className="h-[24rem] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
      <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100">
        Let&apos;s build something<FlipWords words={words}/>together ✨
      </h2>

      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
        Wanna coffee and code together? ☕👨‍💻
      </p>

      <a
        href="mailto:hello@gillyhuga.com"
        className="mt-6 inline-block px-6 py-3 rounded-xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
      >
        Let’s Collaborate
      </a>
    </div>
  );
}
