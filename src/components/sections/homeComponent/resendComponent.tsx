"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Section = {
  title: string;
  description: string;
  imageSrc: string; // Dodano dla zdjęć w sekcjach
  id: number;
  link: string;
};

export default function ResendComponent() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  // Funkcja do przełączania sekcji
  const toggleSection = (section: number) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Sekcje jako tablica obiektów
  const sections: Section[] = [
    {
      title: "Über mich...",
      description:
        "Hier können Sie mehr über mich erfahren, wer ich bin und womit ich mich beschäftige.",
      imageSrc: "/uberMich.webp", // Przykładowe źródło zdjęcia
      id: 1,
      link: "/about",
    },
    {
      title: "Meine Webseiten...",
      description: "Schauen Sie sich hier meine Projekte für Webseiten an.",
      imageSrc: "/technischeFahigkeiten.webp", // Przykładowe źródło zdjęcia
      id: 2,
      link: "/websites",
    },
    {
      title: "Meine Grafiken...",
      description: "Hier finden Sie eine Auswahl meiner grafischen Projekte.",
      imageSrc: "/focus.webp", // Przykładowe źródło zdjęcia
      id: 3,
      link: "/graphics",
    },
    {
      title: "Meine kleine Spiele...",
      description: "Eine Sammlung kleiner Spiele, die ich entwickelt habe.",
      imageSrc: "/projekte.webp", // Przykładowe źródło zdjęcia
      id: 4,
      link: "/projects",
    },
    {
      title: "Kontaktiere mit mir...",
      description:
        "Erfahren Sie hier, wie Sie mit mir Kontakt aufnehmen können.",
      imageSrc: "/warumIch.webp", // Przykładowe źródło zdjęcia
      id: 5,
      link: "/contact",
    },
  ];

  return (
    <div className="w-full m-auto grid grid-cols-1 md:grid-cols-2">
      {sections.map((section) => (
        <div
          key={section.id}
          onClick={() => toggleSection(section.id)}
          className={` w-full min-h-[30vh] relative cursor-pointer overflow-hidden shadow-dcturkis-xl transition-transform duration-300 border border-[rgb(var(--border-rgb))]  ${
            expandedSection === section.id ? "" : ""
          }
             ${section.id === sections.length ? "md:col-span-2" : ""} 
          `}>
          {/* Obrazek sekcji z powiększeniem po kliknięciu */}
          <Image
            src={section.imageSrc}
            alt={`${section.title} Image`}
            layout="fill"
            objectFit="cover"
            className={`opacity-70 hover:opacity-90 transition-all duration-700 ${
              expandedSection === section.id ? "transform scale-125" : ""
            }`}
          />
          {/* Overlay na obrazku */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
          {/* Treść karty */}
          <div className="relative p-6 text-[rgb(var(--foreground-rgb))]">
            <h2 className="w-full text-[rgb(var(--accent-rgb))] text-xl lg:text-3xl font-semibold mb-2 backdrop-blur-xl inline-block px-2 lg:px-6 py-2 bg-[rgb(var(--background-start-rgb))] rounded-md shadow-md">
              {section.title}
            </h2>
            {/* Opis pokazuje się tylko po kliknięciu */}
            {expandedSection === section.id && (
              <>
                <p
                  className="my-8  text-gray-100 transition-opacity duration-500 ease-in-out backdrop-blur-xl inline-block px-6 py-2 bg-black/50 rounded-md shadow-md"
                  dangerouslySetInnerHTML={{ __html: section.description }} // Umożliwia wyświetlanie HTML (np. <br>)
                />
                <Link href={section.link}>
                  <h2 className="w-fill text-[rgb(var(--accent-rgb))] text-xl lg:text-3xl font-semibold mb-2 backdrop-blur-xl inline-block px-2 lg:px-6 py-2 bg-[rgb(var(--background-start-rgb))] rounded-md shadow-md">
                    Mehr hier...{" "}
                  </h2>
                </Link>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
