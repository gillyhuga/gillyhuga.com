import React from "react";
import { Code2, Workflow, Users, Rocket } from "lucide-react";
import { DotBackground } from "@/components/ui/dot-backgorund";

export default function AboutSection() {
    const features = [
        {
            icon: <Code2 className="w-8 h-8 text-neutral-700 dark:text-neutral-300" />,
            title: "2+ years in software engineering",
            desc: "Designing and developing scalable web applications using modern frameworks like React.js, Next.js, Node.js, and Laravel.",
        },
        {
            icon: <Workflow className="w-8 h-8 text-neutral-700 dark:text-neutral-300" />,
            title: "Full-stack problem solving",
            desc: "Experienced in both frontend and backend — transforming business logic into efficient, maintainable code that drives impact.",
        },
        {
            icon: <Users className="w-8 h-8 text-neutral-700 dark:text-neutral-300" />,
            title: "Collaboration & growth",
            desc: "Thrives in agile teams — code reviews, pairing sessions, and open discussions that elevate quality and team synergy.",
        },
        {
            icon: <Rocket className="w-8 h-8 text-neutral-700 dark:text-neutral-300" />,
            title: "Continuous learning",
            desc: "Passionate about exploring new technologies, optimizing systems, and sharing knowledge to drive innovation.",
        },
    ];

    return (
          <DotBackground>
        <section className="text-center py-12">
          
                <div className="mb-12">
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full">
                        About me
                    </span>
                    <h2 className="mt-6 text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                        I craft efficient, scalable, and user-focused
                        <br />
                        web & system solutions
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        I combine software engineering principles, system design, and teamwork
                        <br />
                        to build products that solve real-world problems 🚀
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200 dark:border-gray-700 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 dark:divide-gray-700 max-w-6xl mx-auto rounded-xl overflow-hidden">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="p-8 flex flex-col justify-between items-start text-left h-full min-h-[280px] transition-all duration-300"
                        >
                            <div>
                                {f.icon}
                                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                                    {f.title}
                                </h3>
                            </div>
                            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
           
        </section>
         </DotBackground>
    );
}
