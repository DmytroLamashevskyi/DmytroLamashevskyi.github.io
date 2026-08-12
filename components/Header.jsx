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
    <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-primary/75 py-4 text-white backdrop-blur-xl xl:py-5">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={`/${locale}`} className="group flex items-center gap-3" aria-label={t("homeLabel")}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-primary">
            DL
          </span>
          <span className="hidden text-sm font-semibold leading-tight sm:block">
            Dmytro<br /><span className="text-white/50">Lamashevskyi</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 xl:flex">
          <Nav />
          <LanguageSwitcher />
          <Button asChild><Link href={`/${locale}/contact`}>{t("hire")}</Link></Button>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
