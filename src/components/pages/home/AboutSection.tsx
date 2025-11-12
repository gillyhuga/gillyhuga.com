import React from "react";
import { cn } from "@/utils/cn";
import { Code2, Workflow, Users, Rocket } from "lucide-react";
import { DotBackground } from "@/components/ui/dot-backgorund";

export default function AboutSection() {
  const features = [
    {
      title: "2+ years in software engineering",
      description:
        "Designing and developing scalable web applications using modern frameworks like React.js, Next.js, Node.js, and Laravel.",
      icon: <Code2 className="w-8 h-8" />,
    },
    {
      title: "Full-stack problem solving",
      description:
        "Experienced in both frontend and backend — transforming business logic into efficient, maintainable code that drives impact.",
      icon: <Workflow className="w-8 h-8" />,
    },
    {
      title: "Collaboration & growth",
      description:
        "Thrives in agile teams — code reviews, pairing sessions, and open discussions that elevate quality and team synergy.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Continuous learning",
      description:
        "Passionate about exploring new technologies, optimizing systems, and sharing knowledge to drive innovation.",
      icon: <Rocket className="w-8 h-8" />,
    },
  ];

  return (
    <DotBackground>
      <section className="py-12">
        <div className="mb-12 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full">
            About me
          </span>
          <h2 className="mt-6 text-3xl sm:text-5xl font-bold text-neutral-800 dark:text-white">
            I craft efficient, scalable, and user-focused
            <br />
            web & system solutions
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            I combine software engineering principles, system design, and teamwork
            <br />
            to build products that solve real-world problems 🐱
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto border-neutral-200 dark:border-neutral-800">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </section>
    </DotBackground>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="flex-grow justify-between text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
