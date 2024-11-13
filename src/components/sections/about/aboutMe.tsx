"use client";
import React, { useState } from "react";
import Image from "next/image";
import db from "@/db/db.json";

type Section = {
  title: string;
  description: string;
  imageSrc: string; // Dodano dla zdjęć w sekcjach
  id: string;
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
      imageSrc: "/uberMich.webp", // Przykładowe źródło zdjęcia
      id: "uberMich",
    },
    {
      title: "Technische Fähigkeiten",
      description: db.about.faehigkeiten,
      imageSrc: "/technischeFahigkeiten.webp", // Przykładowe źródło zdjęcia
      id: "technischeFahigkeiten",
    },
    {
      title: "Meine Herangehensweise",
      description: db.about.fokus,
      imageSrc: "/focus.webp", // Przykładowe źródło zdjęcia
      id: "fokus",
    },
    {
      title: "Projekte und Erfahrungen",
      description: db.about.projekte,
      imageSrc: "/projekte.webp", // Przykładowe źródło zdjęcia
      id: "projekte",
    },
    {
      title: "Warum ich?",
      description: db.about.warumIch,
      imageSrc: "/warumIch.webp", // Przykładowe źródło zdjęcia
      id: "warumIch",
    },
  ];

  return (
    <div className="w-[90%] md:w-[80%] m-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-8 pt-48">
      {sections.map((section) => (
        <div
          key={section.id}
          onClick={() => toggleSection(section.id)}
          className={`min-h-[20vh] relative cursor-pointer rounded-lg overflow-hidden shadow-dcturkis-xl transition-transform duration-300 border border-dcturkis/10 ${
            expandedSection === section.id ? "transform scale-105" : ""
          }`}>
          {/* Obrazek sekcji */}
          <Image
            src={section.imageSrc}
            alt={`${section.title} Image`}
            layout="fill"
            objectFit="cover"
            className="opacity-70 hover:opacity-90 transition-opacity duration-300"
          />

          {/* Overlay na obrazku */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>

          {/* Treść karty */}
          <div className="relative p-6 text-white">
            <h2 className="text-3xl font-semibold mb-2 backdrop-blur-xl inline-block px-6 py-2 bg-black/50 rounded-md shadow-md">
              {section.title}
            </h2>
            {/* Opis pokazuje się tylko po kliknięciu */}
            {expandedSection === section.id && (
              <p
                className="my-8  text-gray-100 transition-opacity duration-500 ease-in-out backdrop-blur-xl inline-block px-6 py-2 bg-black/50 rounded-md shadow-md"
                dangerouslySetInnerHTML={{ __html: section.description }} // Umożliwia wyświetlanie HTML (np. <br>)
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
