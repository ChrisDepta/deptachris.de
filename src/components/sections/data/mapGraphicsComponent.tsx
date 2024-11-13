/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import db from "@/db/db.json";
import Image from "next/image";
import { useState } from "react";

// Interfejs dla każdego projektu
interface ProjectItem {
  id: number;
  titel: string;
  image: string;
  shortDescription: string;
}

// Interfejs dla obiektu graphics, z index signature
interface GraphicsData {
  [key: string]: ProjectItem[]; // Zawiera dynamiczny indeks dla kategorii
}

export default function MapGraphicsComponent({
  category,
}: {
  category: string;
}) {
  const graphics: GraphicsData = db.graphics;
  const data = graphics[category];

  if (!data) {
    return <p>Category {category} not exist</p>;
  }

  const [visibleDescriptionId, setVisibleDescriptionId] = useState<
    number | null
  >(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const showDescription = (id: number) => {
    setVisibleDescriptionId(visibleDescriptionId === id ? null : id);
  };

  const openZoom = (image: string) => {
    setZoomedImage(image);
    setVisibleDescriptionId(null);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="flex flex-wrap w-3/4 justify-start items-start bg-black">
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
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 w-full h-full transition-all duration-300 hover:scale-110 cursor-pointer"
              onClick={() => openZoom(item.image)} // Open zoom with selected image
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

      {/* Full-screen modal for zoomed image with scrollable support */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-lg"
          onClick={closeZoom} // Close fullscreen when clicking outside image
        >
          <div
            className="relative max-w-full max-h-full overflow-auto scrollbar-hide"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
          >
            <Image
              src={`/${zoomedImage}`}
              alt="Fullscreen Image"
              width={1000} // Set a max width for the image
              height={1000} // Set a max height for the image
              objectFit="contain"
              className="cursor-pointer"
              onClick={closeZoom}
            />
          </div>
        </div>
      )}
    </div>
  );
}
