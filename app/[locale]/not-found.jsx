"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const locale = useLocale();
  const t = useTranslations("NotFound");

  return (
    <section className="flex min-h-[70vh] items-center justify-center py-24">
      <div className="container mx-auto text-center">
        <p className="eyebrow">{t("code")}</p>
        <h1 className="mt-4 text-4xl font-bold text-white">{t("title")}</h1>
        <p className="mx-auto mb-10 mt-5 max-w-[540px] text-white/55">{t("description")}</p>
        <Button asChild variant="outline" size="lg"><Link href={`/${locale}`}>{t("back")}</Link></Button>
      </div>
    </section>
  );
};

export default NotFound;
