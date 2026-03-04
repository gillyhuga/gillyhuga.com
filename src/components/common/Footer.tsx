"use client";
import React from "react";
import PulseticBadge from "./PulseticBadge";
import { useLanguage } from "@/context/LanguageContext";
import { Github, Linkedin, Instagram } from "lucide-react";

interface FooterProps {
  version?: string;
}

export default function Footer({ version }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-700 py-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
      <div className="flex justify-center items-center gap-4 mb-4">
        <a href="https://instagram.com/gillyhuga" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="Instagram">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://github.com/gillyhuga" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="GitHub">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/gillyhuga" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-3">
        <div>
          © {currentYear}{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-100">
            Gilly Huga Anargya
          </span>
          . {t.footer.rights}
        </div>
      </div>

      <div className="mt-3 flex justify-center items-center gap-3 text-xs text-neutral-500 dark:text-neutral-500">
        {version && <div>{version}</div>}
        <PulseticBadge />
      </div>
    </footer>
  );
}
