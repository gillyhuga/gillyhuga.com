"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CanvasText } from "@/components/ui/canvas-text";

export default function NotFound() {
    const { t } = useLanguage();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <AuroraBackground>
            <div className="relative flex flex-col items-center justify-center min-h-screen w-full text-center px-4 overflow-hidden">
                {/* Modern Canvas 404 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <CanvasText
                        text="404"
                        className="text-[10rem] md:text-[16rem] font-black leading-none tracking-tighter"
                        backgroundClassName="bg-white dark:bg-black"
                        colors={[
                            "#3b82f6", // blue-500
                            "#a5b4fc", // indigo-300
                            "#93c5fd", // blue-300
                            "#ddd6fe", // violet-200
                            "#60a5fa", // blue-400
                        ]}
                        lineGap={6}
                        animationDuration={8}
                        curveIntensity={40}
                    />

                    {/* Subtle outer glow */}
                    <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full z-[-1]" />
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-3 mt-4"
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
