"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
    const { t } = useLanguage();
    return (
        <AuroraBackground>
            <div className="relative flex flex-col items-center justify-center min-h-screen w-full text-center px-4">
                {/* Glitchy 404 number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative"
                >
                    <span
                        className="text-[10rem] md:text-[16rem] font-black leading-none tracking-tighter
              bg-clip-text text-transparent
              bg-gradient-to-br from-blue-400 via-indigo-400 to-violet-500
              dark:from-blue-300 dark:via-indigo-300 dark:to-violet-400
              select-none"
                    >
                        404
                    </span>
                    {/* Subtle glow behind the number */}
                    <span
                        aria-hidden
                        className="absolute inset-0 text-[10rem] md:text-[16rem] font-black leading-none tracking-tighter
              bg-clip-text text-transparent
              bg-gradient-to-br from-blue-400 via-indigo-400 to-violet-500
              blur-2xl opacity-30 select-none"
                    >
                        404
                    </span>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-3 mt-2"
                >
                    <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100">
                        {t.notFound.title}
                    </h1>
                    <p className="text-neutral-500 dark:text-neutral-400 max-w-md text-base md:text-lg leading-relaxed">
                        {t.notFound.description}
                    </p>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-3 mt-10"
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full
              bg-neutral-900 dark:bg-white
              text-white dark:text-neutral-900
              font-semibold text-sm
              hover:opacity-80
              transition-all duration-200
              shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        <Home className="h-4 w-4 transition-transform group-hover:scale-110" />
                        {t.notFound.backHome}
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full
              border border-neutral-300 dark:border-neutral-700
              text-neutral-700 dark:text-neutral-300
              font-semibold text-sm
              hover:bg-neutral-100 dark:hover:bg-neutral-800
              transition-all duration-200
              hover:-translate-y-0.5"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                        {t.notFound.goBack}
                    </button>
                </motion.div>
            </div>
        </AuroraBackground>
    );
}
