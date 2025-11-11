import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function HeroSection() {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-7xl font-bold dark:text-white">
        Gilly Huga Anargya
      </h1>
      <p className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        A software engineer mainly focused on web technologies.
      </p>
      <p className="text-gray-600 mx-auto max-w-2xl text-sm md:text-base">
       Experienced in Computer Science with hands-on expertise in web technologies, I’m driven by curiosity and a desire to turn complex problems into simple, elegant solutions.
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
