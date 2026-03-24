"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useTranslations } from "next-intl";

const projectData = [
  {
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "React" },
      { name: "GSAP" },
      { name: "Tailwind" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/Coctails.png",
    live: "https://dmytrolamashevskyi.github.io/coctail-gsap-website",
    github: "https://github.com/DmytroLamashevskyi/coctail-gsap-website",
  },
  {
    stack: [{ name: "HTML" }, { name: "CSS" }],
    image: "/assets/work/ComputerService.png",
    live: "https://dmytrolamashevskyi.github.io/computer-service-front/",
    github: "https://github.com/DmytroLamashevskyi/computer-service-front",
  },
  {
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JS" },
      { name: "Angular" },
    ],
    image: "/assets/work/Cars.png",
    live: "https://github.com/DmytroLamashevskyi/itlogia-premium-cars",
    github: "https://github.com/DmytroLamashevskyi/itlogia-premium-cars",
  },
  {
    stack: [{ name: "WPF" }, { name: ".NET" }],
    image: "/assets/work/ServiceMonitor.png",
    live: null,
    github: "https://github.com/DmytroLamashevskyi/ServiceMonitoring",
  },
];

const Work = () => {
  const t = useTranslations("Work");

  const projects = projectData.map((data, i) => ({
    ...data,
    num: t(`items.${i}.num`),
    category: t(`items.${i}.category`),
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentindex = swiper.activeIndex;
    setProject(projects[currentindex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1.0, ease: "easeIn" },
      }}
      className="mix-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} {t("project")}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t("liveProject")}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("githubRepo")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px] relative group justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={proj.image}
                          fill
                          className="object-cover"
                          alt={`${proj.title} - ${proj.category} project screenshot`}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
