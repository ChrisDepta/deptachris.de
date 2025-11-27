"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import db from "@/db/db.json";

type Section = {
  title: string;
  description: string;
  imageSrc: string; // Dodano dla zdjęć w sekcjach
  id: string;
  key: number;
};

export default function AboutMe() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Funkcja do przełączania sekcji
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Sekcje jako tablica obiektów
  const sections: Section[] = [
    {
      title: "Über mich",
      description: db.about.uberMich,
      imageSrc: "/uberMich.webp",
      id: "uberMich",
      key: 1,
    },
    {
      title: "Technische Fähigkeiten",
      description: db.about.faehigkeiten,
      imageSrc: "/technischeFahigkeiten.webp", // Przykładowe źródło zdjęcia
      id: "technischeFahigkeiten",
      key: 2,
    },
    {
      title: "Meine Herangehensweise",
      description: db.about.fokus,
      imageSrc: "/focus.webp", // Przykładowe źródło zdjęcia
      id: "fokus",
      key: 3,
    },
    {
      title: "Projekte und Erfahrungen",
      description: db.about.projekte,
      imageSrc: "/projekte.webp", // Przykładowe źródło zdjęcia
      id: "projekte",
      key: 4,
    },
    {
      title: "Warum ich?",
      description: db.about.warumIch,
      imageSrc: "/warumIch.webp", // Przykładowe źródło zdjęcia
      id: "warumIch",
      key: 5,
    },
  ];

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
            Über
          </motion.span>
          {" "}
          <motion.span
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block text-primary"
          >
            mich
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium"
        >
          Frontend Entwickler & Webdesigner aus Nürnberg
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Entdecken Sie meinen Werdegang, meine technischen Fähigkeiten und die Leidenschaft, 
          die mich jeden Tag dazu antreibt, moderne und benutzerfreundliche Webanwendungen zu entwickeln.
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
                    dangerouslySetInnerHTML={{ __html: section.description }}
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
                  {expandedSection === section.id ? 'Weniger anzeigen' : 'Mehr erfahren'}
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
