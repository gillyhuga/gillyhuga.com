"use client";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative min-h-screen h-screen flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="container mx-auto text-center">
          <div className="text-4xl md:text-7xl font-bold dark:text-white">
            Gilly Huga Anargya
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            A software engineer mainly focused on web technologies.
          </div>
          <p className="text-gray-600 mx-auto max-w-2xl text-sm md:text-base">
            Experienced Fullstack Engineer / Software Engineer with hands-on expertise in Computer Science. Proficient in Computer Science, I possess a keen interest in tackling complex problems and crafting innovative solutions.
          </p>
          <div className="mt-8 flex justify-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-2"
            >
              <span>Explore Work</span>
            </HoverBorderGradient>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
