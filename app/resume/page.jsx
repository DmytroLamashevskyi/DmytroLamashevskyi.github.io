"use client";
import { FaHtml5, FaCss3, FaAws, FaReact} from "react-icons/fa";
import { SiUnity, SiDotnet} from "react-icons/si"; 

const about = {
    title: 'About me',
    description: 'Some information about my life and me',
    info:[
        { 
            fieldName: "Name",
            fieldValue: "Dmytro Lamashevskyi"
        },
        { 
            fieldName: "Phone",
            fieldValue: "Value"
        },
        { 
            fieldName: "Line",
            fieldValue: "Value"
        },
        { 
            fieldName: "Experience",
            fieldValue: "5+ Years"
        },
        { 
            fieldName: "Email",
            fieldValue: "d.lamashevskyi@gmail.com"
        },
        { 
            fieldName: "County",
            fieldValue: "Japan"
        }, 
        { 
            fieldName: "Languages",
            fieldValue: "English, Ukrainian, Russian, Polish, Japanese" 
        }, 
    ]

}

const experience = {
    icon:'/assets/resume/badge.svg',
    title: 'My Experience',
    description: "Description about my expirience",
    items: [
        {
            company: "Company Name",
            position: "Developer",
            duration: "2022 - Present",
        },
        {
            company: "Company 2 Name",
            position: "Developer",
            duration: "2022 - Present",
        },
        {
            company: "Company 3 Name",
            position: "Developer",
            duration: "2022 - Present",
        },
        {
            company: "Company 4 Name",
            position: "Developer",
            duration: "2022 - Present",
        },
    ]
}

const education = {
    icon:'/assets/resume/cap.svg',
    title: 'My Education',
    description: "Description about my experience",
    items: [
        {
            institution: "Company Name",
            degree: "Developer",
            duration: "2022 - Present",
        }, 
        {
            institution: "Company Name",
            degree: "Developer",
            duration: "2022 - Present",
        }, 
        {
            institution: "Company Name",
            degree: "Developer",
            duration: "2022 - Present",
        }, 
    ]
}

const skills = {
    title: "My skills",
    description: "",
    skillList:[
        {
            icon: <FaHtml5/>,
            name: "HTML 5"
        },
        {
            icon: <FaCss3/>,
            name: "CSS 3"
        },
        {
            icon: <FaReact/>,
            name: "React"
        },
        {
            icon: <FaAws/>,
            name: "AWS"
        },
        {
            icon: <SiDotnet/>,
            name: "DotNet"
        },
        {
            icon: <SiUnity/>,
            name: "Unity 3D"
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip,TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";  

const Resume = ()=>{
    return(
        <motion.div 
            initial={{opacity:0}} 
            animate=
            {{
                opacity:1,
                transition: {
                    delay:2.4, 
                    duration: 0.4, 
                    ease: "easeIn"  
                }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
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
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item,index)=>{
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex item-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )

                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item,index)=>{
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex item-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )

                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill,index)=>{
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>  
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[780px] mx-auto xl:mx-0">
                                    {
                                        about.info.map((item,index)=>{
                                            return (
                                                <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                    <span className="text-white/60">{item.fieldName}</span>
                                                    <span className="text-xl">{item.fieldValue}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;