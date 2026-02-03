import React from "react";
import { OrbitingCirclesDemo } from "@/components/pages/home/OrbitingCirclesDemo";

export default function JourneySection({ children }: { children?: React.ReactNode }) {
  return (
    <div className="items-center justify-center pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center order-1 md:order-1">
          <OrbitingCirclesDemo />
        </div>
        <div className="flex flex-col gap-4 order-2 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-neutral-800" >
            My Journey as a Software Engineer 🚀
          </h2>

          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            My tech journey began with a deep curiosity about how things work on the web.
            I started by building simple landing pages with <strong>HTML, CSS, and JavaScript</strong>,
            then expanded into frameworks like <strong>React.js</strong>, <strong>Angular.js</strong>  and <strong>Next.js</strong> to
            create dynamic and responsive user experiences.
          </p>

          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Today, I focus on creating <strong>clean, efficient, and scalable applications.</strong> From architecting APIs to designing <strong>intuitive dashboards</strong> and integrating <strong>complex systems</strong>, I take pride in transforming ideas into impactful digital products.
          </p>

          {children}
        </div>
      </div>
    </div>
  );
}
