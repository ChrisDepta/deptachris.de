
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";


export default function ChrisComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="h-screen w-screen flex items-end pb-[20vh] justify-center px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20"
    >
      <motion.div
        style={{ y, opacity }}
        className="w-full max-w-4xl mx-auto mb-[10vh] relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 md:space-y-12"
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight overflow-hidden"
            >
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-block"
              >
                {t('hero.firstname', 'Christoph')}
              </motion.span>
              {" "}
              <motion.span
                initial={{ y: 100, opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                className="inline-block text-primary"
              >
                {t('hero.lastname', 'Depta')}
              </motion.span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg md:text-2xl text-muted-foreground font-medium"
            >
              {t('hero.subtitle', 'Frontend Entwickler & UI/UX Designer')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
            >
              {t('hero.description', 'Ich erschaffe digitale Erlebnisse, die begeistern und funktionieren. Mit Leidenschaft f\u00fcr Code und einem Auge f\u00fcr Details verwandle ich Ideen in moderne, benutzerfreundliche Webanwendungen.')}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}