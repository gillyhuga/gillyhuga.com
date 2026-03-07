"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

export const Tooltip = ({
    content,
    children,
    containerClassName,
}: {
    content: string | React.ReactNode;
    children: React.ReactNode;
    containerClassName?: string;
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const contentRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const calculatePosition = (clientX: number, clientY: number) => {
        if (!contentRef.current) return { x: clientX + 12, y: clientY + 12 };

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const tooltipWidth = 240;
        const tooltipHeight = contentRef.current.scrollHeight;

        let x = clientX + 12;
        let y = clientY + 12;

        if (x + tooltipWidth > viewportWidth) {
            x = clientX - tooltipWidth - 12;
        }
        if (x < 10) x = 10;

        if (y + tooltipHeight > viewportHeight) {
            y = clientY - tooltipHeight - 12;
        }
        if (y < 10) y = 10;

        return { x, y };
    };

    const updateMousePosition = (e: React.MouseEvent | React.TouchEvent) => {
        let clientX, clientY;
        if ("touches" in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const newPos = calculatePosition(clientX, clientY);
        setPosition(newPos);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsVisible(true);
        updateMousePosition(e);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        updateMousePosition(e);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        updateMousePosition(e);
        setIsVisible(true);
    };

    const handleTouchEnd = () => {
        setTimeout(() => setIsVisible(false), 2000);
    };

    return (
        <span
            ref={containerRef}
            className={cn("relative inline cursor-help", containerClassName)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="tooltip"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="pointer-events-none fixed z-[9999] w-max max-w-[min(20rem,80vw)] overflow-hidden rounded-md border border-neutral-200 bg-white/95 p-2 text-sm text-neutral-600 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/95 dark:text-neutral-400"
                        style={{
                            top: position.y,
                            left: position.x,
                        }}
                    >
                        <div ref={contentRef} className="p-2 md:p-3 leading-relaxed">{content}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
};
