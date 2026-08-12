"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { useLocale, useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Services");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const services = t.raw("items");

  return (
    <section className="py-14 xl:py-20">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h1 className="h2 mb-5 mt-4">{t("title")}</h1>
          <p className="text-white/55">{t("description")}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.num}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.38, delay: index * 0.06 }}
              className="surface-card group flex min-h-[300px] flex-col p-7 transition-colors hover:border-accent/35 sm:p-9"
            >
              <div className="mb-auto flex items-start justify-between">
                <span className="text-sm font-bold text-accent">{service.num}</span>
                <Link
                  href={`/${locale}/contact`}
                  aria-label={`${t("cta")}: ${service.title}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-primary"
                >
                  <BsArrowUpRight />
                </Link>
              </div>
              <h2 className="mt-10 text-2xl font-bold leading-tight">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/50">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.focus.map((item) => <span key={item} className="tech-pill">{item}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
