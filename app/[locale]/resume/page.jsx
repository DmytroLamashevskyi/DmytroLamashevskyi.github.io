"use client";

import {
  FaHtml5,
  FaReact,
  FaDocker,
  FaWpforms,
  FaRocket,
  FaGithub,
  FaBootstrap,
  FaSass,
  FaBrain,
} from "react-icons/fa";

import {
  SiAmazonwebservices,
  SiDotnet,
  SiPostgresql,
  SiRabbitmq,
  SiMongodb,
  SiClickhouse,
  SiTypescript,
  SiNextdotjs,
  SiDevexpress,
  SiLangchain,
  SiOpenai,
  SiSelenium,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { DiRedis } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrTest } from "react-icons/gr";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const categoryKeys = ["backend", "data", "cloud", "frontend", "desktop", "testing"];

const skillList = [
  { name: "C#, .NET, ASP.NET Core, MVC, Entity Framework", categoryKey: "backend", icon: <SiDotnet /> },
  { name: "REST APIs", categoryKey: "backend", icon: <TbApi /> },
  { name: "RabbitMQ", categoryKey: "backend", icon: <SiRabbitmq /> },
  { name: "PostgreSQL", categoryKey: "data", icon: <SiPostgresql /> },
  { name: "MongoDB", categoryKey: "data", icon: <SiMongodb /> },
  { name: "ClickHouse", categoryKey: "data", icon: <SiClickhouse /> },
  { name: "Redis", categoryKey: "data", icon: <DiRedis /> },
  { name: "AWS", categoryKey: "cloud", icon: <SiAmazonwebservices /> },
  { name: "Azure", categoryKey: "cloud", icon: <VscAzure /> },
  { name: "Docker", categoryKey: "cloud", icon: <FaDocker /> },
  { name: "CI/CD", categoryKey: "cloud", icon: <FaRocket /> },
  { name: "Git", categoryKey: "cloud", icon: <FaGithub /> },
  { name: "HTML/CSS", categoryKey: "frontend", icon: <FaHtml5 /> },
  { name: "Bootstrap", categoryKey: "frontend", icon: <FaBootstrap /> },
  { name: "React", categoryKey: "frontend", icon: <FaReact /> },
  { name: "TypeScript", categoryKey: "frontend", icon: <SiTypescript /> },
  { name: "SASS", categoryKey: "frontend", icon: <FaSass /> },
  { name: "Tailwind", categoryKey: "frontend", icon: <RiTailwindCssFill /> },
  { name: "Next.js", categoryKey: "frontend", icon: <SiNextdotjs /> },
  { name: "WPF", categoryKey: "desktop", icon: <FaWpforms /> },
  { name: "DevExpress", categoryKey: "desktop", icon: <SiDevexpress /> },
  { name: "xUnit", categoryKey: "testing", icon: <GrTest /> },
  { name: "Amazon Bedrock", categoryKey: "testing", icon: <FaBrain /> },
  { name: "LangChain", categoryKey: "testing", icon: <SiLangchain /> },
  { name: "OpenAI", categoryKey: "testing", icon: <SiOpenai /> },
  { name: "Selenium", categoryKey: "testing", icon: <SiSelenium /> },
];

const Resume = () => {
  const t = useTranslations("Resume");

  const aboutFields = ["name", "phone", "experience", "email", "country", "languages", "japanese"];

  const groupedSkills = categoryKeys.map((key) => ({
    key,
    label: t(`skills.categories.${key}`),
    skills: skillList.filter((s) => s.categoryKey === key),
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{t("tabs.experience")}</TabsTrigger>
            <TabsTrigger value="education">{t("tabs.education")}</TabsTrigger>
            <TabsTrigger value="skills">{t("tabs.skills")}</TabsTrigger>
            <TabsTrigger value="about">{t("tabs.about")}</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t("experience.title")}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t("experience.description")}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="flex flex-col gap-[20px]">
                    {Array.from({ length: 6 }, (_, i) => (
                      <li
                        key={i}
                        className="bg-[#232329] py-6 px-8 rounded-xl flex flex-col gap-2"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1">
                          <h3 className="text-lg font-semibold">
                            {t(`experience.items.${i}.position`)}
                          </h3>
                          <span className="text-accent text-sm">
                            {t(`experience.items.${i}.duration`)}
                          </span>
                        </div>
                        <p className="text-white/80 text-sm">
                          {t(`experience.items.${i}.company`)}
                        </p>
                        <p className="text-white/50 text-sm leading-relaxed mt-1">
                          {t(`experience.items.${i}.highlight`)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t("education.title")}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t("education.description")}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {Array.from({ length: 3 }, (_, i) => (
                      <li
                        key={i}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">
                          {t(`education.items.${i}.duration`)}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {t(`education.items.${i}.degree`)}
                        </h3>
                        <div className="flex item-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full"></span>
                          <p className="text-white/60">
                            {t(`education.items.${i}.institution`)}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills - Grouped by Category */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{t("skills.title")}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {t("skills.description")}
                  </p>
                </div>
                <ScrollArea className="h-[500px]">
                  <div className="flex flex-col gap-8">
                    {groupedSkills.map((group, categoryIndex) => (
                      <motion.div
                        key={group.key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 1.2 + categoryIndex * 0.1,
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                      >
                        <h4 className="text-lg font-semibold text-accent mb-4">
                          {group.label}
                        </h4>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                          {group.skills.map((skill, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay:
                                  1.2 + categoryIndex * 0.1 + index * 0.03,
                                duration: 0.3,
                                ease: "easeOut",
                              }}
                            >
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                    <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                      {skill.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitalize">{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{t("about.title")}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t("about.description")}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[780px] mx-auto xl:mx-0">
                  {aboutFields.map((field, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">
                        {t(`about.fields.${field}`)}
                      </span>
                      <span className="text-xl">
                        {t(`about.values.${field}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
