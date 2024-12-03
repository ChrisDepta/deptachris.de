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
        "Hier haben Sie die Möglichkeit, mehr über mich zu erfahren – wer ich bin, welche Leidenschaften mich antreiben und womit ich mich beruflich beschäftige.",
      imageSrc: "/uberMich.webp", // Przykładowe źródło zdjęcia
      id: 1,
      link: "/about",
    },
    {
      title: "Meine Webseiten...",
      description:
        "Entdecken Sie hier meine Projekte im Bereich Webentwicklung und lassen Sie sich von meinen Arbeiten inspirieren.",
      imageSrc: "/technischeFahigkeiten.webp", // Przykładowe źródło zdjęcia
      id: 2,
      link: "/websites",
    },
    {
      title: "Meine Grafiken...",
      description:
        "Hier präsentiere ich Ihnen eine Auswahl meiner grafischen Projekte, die meine Kreativität und mein Können widerspiegeln.",
      imageSrc: "/focus.webp", // Przykładowe źródło zdjęcia
      id: 3,
      link: "/graphics",
    },
    {
      title: "Meine kleine Spiele...",
      description:
        "Eine Sammlung kleiner Spiele, die ich mit Leidenschaft und technischem Know-how entwickelt habe.",
      imageSrc: "/projekte.webp", // Przykładowe źródło zdjęcia
      id: 4,
      link: "/projects",
    },
    {
      title: "Kontaktiere mit mir...",
      description:
        "Erfahren Sie hier, wie Sie mich erreichen können, und treten Sie unkompliziert mit mir in Kontakt.",
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
          className={` w-full min-h-[30vh] relative cursor-pointer overflow-hidden shadow-[rgb(var(--accent-rgb))]-xl transition-transform duration-300 border border-[rgb(var(--border-rgb))] 
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
          <div className="relative p-6 text-[rgb(var(--foreground-rgb))] flex flex-col">
            <h2 className="w-full text-[rgb(var(--accent-rgb))] text-xl lg:text-3xl font-semibold mb-2 backdrop-blur-xl inline-block px-2 lg:px-6 py-2 bg-[rgb(var(--background-start-rgb))] rounded-md shadow-md">
              {section.title}
            </h2>
            {/* Opis pokazuje się tylko po kliknięciu */}
            {expandedSection === section.id && (
              <>
                <p
                  className="my-8 grow-0 text:lg md:text-xl text-[rgb(var(--foreground-rgb))] transition-opacity duration-500 ease-in-out backdrop-blur-xl inline-block px-6 py-2 bg-[rgb(var(--background-start-rgb))] rounded-md shadow-md"
                  dangerouslySetInnerHTML={{ __html: section.description }} // Umożliwia wyświetlanie HTML (np. <br>)
                />
                <Link href={section.link}>
                  <h2 className="w-fill grow-0 text-[rgb(var(--accent-rgb))] text-xl lg:text-3xl font-semibold mb-2 backdrop-blur-xl inline-block px-2 lg:px-6 py-2 bg-[rgb(var(--background-start-rgb))] rounded-md shadow-md">
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
