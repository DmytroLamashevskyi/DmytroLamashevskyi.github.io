"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const Nav = () => {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const links = [
    { name: t("home"), path: `/${locale}` },
    { name: t("services"), path: `/${locale}/services` },
    { name: t("resume"), path: `/${locale}/resume` },
    { name: t("work"), path: `/${locale}/work` },
    { name: t("contact"), path: `/${locale}/contact` },
  ];

  return (
    <nav className="flex gap-7" aria-label={t("label")}>
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={`${link.path === pathname ? "text-accent after:scale-x-100" : "text-white/70 after:scale-x-0 hover:text-white hover:after:scale-x-100"} relative py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
