"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import db from "@/db/db.json";
import { useTranslation } from "react-i18next";

type Section = {
  title: string;
  description: string;
  moreInfo?: string;
  imageSrc: string; // Dodano dla zdjęć w sekcjach
  id: string;
  key: number;
};

export default function AboutMe() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Funkcja do przełączania sekcji
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Sekcje jako tablica obiektów
  const sections: Section[] = [
    {
      title: t("about.sections.uberMich.title", "Über mich"),
      description: t("about.sections.uberMich.description"),
      moreInfo: t("about.sections.uberMich.moreInfo", ""),
      imageSrc: "/uberMich.webp",
      id: "uberMich",
      key: 1,
    },
    {
      title: t("about.sections.faehigkeiten.title", "Technische Fähigkeiten"),
      description: t("about.sections.faehigkeiten.description"),
      moreInfo: t("about.sections.faehigkeiten.moreInfo", ""),
      imageSrc: "/technischeFahigkeiten.webp",
      id: "technischeFahigkeiten",
      key: 2,
    },
    {
      title: t("about.sections.fokus.title", "Meine Herangehensweise"),
      description: t("about.sections.fokus.description"),
      moreInfo: t("about.sections.fokus.moreInfo", ""),
      imageSrc: "/focus.webp",
      id: "fokus",
      key: 3,
    },
    {
      title: t("about.sections.projekte.title", "Projekte und Erfahrungen"),
      description: t("about.sections.projekte.description"),
      moreInfo: t("about.sections.projekte.moreInfo", ""),
      imageSrc: "/projekte.webp",
      id: "projekte",
      key: 4,
    },
    {
      title: t("about.sections.warumIch.title", "Warum ich?"),
      description: t("about.sections.warumIch.description"),
      moreInfo: t("about.sections.warumIch.moreInfo", ""),
      imageSrc: "/warumIch.webp",
      id: "warumIch",
      key: 5,
    },
  ];

  if (isMobile) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight overflow-hidden"
          >
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block"
            >
              {t("about.header.main", "Über")}
            </motion.span>
            {" "}
            <motion.span
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-block text-primary"
            >
              {t("about.header.highlight", "mich")}
            </motion.span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium"
          >
            {t("about.header.subtitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            {t("about.header.description")}
          </motion.p>
        </motion.div>
        <div className="space-y-20">
          {sections.map((section) => (
            <section key={section.key} className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-4 leading-tight">
                  {section.title}
                </h2>
                <div className="h-1 bg-primary mx-auto rounded-full w-24"></div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <Image
                    src={section.imageSrc}
                    alt={section.title}
                    width={400}
                    height={300}
                    className="rounded-2xl object-cover mx-auto"
                  />
                </div>
                <div className="flex-1 text-lg text-muted-foreground">
                  <p>{section.description}</p>
                  {section.moreInfo && (
                    <p className="mt-4 text-base">{section.moreInfo}</p>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight overflow-hidden"
        >
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block"
          >
            {t("about.header.main", "Über")}
          </motion.span>
          {" "}
          <motion.span
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block text-primary"
          >
            {t("about.header.highlight", "mich")}
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium"
        >
          {t("about.header.subtitle", "Frontend Entwickler & Webdesigner aus Nürnberg")}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          {t("about.header.description", "Entdecken Sie meinen Werdegang, meine technischen Fähigkeiten und die Leidenschaft, die mich jeden Tag dazu antreibt, moderne und benutzerfreundliche Webanwendungen zu entwickeln.")}
        </motion.p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            onClick={() => toggleSection(section.id)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: section.key * 0.1 }}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            className="card group overflow-hidden flex flex-col h-full cursor-pointer"
          >
            {/* Card Image */}
            <div className="relative h-56 overflow-hidden bg-gray-200">
              <Image
                src={section.imageSrc}
                alt={`${section.title} Image`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority={section.key === 1}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Subtle overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                {section.title}
              </h2>
              
              {/* Show preview or full description based on expansion */}
              {expandedSection === section.id ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex-grow"
                >
                  <div 
                    className="text-muted-foreground leading-relaxed prose prose-sm max-w-none prose-p:mb-3"
                    dangerouslySetInnerHTML={{ __html: section.moreInfo && section.moreInfo.length > 0 ? section.moreInfo : section.description }}
                  />
                </motion.div>
              ) : (
                <div className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.description.replace(/<[^>]*>/g, '').substring(0, 120)}...
                  </p>
                </div>
              )}
              
              {/* Action Button */}
              <div className="mt-auto pt-4">
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  {expandedSection === section.id ? t("about.card.less", "Weniger anzeigen") : t("about.card.more", "Mehr erfahren")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d={expandedSection === section.id ? "M5 15l7-7 7 7" : "M9 5l7 7-7 7"} 
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
