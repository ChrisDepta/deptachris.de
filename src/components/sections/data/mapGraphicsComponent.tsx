"use client";
import db from "@/db/db.json";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  const graphics: GraphicsData = db.graphics;
  const data = graphics[category];

  // Helper to get translated card data by index (translation.json uses 1-based index and 'description')
  const getCardTranslation = (index: number) => ({
    title: t(`graphicsSection.cards.${category}.${index + 1}.title`),
    description: t(`graphicsSection.cards.${category}.${index + 1}.description`)
  });

  // Force re-render on language change
  useEffect(() => {
    // This empty effect ensures the component re-renders on language change
  }, [i18n.language]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!data) {
    return <p>{t('graphicsSection.categoryNotExist', { category })}</p>;
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

  if (isMobile) {
    return (
      <div className="w-full" key={i18n.language}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item, index) => {
            const translation = getCardTranslation(index);
            return (
              <div
                key={item.id}
                className="card group overflow-hidden flex flex-col h-full border border-primary/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/${item.image}`}
                    alt={translation.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="h-auto object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => openZoom(item.image)}
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors capitalize">
                    {translation.title}
                  </h3>
                  <div className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                    {expandedCards.has(item.id) ? (
                      <div>{translation.description}</div>
                    ) : (
                      <p>{truncateText(translation.description)}</p>
                    )}
                    {translation.description.length > 80 && (
                      <button
                        onClick={() => toggleDescription(item.id)}
                        className="text-primary hover:text-primary/80 text-xs mt-2 font-medium transition-colors"
                      >
                        {expandedCards.has(item.id)
                          ? t('graphicsSection.card.less', 'Show less')
                          : t('graphicsSection.card.more', 'Read more')}
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => openZoom(item.image)}
                    className="btn-primary w-full px-3 py-2 rounded-lg font-medium text-sm mt-auto inline-flex items-center justify-center gap-2"
                  >
                    {t('graphicsSection.card.preview', 'Preview')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modern zoom modal (still animated) */}
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
              transition={{ duration: 0.3 }}
              className="relative bg-background rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full max-h-[80vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={`/${zoomedImage}`}
                alt="Zoomed preview"
                width={800}
                height={600}
                className="object-contain w-full h-full"
              />
              <button
                onClick={closeZoom}
                className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
                aria-label="Close preview"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full" key={i18n.language}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => {
          const translation = getCardTranslation(index);
          return (
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
                  alt={translation.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className= "h-auto object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openZoom(item.image)}
                />
              </div>

              {/* Content below image */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors capitalize">
                  {translation.title}
                </h3>

                <div className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                  {expandedCards.has(item.id) ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                        {translation.description}
                    </motion.div>
                  ) : (
                      <p>{truncateText(translation.description)}</p>
                  )}

                    {translation.description.length > 80 && (
                    <motion.button
                      onClick={() => toggleDescription(item.id)}
                      whileHover={{ scale: 1.02 }}
                      className="text-primary hover:text-primary/80 text-xs mt-2 font-medium transition-colors"
                    >
                      {expandedCards.has(item.id)
                        ? t('graphicsSection.card.less', 'Show less')
                        : t('graphicsSection.card.more', 'Read more')}
                    </motion.button>
                  )}
                </div>

                <motion.button
                  onClick={() => openZoom(item.image)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full px-3 py-2 rounded-lg font-medium text-sm mt-auto inline-flex items-center justify-center gap-2"
                >
                  {t('graphicsSection.card.preview', 'Preview')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          );
        })}
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
              ✕ {t('graphicsSection.card.close', 'Close')}
            </motion.button>
            <Image
              src={`/${zoomedImage}`}
              alt={t('graphicsSection.card.fullscreenPreview', 'Fullscreen preview')}
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
