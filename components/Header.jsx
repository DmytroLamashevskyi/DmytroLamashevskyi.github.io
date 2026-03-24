"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${locale}`}>
          <h1 className="text-4xl font-semibold">
            {t("name")} <span className="text-accent">{t("initial")}</span>
          </h1>
        </Link>
        {/* desktop navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <LanguageSwitcher />
          <Link href={`/${locale}/contact`}>
            <Button>{t("hire")}</Button>
          </Link>
        </div>
        {/* mobile navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
