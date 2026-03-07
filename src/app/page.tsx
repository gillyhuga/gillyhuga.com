"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { User, FileText, House } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { motion } from "framer-motion";
import HeroSection from "@/components/pages/home/HeroSection";
import JourneySection from "@/components/pages/home/JourneySection";
import WakaTimeStats from "@/components/pages/home/WakaTimeStats";
import Footer from "@/components/common/Footer";
import { useWakaTimeData } from "@/hooks/useWakaTimeData";
import AboutSection from "@/components/pages/home/AboutSection";
import { ProjectsSection } from "@/components/pages/home/ProjectsSection";
import { CollaborationFooter } from "@/components/pages/home/CollaborationFooter";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { data, loading, error } = useWakaTimeData();
  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION || "dev";
  const { t } = useLanguage();

  const navItems = [
    {
      name: t.nav.home,
      link: "/",
      icon: <House className="h-4 w-4 text-neutral-500 dark:text-white" />
    },
    {
      name: t.nav.about,
      link: "/about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />
    },
    {
      name: t.nav.blog,
      link: "/blog",
      icon: <FileText className="h-4 w-4 text-neutral-500 dark:text-white" />
    },
  ];

  return (
    <div>
      <FloatingNav navItems={navItems} />

      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative h-[65vh] flex flex-col items-center justify-center"
        >
          <SectionWrapper>
            <HeroSection />
          </SectionWrapper>
        </motion.div>
      </AuroraBackground>

      <div className="bg-gradient-to-b from-white to-white dark:from-zinc-900 dark:to-black">
        <SectionWrapper>
          <JourneySection>
            <WakaTimeStats data={data} loading={loading} />
          </JourneySection>
        </SectionWrapper>
      </div>

      <AboutSection />
      <ProjectsSection />
      <CollaborationFooter />

      <Footer version={appVersion} />
    </div>
  );
}
