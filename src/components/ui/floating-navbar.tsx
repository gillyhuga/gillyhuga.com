"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { Sun, Moon } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
  isHidden,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
  isHidden?: boolean;
}) => {
  const [visible] = useState(true);
  const { theme, setTheme } = useTheme();
  const { locale, toggleLocale } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible && !isHidden ? 0 : -100,
          opacity: visible && !isHidden ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => {
          const isInternal = navItem.link.startsWith("#");

          const handleScroll = (e: React.MouseEvent) => {
            if (isInternal) {
              e.preventDefault();
              const targetId = navItem.link.replace("#", "");
              const element = document.getElementById(targetId);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }
          };

          return (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              onClick={handleScroll}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 cursor-pointer"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
            </Link>
          );
        })}
        <div className="flex items-center space-x-1 pl-2 ml-2 sm:pl-4 sm:ml-4 sm:border-l border-neutral-200 dark:border-white/[0.2]">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
            ) : (
              <div className="h-4 w-4" />
            )}
          </button>

          <button
            onClick={toggleLocale}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-base font-medium text-neutral-600 dark:text-neutral-300"
            aria-label="Toggle language"
          >
            {mounted ? (locale === "en" ? "🇬🇧" : "🇮🇩") : <div className="h-4 w-4" />}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
