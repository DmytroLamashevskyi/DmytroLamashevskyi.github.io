"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useTranslations } from "next-intl";

const projectData = [
  {
    live: "https://school-ai.jp/",
    github: null,
    stack: [".NET 8", "AWS Lambda", "Bedrock", "SQS", "React"],
    accent: "from-emerald-400/25 via-cyan-400/10 to-transparent",
  },
  {
    live: null,
    github: "https://github.com/DmytroLamashevskyi/KaigiAI",
    stack: ["Rust", "Tauri v2", "whisper.cpp", "llama.cpp", "React"],
    accent: "from-violet-400/25 via-blue-400/10 to-transparent",
  },
  {
    live: "https://orionyx.online/",
    github: null,
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.IO"],
    accent: "from-orange-400/25 via-rose-400/10 to-transparent",
  },
];

const Work = () => {
  const t = useTranslations("Work");
  const reduceMotion = useReducedMotion();
  const content = t.raw("items");
  const projects = projectData.map((project, index) => ({ ...project, ...content[index] }));

  return (
    <section className="py-14 xl:py-20">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h1 className="h2 mb-5 mt-4">{t("title")}</h1>
          <p className="text-white/55">{t("description")}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.42, delay: index * 0.08 }}
              className="surface-card group relative flex min-h-[440px] overflow-hidden p-7"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70 transition-opacity group-hover:opacity-100`} />
              <div className="relative flex w-full flex-col">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-white/45">
                  <span>{project.num}</span><span>{project.category}</span>
                </div>
                <div className="mt-20">
                  <h2 className="text-3xl font-bold">{project.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/55">{project.description}</p>
                </div>
                <div className="mt-auto">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => <span key={item} className="tech-pill">{item}</span>)}
                  </div>
                  <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                    {project.live && (
                      <Link href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-white">
                        {t("liveProject")} <BsArrowUpRight />
                      </Link>
                    )}
                    {project.github && (
                      <Link href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-white">
                        <BsGithub /> {t("githubRepo")}
                      </Link>
                    )}
                    {!project.github && <span className="ml-auto text-[11px] text-white/30">{t("privateRepo")}</span>}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
