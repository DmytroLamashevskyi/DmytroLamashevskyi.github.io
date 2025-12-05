"use client";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaDocker,
  FaWindows,
  FaWpforms,
  FaNetworkWired,
  FaRocket,
  FaGithub,
  FaBootstrap,
  FaSass,FaBrain ,
} from "react-icons/fa";

import {
  SiUnity,
  SiAmazonwebservices,
  SiDotnet,
  SiPostgresql,
  SiOculus,
  SiRabbitmq,
  SiMongodb,
  SiClickhouse,
  SiMicrosoftsqlserver,
  SiTypescript,
  SiNextdotjs,
  SiDevexpress,
  SiXunit,
  SiLangchain,
  SiOpenai,
  SiSelenium,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { LuSplit } from "react-icons/lu";
import { MdOutlineTableView } from "react-icons/md";
import { HiOutlineTruck } from "react-icons/hi";
import { GrConnect } from "react-icons/gr";
import { DiRedis } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrTest } from "react-icons/gr";



const about = {
  title: "About me",
  description:
       "I'm a backend engineer based in Japan, working mostly with .NET, AWS and modern web technologies. I enjoy building reliable systems with clean architecture and clear APIs that are easy to maintain and scale. Outside of work, I recharge by playing the guitar, reading manga and exploring new places. Storytelling in manga and travel both help me stay curious, creative and open-minded — qualities I bring into my engineering work and team collaboration.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dmytro Lamashevskyi",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+81)070-9332-6466",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "d.lamashevskyi@gmail.com",
    },
    {
      fieldName: "County",
      fieldValue: "Japan",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Ukrainian, Russian, Polish, Japanese",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Description about my expirience",
  items: [
    {
      company: "本気モード",
      position: "Back-end Developer",
      duration: "2024.07 - present",
    },
    {
      company: "Devox Software",
      position: "Back-end Developer",
      duration: "2023.02 - 2024.06",
    },
    {
      company: "Cyver.io",
      position: "Back-end Developer",
      duration: "2022.12 - 2023.01",
    },
    {
      company: "Whimsy Games",
      position: "Back End Developer",
      duration: "2022.04 - 2022.10",
    },
    {
      company: "Motorola Solutions",
      position: "C# Developer",
      duration: "2021.12 - 2022.10",
    },
    {
      company: "Sollers Consulting",
      position: "Developer",
      duration: "2020.03 - 2021.10 ",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I began my journey studying Computer Engineering, building a foundation in software and electronics. I expanded my skills in computer science, focusing on computing systems, and pursued advanced topics like AI and data analytics, collaborating on diverse projects. These experiences enriched my expertise, adaptability, and broadened my perspective, making me a better engineer and a more adaptable individual.",
  items: [
    {
      institution: "浙江师范大学",
      degree: "Master Computer Science",
      duration: "2021.09 - 2024.06",
    },
    {
      institution: "Politechnika Lubelska",
      degree: "Bachelor of Computer Science",
      duration: "2015.10 - 2020.03",
    },
    {
      institution: "Chernihiv National University of Technology",
      degree: "Bachelor of Computer Engineering",
      duration: "2015.9 - 2018.06",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Tech stack I use for backend, data, cloud, frontend, desktop, testing and AI.",
  skillList: [
    // Backend, Messaging & APIs
    {
      name: "C#, .NET, ASP.NET Core, MVC, Entity Framework",
      category: "Backend, Messaging & APIs",
      icon:  <SiDotnet />,
    },
    {
      name: "REST APIs",
      category: "Backend, Messaging & APIs",
      icon: <TbApi/>,
    },
    {
      name: "RabbitMQ",
      category: "Backend, Messaging & APIs",
      icon: <SiRabbitmq />,
    },

    // Data & Storage
    {
      name: "PostgreSQL",
      category: "Data & Storage",
      icon: <SiPostgresql />,
    },
    {
      name: "MongoDB",
      category: "Data & Storage",
      icon: <SiMongodb />,
    },
    {
      name: "ClickHouse",
      category: "Data & Storage",
      icon: <SiClickhouse />,
    },
    {
      name: "Redis",
      category: "Data & Storage",
      icon: <DiRedis />,
    },

    // Cloud & DevOps
    {
      name: "AWS",
      category: "Cloud & DevOps",
      icon: <SiAmazonwebservices/>,
    },
    {
      name: "Azure",
      category: "Cloud & DevOps",
      icon: <VscAzure/>,
    },
    {
      name: "Docker",
      category: "Cloud & DevOps",
      icon: <FaDocker />,
    },
    {
      name: "CI/CD",
      category: "Cloud & DevOps",
      icon: <FaRocket />,
    },
    {
      name: "Git",
      category: "Cloud & DevOps",
      icon: <FaGithub />,
    },

    // Front-end
    {
      name: "HTML/CSS",
      category: "Front-end",
      icon: <FaHtml5 />,
    },
    {
      name: "Bootstrap",
      category: "Front-end",
      icon: <FaBootstrap />,
    },
    {
      name: "React",
      category: "Front-end",
      icon: <FaReact />,
    },
    {
      name: "TypeScript",
      category: "Front-end",
      icon: <SiTypescript />,
    },
    {
      name: "SASS",
      category: "Front-end",
      icon: <FaSass />,
    },
    {
      name: "Tailwind",
      category: "Front-end",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "Next.js",
      category: "Front-end",
      icon: <SiNextdotjs />,
    },

    // Desktop
    {
      name: "WPF",
      category: "Desktop",
      icon: <FaWpforms />,
    },
    {
      name: "DevExpress",
      category: "Desktop",
      icon: <SiDevexpress />,
    },

    // Testing & AI
    {
      name: "xUnit",
      category: "Testing & AI",
      icon: <GrTest />,
    },
    {
      name: "Amazon Bedrock",
      category: "Testing & AI",
      icon: <FaBrain  />,
    },
    {
      name: "LangChain",
      category: "Testing & AI",
      icon: <SiLangchain />,
    },
    {
      name: "OpenAI",
      category: "Testing & AI",
      icon: <SiOpenai />,
    },
    {
      name: "Selenium",
      category: "Testing & AI",
      icon: <SiSelenium />,
    },
  ],
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex item-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex item-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[780px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
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
