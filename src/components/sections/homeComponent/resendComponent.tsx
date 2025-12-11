"use client";

import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Section = {
  title: string;
  description: string;
  imageSrc: string;
  id: number;
  link: string;
};

const ResendComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.6], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const sections: Section[] = [
    {
      title: t("resend.about.title", "Über mich"),
      description: t("resend.about.description", "Erfahren Sie mehr über meinen Werdegang und meine Leidenschaften."),
      imageSrc: "/uberMich.webp",
      id: 1,
      link: "/about",
    },
    {
      title: t("resend.websites.title", "Meine Webseiten"),
      description: t("resend.websites.description", "Entdecken Sie meine Webentwicklungsprojekte und lassen Sie sich inspirieren."),
      imageSrc: "/technischeFahigkeiten.webp",
      id: 2,
      link: "/websites",
    },
    {
      title: t("resend.graphics.title", "Meine Grafiken"),
      description: t("resend.graphics.description", "Eine Auswahl meiner kreativen grafischen Arbeiten und Designs."),
      imageSrc: "/focus.webp",
      id: 3,
      link: "/graphics",
    },
    {
      title: t("resend.contact.title", "Kontakt"),
      description: t("resend.contact.description", "Treten Sie mit mir in Kontakt für Ihr nächstes Projekt."),
      imageSrc: "/warumIch.webp",
      id: 4,
      link: "/contact",
    },
  ];

  return (
    <motion.section 
      ref={containerRef}
      style={{ y, opacity }}
      className="py-8 px-6 relative z-10 bg-background -mt-12"
    >
      {/* Section Header - Z animacją */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="text-center mb-16 -mt-8"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 overflow-hidden"
        >
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="inline-block"
          >
            {t("resend.header.main", "Meine")}
          </motion.span>
          {" "}
          <motion.span
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="inline-block text-primary"
          >
            {t("resend.header.highlight", "Expertise")}
          </motion.span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          {t("resend.header.description", "Entdecken Sie meine Arbeitsbereiche und Projekte")}
        </motion.p>
      </motion.div>
        <div className="w-full max-w-6xl mx-auto">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="card group overflow-hidden flex flex-col h-full"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={section.imageSrc}
                  alt={section.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {section.description}
                </p>
                
                <div className="mt-auto">
                  <Link href={section.link}>
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      {t("resend.card.button", "Mehr erfahren")}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
    </motion.section>
  );
};

export default ResendComponent;