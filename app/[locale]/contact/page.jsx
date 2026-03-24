"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdznqwd";

const Contact = () => {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState("idle");
  const [service, setService] = useState("");

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: t("infoPhone"),
      description: "(+81)070-9332-6466",
    },
    {
      icon: <FaEnvelope />,
      title: t("infoEmail"),
      description: "d.lamashevskyi@gmail.com",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("service", service);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
        setService("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1.0, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">{t("title")}</h3>
              <p className="text-white/60">{t("description")}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder={t("firstname")}
                  aria-label={t("firstname")}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder={t("lastname")}
                  aria-label={t("lastname")}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder={t("email")}
                  aria-label={t("email")}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder={t("phone")}
                  aria-label={t("phone")}
                />
              </div>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("selectService")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{t("selectService")}</SelectLabel>
                    <SelectItem value="backend">{t("serviceWeb")}</SelectItem>
                    <SelectItem value="cloud">{t("serviceCloud")}</SelectItem>
                    <SelectItem value="ai">{t("serviceVr")}</SelectItem>
                    <SelectItem value="webdesktop">
                      {t("serviceDesktop")}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                name="message"
                placeholder={t("message")}
                aria-label={t("message")}
                required
              />

              <div className="flex items-center justify-between">
                {status === "success" && (
                  <p className="text-accent text-sm">{t("success")}</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm">{t("error")}</p>
                )}
                {status !== "success" && status !== "error" && <span />}
                <Button
                  type="submit"
                  size="md"
                  className="max-w-40"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? t("sending") : t("send")}
                </Button>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
