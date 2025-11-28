"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import portrait from "@/../public/portrait.webp";

export default function ChrisComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="h-screen flex items-end justify-center px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20"
    >
      <motion.div 
        style={{ y, opacity }}
        className="w-full max-w-4xl mx-auto mb-[10vh]"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 md:space-y-12"
        >
          {/* Portrait - Ukryte na mobile */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto hidden md:block"
          >
            <Image
              src={portrait}
              alt="Christoph Depta - Frontend Entwickler"
              fill
              className="rounded-full object-cover ring-1 ring-primary/50 shadow-xl"
              sizes="320px"
              priority
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight overflow-hidden"
            >
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-block"
              >
                Christoph
              </motion.span>
              {" "}
              <motion.span
                initial={{ y: 100, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="inline-block text-primary"
              >
                Depta
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg md:text-2xl text-muted-foreground font-medium"
            >
              Frontend Entwickler & UI/UX Designer
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
            >
              Ich erschaffe digitale Erlebnisse, die begeistern und funktionieren. 
              Mit Leidenschaft für Code und einem Auge für Details verwandle ich Ideen in moderne, benutzerfreundliche Webanwendungen.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}