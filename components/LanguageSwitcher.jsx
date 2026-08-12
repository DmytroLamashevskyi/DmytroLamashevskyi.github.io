"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const otherLocale = currentLocale === "en" ? "ja" : "en";
  const newPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);

  return (
    <Link
      href={newPath}
      hrefLang={otherLocale}
      aria-label={otherLocale === "ja" ? "日本語に切り替える" : "Switch to English"}
      className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/70 transition-colors hover:border-accent hover:text-accent"
    >
      {otherLocale === "ja" ? "日本語" : "English"}
    </Link>
  );
};

export default LanguageSwitcher;
