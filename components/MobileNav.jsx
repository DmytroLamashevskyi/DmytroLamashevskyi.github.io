"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import LanguageSwitcher from "./LanguageSwitcher";

const MobileNav = () => {
  const t = useTranslations("Nav");
  const tHeader = useTranslations("Header");
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
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center">
        <div className="mt-20 mb-12 text-center">
          <SheetClose asChild>
            <Link href={`/${locale}`}>
              <h1 className="text-2xl font-semibold">
                {tHeader("name")}<span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                  }
                  text-xl capitalize hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
        <div className="mt-8 flex justify-center">
          <LanguageSwitcher />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
