"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
      className="relative h-[310px] w-[310px] xl:h-[470px] xl:w-[470px]"
    >
      <div className="absolute inset-2 rounded-[2.5rem] bg-gradient-to-br from-accent/35 via-white/5 to-blue-500/20 blur-2xl" />
      <div className="absolute inset-0 rotate-3 rounded-[2.5rem] border border-accent/25 bg-accent/[0.04]" />
      <div className="absolute inset-3 overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#202027] shadow-2xl">
        <Image
          src="/assets/photo.png"
          priority
          quality={95}
          fill
          sizes="(max-width: 1199px) 310px, 470px"
          alt="Dmytro Lamashevskyi"
          className="object-contain object-bottom"
        />
      </div>
      <div className="absolute -bottom-3 -left-3 rounded-2xl border border-white/10 bg-primary/90 px-4 py-3 text-xs text-white/60 shadow-xl backdrop-blur">
        <span className="mb-1 block text-sm font-semibold text-white">Kagawa, Japan</span>
        UTC+9 - remote friendly
      </div>
    </motion.div>
  );
};

export default Photo;
