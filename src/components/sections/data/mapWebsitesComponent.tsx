"use client";
import db from "@/db/db.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

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
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  
  const websites: WebsitesData = db.websites;
  const data = websites[category];

  if (!data) {
    return <p>Category {category} does not exist</p>;
  }

  const openZoom = (image: string) => {
    setZoomedImage(image);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="card group overflow-hidden flex flex-col h-full border border-primary/20"
          >
            {/* Image at top */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={`/${item.image}`}
                alt={item.titel}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openZoom(item.image)}
              />
            </div>
            
            {/* Content below image */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors capitalize">
                {item.titel}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {item.shortDescription}
              </p>
              
              <div className="flex gap-3 mt-auto">
                <motion.button 
                  onClick={() => openZoom(item.image)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg transition-colors border border-primary/20 font-medium"
                >
                  Vorschau
                </motion.button>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-2"
                >
                  Website besuchen 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modern zoom modal */}
      {zoomedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeZoom}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-7xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={closeZoom}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -top-12 right-0 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-semibold z-10 transition-colors"
            >
              ✕ Schließen
            </motion.button>
            <Image
              src={`/${zoomedImage}`}
              alt="Vollbild Vorschau"
              width={1200}
              height={800}
              className="rounded-xl shadow-2xl object-contain max-h-[90vh]"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
