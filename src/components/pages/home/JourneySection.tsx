"use client";
import React from "react";
import { OrbitingCirclesDemo } from "@/components/pages/home/OrbitingCirclesDemo";
import { useLanguage } from "@/context/LanguageContext";

export default function JourneySection({ children }: { children?: React.ReactNode }) {
  const { t } = useLanguage();
  return (
    <div className="items-center justify-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center">
          <OrbitingCirclesDemo />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100" >
            {t.journey.title}
          </h2>

          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.journey.paragraph1.replace('HTML, CSS, and JavaScript', '<strong>HTML, CSS, and JavaScript</strong>').replace('HTML, CSS, dan JavaScript', '<strong>HTML, CSS, dan JavaScript</strong>').replace('React.js', '<strong>React.js</strong>').replace('Angular.js', '<strong>Angular.js</strong>').replace('Next.js', '<strong>Next.js</strong>') }} />

          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.journey.paragraph2.replace('clean, efficient, and scalable applications.', '<strong>clean, efficient, and scalable applications.</strong>').replace('bersih, efisien, dan skalabel.', '<strong>bersih, efisien, dan skalabel.</strong>').replace('intuitive dashboards', '<strong>intuitive dashboards</strong>').replace('dashboard intuitif', '<strong>dashboard intuitif</strong>').replace('complex systems', '<strong>complex systems</strong>').replace('sistem kompleks', '<strong>sistem kompleks</strong>') }} />

          {children}
        </div>
      </div>
    </div>
  );
}
