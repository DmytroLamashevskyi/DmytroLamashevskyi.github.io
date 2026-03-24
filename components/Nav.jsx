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
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`
              ${link.path === pathname && "text-accent border-b-2 border-accent"}
              capitalize font-medium hover:text-accent transition-all
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
