"use client";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { useLanguage } from "@/context/LanguageContext";

export function CollaborationFooter() {
  const { t } = useLanguage();

  return (
    <div className="h-auto min-h-[24rem] flex flex-col justify-center items-center text-center px-6 py-12 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
      <h2 className="text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 max-w-4xl leading-tight">
        {t.collaboration.heading} <br className="block sm:hidden" />
        <span className="inline-block">
          <FlipWords words={t.collaboration.flipWords} />
        </span> {t.collaboration.together}
      </h2>

      <p className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
        {t.collaboration.subheading}
      </p>

      <a
        href="mailto:hello@gillyhuga.com"
        className="mt-6 inline-block px-6 py-3 rounded-xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
      >
        {t.collaboration.cta}
      </a>
    </div>
  );
}
