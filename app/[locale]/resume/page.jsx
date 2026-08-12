"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const t = useTranslations("Resume");
  const reduceMotion = useReducedMotion();
  const experience = t.raw("experience.items");
  const education = t.raw("education.items");
  const groups = t.raw("skills.groups");
  const highlights = t.raw("about.highlights");

  return (
    <section className="py-14 xl:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="grid gap-8 xl:grid-cols-[0.76fr_1.24fr]"
        >
          <aside className="xl:sticky xl:top-28 xl:self-start">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h1 className="h2 mb-5 mt-4">{t("title")}</h1>
            <p className="text-sm leading-7 text-white/55">{t("description")}</p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row xl:flex-col">
              <Button asChild size="lg" className="flex gap-2">
                <a href="/assets/Lamashevskyi_Dmytro_CV_Master_4P_ENG.pdf" download><FiDownload />{t("downloadMaster")}</a>
              </Button>
              <a href="/assets/Lamashevskyi_Dmytro_CV_2026_JPN.pdf" download className="text-xs text-white/45 underline-offset-4 hover:text-accent hover:underline">
                {t("downloadJapanese")}
              </a>
            </div>
            <div className="surface-card mt-8 p-6">
              <h2 className="font-bold">{t("about.title")}</h2>
              <p className="mt-3 text-xs leading-6 text-white/50">{t("about.description")}</p>
              <ul className="mt-5 space-y-3 text-xs text-white/65">
                {highlights.map((item) => <li key={item} className="flex gap-3"><span className="text-accent">+</span>{item}</li>)}
              </ul>
            </div>
          </aside>

          <div className="space-y-12">
            <section>
              <h2 className="mb-6 text-2xl font-bold">{t("experience.title")}</h2>
              <div className="space-y-4">
                {experience.map((item, index) => (
                  <motion.article
                    key={`${item.company}-${item.duration}`}
                    initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: reduceMotion ? 0 : 0.35, delay: Math.min(index * 0.04, 0.16) }}
                    className="surface-card p-6"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div><h3 className="font-bold">{item.position}</h3><p className="mt-1 text-sm text-white/55">{item.company}</p></div>
                      <span className="text-xs font-semibold text-accent">{item.duration}</span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/50">{item.highlight}</p>
                  </motion.article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold">{t("skills.title")}</h2>
              <p className="mb-6 text-sm text-white/45">{t("skills.description")}</p>
              <div className="grid gap-4 md:grid-cols-2">
                {groups.map((group) => (
                  <div key={group.title} className="surface-card p-5">
                    <h3 className="text-sm font-bold text-accent">{group.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => <span key={item} className="tech-pill">{item}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold">{t("education.title")}</h2>
              <div className="grid gap-4">
                {education.map((item) => (
                  <div key={`${item.institution}-${item.duration}`} className="surface-card flex flex-col justify-between gap-3 p-5 sm:flex-row sm:items-start">
                    <div><h3 className="font-semibold">{item.degree}</h3><p className="mt-1 text-sm text-white/50">{item.institution}</p></div>
                    <span className="text-xs text-accent">{item.duration}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
