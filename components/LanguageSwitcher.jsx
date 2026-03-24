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
      className="text-accent border border-accent rounded-full px-3 py-1 text-sm font-medium hover:bg-accent hover:text-primary transition-all duration-300"
    >
      {otherLocale === "ja" ? "日本語" : "English"}
    </Link>
  );
};

export default LanguageSwitcher;
