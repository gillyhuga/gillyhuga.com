import React from "react";
import { OrbitingCirclesDemo } from "@/components/pages/home/OrbitingCirclesDemo";

export default function JourneySection({ children }: { children?: React.ReactNode }) {
  return (
    <div className="items-center justify-center pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center">
          <OrbitingCirclesDemo />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold dark:text-white">
            My Journey as a Software Engineer 🚀
          </h2>

          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            My tech journey began with a deep curiosity about how things work on the web.
            I started by building simple landing pages with <strong>HTML, CSS, and JavaScript</strong>,
            then expanded into frameworks like <strong>React.js</strong>, <strong>Angular.js</strong>  and <strong>Next.js</strong> to
            create dynamic and responsive user experiences.
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Today, I’m passionate about crafting clean, efficient, and scalable solutions.
            Whether it’s architecting APIs, designing intuitive dashboards, or integrating
            complex logistics systems — I enjoy turning ideas into impactful products.
          </p>

          {children}
        </div>
      </div>
    </div>
  );
}
