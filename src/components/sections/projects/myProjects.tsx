"use client";
import React, { useState } from "react";
import Image from "next/image";
import db from "@/db/db.json";
import Link from "next/link";

type Section = {
  titel: string; // Zmieniono z `title` na `titel`, aby dopasować do pliku JSON
  shortDescription: string; // Zmieniono `description` na `shortDescription`
  image: string; // Zmieniono `imageSrc` na `image`
  id: number; // Typ id jako `number`
  link: string;
};

export default function MyProjects() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  // Funkcja do przełączania sekcji
  const toggleSection = (sectionId: number) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  // Sekcje jako tablica obiektów z JSON-a
  const sections: Section[] = db.projects.spiele;

  return (
    <div className="w-full md:w-[90%] xl:w-[80%] m-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 pt-0 md:pt-48">
      {sections.map((section) => (
        <div
          key={section.id}
          onClick={() => toggleSection(section.id)}
          className={`min-h-[20vh] relative cursor-pointer md:rounded-lg overflow-hidden shadow-[rgb(var(--accent-rgb))]-xl transition-transform duration-300 border border-dcturkis/10 ${
            expandedSection === section.id ? "transform scale-105" : ""
          }`}>
          {/* Obrazek sekcji */}
          <Image
            src={section.image}
            alt={`${section.titel} Image`}
            layout="fill"
            objectFit="cover"
            className="opacity-70 hover:opacity-90 transition-opacity duration-300"
          />

          {/* Overlay na obrazku */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>

          {/* Treść karty */}
          <div className="relative p-6 text-white">
            <h2 className="text-2xl xl:text-3xl font-semibold mb-2 backdrop-blur-xl inline-block px-6 py-2 bg-[rgb(var(--background-start-rgb))] rounded-md shadow-md">
              {section.titel}
            </h2>
            {/* Opis pokazuje się tylko po kliknięciu */}
            {expandedSection === section.id && (
              <p
                className="my-8 text-gray-100 transition-opacity duration-500 ease-in-out backdrop-blur-xl inline-block px-6 py-2 bg-black/50 rounded-md shadow-md"
                dangerouslySetInnerHTML={{ __html: section.shortDescription }} // Umożliwia wyświetlanie HTML (np. <br>)
              />
            )}
            {expandedSection === section.id && (
              <Link href={section.link}>
                <h2
                  className="text-xl font-semibold mb-2 backdrop-blur-xl inline-block px-6 py-2 bg-[rgb(var(--background-start-rgb))] rounded-md shadow-md hover:scale-105 hover:shadow-2xl"
                  // Umożliwia wyświetlanie HTML (np. <br>)
                >
                  Siehe hier...
                </h2>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
