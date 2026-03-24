"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("Home");

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{t("role")}</span>
            <h1 className="h1 mb-6">
              {t("greeting")} <br />
              <span className="text-accent">{t("fullName")}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">{t("tagline")}</p>
            <div className="flex flex-col items-center xl:flex-row gap-6 xl:gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <a href="/assets/Lamashevskyi_Dmytro_CV_2026_ENG.pdf" download>
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2 text-sm sm:text-base"
                  >
                    <span>{t("downloadCv")}</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <a
                  href="/assets/Lamashevskyi_Dmytro_CV_2026_JPN.pdf"
                  download
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2 text-sm sm:text-base"
                  >
                    <span>{t("downloadCvJp")}</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
              </div>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
                  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
