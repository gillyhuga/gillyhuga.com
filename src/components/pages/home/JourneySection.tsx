"use client";
import React from "react";
import { OrbitingCirclesDemo } from "@/components/pages/home/OrbitingCirclesDemo";
import { useLanguage } from "@/context/LanguageContext";
import { Tooltip } from "@/components/ui/tooltip-card";

export default function JourneySection({ children }: { children?: React.ReactNode }) {
  const { t, locale } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const tooltipData: Record<string, Record<string, string>> = {
    en: {
      "Informatics": "The study of the structure, behavior, and interactions of natural and engineered computational systems.",
      "laboratory assistant": "A role where I mentored junior students in practical programming sessions and maintained lab infrastructure.",
      "Competitive Programming": "A mind sport involving participants trying to program according to provided specifications, focusing on algorithms.",
      "clean and scalable applications": "Applications built with maintainable code, optimized performance, and growth readiness.",
      "impactful digital products": "Software solutions that create meaningful value for users and businesses.",
      "real-world problems": "Practical challenges faced by people or organizations in everyday situations.",
    },
    id: {
      "Informatika": "Bidang ilmu yang berfokus pada pengolahan informasi, rekayasa perangkat lunak, dan arsitektur sistem komputer.",
      "asisten laboratorium": "Peran di mana saya membimbing mahasiswa dalam sesi praktikum pemrograman dan mengelola infrastruktur lab.",
      "Competitive Programming": "Olahraga otak yang menguji kecepatan dan akurasi dalam memecahkan masalah logika serta algoritma kompleks.",
      "aplikasi yang bersih dan skalabel": "Aplikasi dengan kode yang mudah dipelihara, performa optimal, dan siap berkembang.",
      "produk digital yang berdampak": "Solusi perangkat lunak yang memberikan nilai nyata bagi pengguna dan bisnis.",
      "masalah nyata": "Tantangan praktis yang dihadapi oleh individu atau organisasi sehari-hari.",
    }
  };

  const renderWithTooltips = (text: string) => {
    const currentTooltips = tooltipData[locale] || tooltipData.en;
    const keywords = Object.keys(currentTooltips).sort((a, b) => b.length - a.length);
    const regex = new RegExp(`(${keywords.join("|")})`, "g");

    const parts = text.split(regex);

    return parts.map((part, i) => {
      if (currentTooltips[part]) {
        if (!mounted) {
          return <strong key={i} className="text-neutral-800 dark:text-neutral-100">{part}</strong>;
        }
        return (
          <Tooltip key={i} content={currentTooltips[part]}>
            <strong className="text-neutral-800 dark:text-neutral-100 cursor-help border-b border-dotted border-neutral-400 dark:border-neutral-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              {part}
            </strong>
          </Tooltip>
        );
      }
      return part;
    });
  };

  return (
    <div className="items-center justify-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center">
          <OrbitingCirclesDemo />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100" >
            {t.journey.title}
          </h2>

          <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {renderWithTooltips(t.journey.paragraph1)}
          </div>

          <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {renderWithTooltips(t.journey.paragraph2)}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
