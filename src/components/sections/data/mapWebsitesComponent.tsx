"use client";
import db from "@/db/db.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Interfejs dla każdego projektu
interface ProjectItem {
  id: number;
  titel: string;
  link: string;
  image: string;
  shortDescription: string;
}

// Interfejs dla obiektu graphics, z index signature
interface WebsitesData {
  [key: string]: ProjectItem[]; // Zawiera dynamiczny indeks dla kategorii
}

export default function MapWebsitesComponent({
  category,
}: {
  category: string;
}) {
  // Typujemy db.graphics jako GraphicsData
  const websites: WebsitesData = db.websites;

  // Pobranie danych na podstawie przekazanego propsa "category"
  const data = websites[category];

  // Sprawdzanie, czy dane istnieją
  if (!data) {
    return <p>Category {category} not exist</p>;
  }

  // Przechowywanie id widocznych opisów w stanie
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visibleDescriptionId, setVisibleDescriptionId] = useState<
    number | null
  >(null);

  // Funkcja obsługująca wyświetlanie opisu
  const showDescription = (id: number) => {
    // Jeśli kliknięty element jest już widoczny, ukrywamy go, w przeciwnym razie pokazujemy
    setVisibleDescriptionId(visibleDescriptionId === id ? null : id);
  };

  return (
    <div className="flex flex-wrap  w-3/4 justify-start items-start bg-black">
      {data.map((item) => (
        <div
          key={item.id}
          className="p-2 border border-white/10 bg-black shadow-md basis-1/5 overflow-hidden">
          <p className="my-2 font-semibold text-xl first-letter:uppercase">
            {item.titel}
          </p>
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={`/${item.image}`}
              alt={item.titel}
              layout="fill" // Umożliwia automatyczne dostosowanie rozmiaru
              objectFit="cover" // Umożliwia przycięcie obrazu
              className="absolute top-0 left-0 w-full h-full translate-y-0 hover:scale-105 hover:-translate-y-2 transition-all "
            />
          </div>
          <div className="shadow-2xl">
            <p
              className="p-6 hover:text-dcturkis textShadow hover:scale-105 hover:pb-4 transition-all cursor-pointer"
              onClick={() => showDescription(item.id)}>
              {visibleDescriptionId === item.id
                ? "Schlissen..."
                : "Siehe Beschreibung..."}
            </p>
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              Besuche Internetseite
            </Link>
            <p
              id="shortDescription"
              className={`p-4 transition-all duration-500 ${
                visibleDescriptionId === item.id
                  ? "block translate-y-0"
                  : "hidden translate-y-full"
              }`}>
              {item.shortDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
