"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const Stats = () => {
  const t = useTranslations("Stats");
  const reduceMotion = useReducedMotion();
  const stats = [
    { value: "10-20s", label: t("analytics"), note: t("analyticsNote") },
    { value: "300 MB", label: t("exports"), note: t("exportsNote") },
    { value: "$1.3k/mo", label: t("cloud"), note: t("cloudNote") },
  ];

  return (
    <section className="pb-14 pt-4 xl:pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, delay: index * 0.07 }}
              className="surface-card p-5"
              key={item.value}
            >
              <div className="mb-2 text-2xl font-bold text-accent xl:text-3xl">{item.value}</div>
              <p className="font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/45">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
