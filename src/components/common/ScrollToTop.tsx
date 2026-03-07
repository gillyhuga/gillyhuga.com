"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { cn } from "@/utils/cn";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className={cn(
                        "fixed bottom-8 right-8 z-[1000]",
                        "flex h-12 w-12 items-center justify-center rounded-full",
                        "bg-white/80 dark:bg-black/80 backdrop-blur-md",
                        "border border-neutral-200 dark:border-white/20",
                        "text-neutral-600 dark:text-neutral-400",
                        "shadow-lg transition-all hover:scale-110 active:scale-95",
                        "hover:text-blue-500 dark:hover:text-blue-400"
                    )}
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="h-6 w-6" />

                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 -z-10 rounded-full bg-blue-500/10 blur-xl transition-opacity hover:opacity-100 opacity-0" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
