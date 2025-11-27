"use client";
import db from "@/db/db.json";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

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
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  
  const graphics: GraphicsData = db.graphics;
  const data = graphics[category];

  if (!data) {
    return <p>Category {category} not exist</p>;
  }

  const openZoom = (image: string) => {
    setZoomedImage(image);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  const toggleDescription = (id: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const truncateText = (text: string, maxLength: number = 80) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
            className="card group overflow-hidden flex flex-col h-full border border-primary/20"
          >
            {/* Image at top */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={`/${item.image}`}
                alt={item.titel}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openZoom(item.image)}
              />
            </div>
            
            {/* Content below image */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors capitalize">
                {item.titel}
              </h3>
              
              <div className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                {expandedCards.has(item.id) ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.shortDescription}
                  </motion.div>
                ) : (
                  <p>{truncateText(item.shortDescription)}</p>
                )}
                
                {item.shortDescription.length > 80 && (
                  <motion.button
                    onClick={() => toggleDescription(item.id)}
                    whileHover={{ scale: 1.02 }}
                    className="text-primary hover:text-primary/80 text-xs mt-2 font-medium transition-colors"
                  >
                    {expandedCards.has(item.id) ? 'Weniger anzeigen' : 'Mehr lesen'}
                  </motion.button>
                )}
              </div>
              
              <motion.button 
                onClick={() => openZoom(item.image)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full px-3 py-2 rounded-lg font-medium text-sm mt-auto inline-flex items-center justify-center gap-2"
              >
                Vorschau
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>
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
