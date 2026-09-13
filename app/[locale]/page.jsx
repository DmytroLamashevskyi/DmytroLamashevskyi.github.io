"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useLocale, useTranslations } from "next-intl";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

const brandCopy = {
  en: {
    role: "Senior Software / Product Engineer | .NET · AI · Cloud · Interactive Systems",
    tagline: "I build software products from business problem to production — distributed backend and cloud systems, applied AI, and interactive experiences. 6+ years across startups, enterprise software and client-specific solution engineering.",
    capabilities: [".NET & product engineering", "AWS & distributed systems", "Applied AI", "Unity & interactive systems", "Legacy modernization"],
  },
  ja: {
    role: "シニアソフトウェア／プロダクトエンジニア | .NET・AI・クラウド・インタラクティブシステム",
    tagline: "ビジネス課題から本番運用まで、分散バックエンド、クラウド、AI、インタラクティブなプロダクトを設計・実装します。スタートアップ、エンタープライズ、顧客別ソリューションで6年以上の実務経験があります。",
    capabilities: [".NET・プロダクト開発", "AWS・分散システム", "AI活用", "Unity・インタラクティブ開発", "レガシー刷新"],
  },
};

const Home = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const copy = brandCopy[locale] ?? brandCopy.en;

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid min-h-[690px] items-center gap-12 py-12 xl:grid-cols-[1.18fr_0.82fr] xl:py-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeOut" }}
            className="order-2 text-center xl:order-none xl:text-left"
          >
            <span className="eyebrow">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(102,247,191,0.85)]" />
              {t("eyebrow")}
            </span>
            <h1 className="h1 mb-6 mt-5">
              {t("greeting")}<br />
              <span className="text-accent">{t("fullName")}</span>
            </h1>
            <p className="mb-3 text-lg font-semibold text-white/90">{copy.role}</p>
            <p className="mx-auto mb-7 max-w-[680px] text-sm leading-7 text-white/60 sm:text-base xl:mx-0">{copy.tagline}</p>
            <div className="mb-8 flex flex-wrap justify-center gap-2 xl:justify-start">
              {copy.capabilities.map((capability) => <span key={capability} className="tech-pill">{capability}</span>)}
            </div>
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center xl:justify-start">
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <Button asChild variant="outline" size="lg" className="flex items-center gap-2 text-sm sm:text-base">
                  <a href="/assets/Lamashevskyi_Dmytro_CV_Master_4P_ENG.pdf" download>
                    <span>{t("downloadMasterCv")}</span>
                    <FiDownload className="text-xl" />
                  </a>
                </Button>
                <Button asChild size="lg"><Link href={`/${locale}/work`}>{t("viewWork")}</Link></Button>
              </div>
              <Social
                containerStyles="flex gap-3"
                iconStyles="w-10 h-10 border border-white/15 rounded-full flex justify-center items-center text-white/70 text-base hover:border-accent hover:text-accent transition-colors"
              />
            </div>
            <a href="/assets/Lamashevskyi_Dmytro_CV_2026_JPN.pdf" download className="mt-5 inline-flex text-xs text-white/45 underline-offset-4 hover:text-accent hover:underline">
              {t("downloadJapaneseCv")}
            </a>
          </motion.div>
          <div className="order-1 flex justify-center xl:order-none xl:justify-end">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
