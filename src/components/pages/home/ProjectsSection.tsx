"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/utils/cn";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

import { useProjects, Project } from "@/hooks/useProjects";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/beams-background";
import { AnimatePresence } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { X, ExternalLink } from "lucide-react";

export function ProjectsSection({ onModalStateChange }: { onModalStateChange?: (isOpen: boolean) => void }) {
    const { t } = useLanguage();
    const { data: projects, loading } = useProjects();
    const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

    React.useEffect(() => {
        onModalStateChange?.(!!selectedProject);
    }, [selectedProject, onModalStateChange]);
    const modalRef = React.useRef<HTMLDivElement>(null);

    useOutsideClick(modalRef, () => setSelectedProject(null));

    // Close modal on escape key
    React.useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedProject(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);



    const HeaderImage = ({ src, alt, className, isWide }: { src: string, alt: string, className?: string, isWide?: boolean }) => (
        <div className={`relative flex w-full h-64 md:h-56 rounded-xl overflow-hidden ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                className={cn(
                    "object-cover transition-all duration-700 ease-in-out group-hover/bento:scale-110 group-hover/bento:rotate-1 group-hover/bento:brightness-110",
                    isWide ? "object-top" : "object-center"
                )}
            />
        </div>
    );

    const SkeletonItem = ({ isWide }: { isWide?: boolean }) => (
        <BentoGridItem
            className={isWide ? "md:col-span-2" : "md:col-span-1"}
            header={<div className="w-full h-64 md:h-56 rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse" />}
            title={<div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />}
            description={
                <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                    <div className="flex gap-2 mt-4">
                        <div className="h-5 w-12 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
                        <div className="h-5 w-16 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
                    </div>
                </div>
            }
        />
    );

    return (
        <div className="py-24 px-4 relative overflow-hidden bg-white dark:bg-black" id="projects">
            <BackgroundBeams />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                            {t.projects.badge}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4 text-gray-800 dark:text-gray-100">
                            {t.projects.heading}
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            {t.projects.subheading}
                        </p>
                    </motion.div>
                </div>

                <BentoGrid>
                    {loading ? (
                        <>
                            <SkeletonItem isWide />
                            <SkeletonItem />
                            <SkeletonItem />
                            <SkeletonItem isWide />
                            <SkeletonItem isWide />
                        </>
                    ) : (
                        (() => {
                            const targetSpans = Math.max(8, Math.ceil(projects.length / 4) * 4);
                            const numWide = targetSpans - projects.length;

                            const wideIndices = projects
                                .map((p, i) => ({ length: p.name.length, index: i }))
                                .sort((a, b) => b.length - a.length)
                                .slice(0, numWide)
                                .map(item => item.index);

                            return projects.map((project, i) => {
                                const isWide = wideIndices.includes(i);
                                return (
                                    <BentoGridItem
                                        key={project.id}
                                        title={project.name}
                                        description={
                                            <div className="flex flex-col gap-2">
                                                <p className="text-sm line-clamp-2">{project.description}</p>
                                                <div className="flex flex-wrap gap-1 mt-2">
                                                    {project.tags.map(tag => (
                                                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 whitespace-nowrap">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        }
                                        header={<HeaderImage src={project.image} alt={project.name} isWide={isWide} />}
                                        className={cn(
                                            "h-full",
                                            "cursor-pointer",
                                            isWide ? "md:col-span-2" : "md:col-span-1"
                                        )}
                                        onClick={() => setSelectedProject(project)}
                                    />
                                );
                            });
                        })()
                    )}
                </BentoGrid>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-neutral-950/60 backdrop-blur-md"
                        />
                        <motion.div
                            ref={modalRef}
                            initial={{ opacity: 0, scale: 0.95, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 40 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2.5rem] bg-white dark:bg-neutral-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-6 top-6 z-30 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 p-2.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-all hover:scale-110 active:scale-95"
                            >
                                <X size={22} />
                            </button>

                            <div className="relative w-full md:w-[55%] h-72 md:h-auto overflow-hidden group">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>

                            <div className="flex-1 flex flex-col p-8 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-full custom-scrollbar">
                                <div className="space-y-6 flex-1">
                                    <div className="space-y-2">
                                        <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 leading-tight">
                                            {selectedProject.name}
                                        </h3>
                                        <div className="flex flex-wrap gap-1.5 mt-4">
                                            {selectedProject.tags.map(tag => (
                                                <span key={tag} className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="h-px w-12 bg-blue-500/30" />

                                    <div className="space-y-4">
                                        <p className="text-sm md:text-base text-neutral-800 dark:text-neutral-200 font-semibold">
                                            Overview
                                        </p>
                                        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {selectedProject.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 md:mt-12 flex items-center justify-between pt-6 border-t border-neutral-100 dark:border-neutral-800">
                                    <a
                                        href={selectedProject.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center gap-3 rounded-2xl bg-neutral-950 dark:bg-white px-8 py-4 text-sm font-bold text-white dark:text-neutral-900 transition-all hover:shadow-[0_12px_24px_-8px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
                                    >
                                        Visit Live Project
                                        <ExternalLink size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
