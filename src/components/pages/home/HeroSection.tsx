"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-7xl font-bold text-neutral-800 dark:text-neutral-100">
        Gilly Huga Anargya
      </h1>
      <p className="font-extralight text-base md:text-4xl text-neutral-600 dark:text-neutral-300 py-4">
        {t.hero.tagline}
      </p>
      <p className="text-neutral-600 dark:text-neutral-300 mx-auto max-w-2xl text-sm md:text-base px-4">
        {t.hero.description}
      </p>

      {/* <div className="mt-8 flex justify-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-2"
        >
          <span>Explore Work</span>
        </HoverBorderGradient>
      </div> */}
    </div>
  );
}
