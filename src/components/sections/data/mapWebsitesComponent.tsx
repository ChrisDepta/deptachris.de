"use client";
import db from "@/db/db.json";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();
  
  const websites: WebsitesData = db.websites;
  const data = websites[category];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!data) {
    return <p>Category {category} does not exist</p>;
  }

  const openZoom = (image: string) => {
    setZoomedImage(image);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => {
            // Map db key to translation key (normalize for translation keys)
            let key = item.titel.toLowerCase();
            if (key === "lapaprzyjaciela") key = "lapaprzyjaciela";
            if (key === "cafixo") key = "cafixo";
            if (key === "wozniak-SHK") key = "wozniak";
            if (key === "arborlim") key = "arborlim";
            if (key === "ncoffee") key = "ncoffee";
            if (key === "new-ncoffee") key = "new-ncoffee";
            return (
              <div
                key={item.id}
                className="card group overflow-hidden flex flex-col h-full border border-primary/20"
              >
                {/* Image at top */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={`/${item.image}`}
                    alt={t(`websitesSection.projects.${key}.title`, { defaultValue: item.titel })}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => openZoom(item.image)}
                  />
                </div>
                {/* Content below image */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors capitalize">
                    {t(`websitesSection.projects.${key}.title`, { defaultValue: item.titel })}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {t(`websitesSection.projects.${key}.shortDescription`, { defaultValue: item.shortDescription })}
                  </p>
                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => openZoom(item.image)}
                      className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg transition-colors border border-primary/20 font-medium"
                    >
                      {t("websitesSection.card.preview")}
                    </button>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-2"
                    >
                      {t("websitesSection.card.visit")}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
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
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => {
          // Map db key to translation key (normalize for translation keys)
          let key = item.titel.toLowerCase();
          if (key === "ncoffee.pl") key = "ncoffee";
          if (key === "wozniak shk") key = "wozniak";
          if (key === "arborlim") key = "arborlim";
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="card group overflow-hidden flex flex-col h-full border border-primary/20"
            >
              {/* Image at top */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={`/${item.image}`}
                  alt={t(`websitesSection.projects.${key}.title`, { defaultValue: item.titel })}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openZoom(item.image)}
                />
              </div>
              {/* Content below image */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors capitalize">
                  {t(`websitesSection.projects.${key}.title`, { defaultValue: item.titel })}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {t(`websitesSection.projects.${key}.shortDescription`, { defaultValue: item.shortDescription })}
                </p>
                <div className="flex gap-3 mt-auto">
                  <motion.button 
                    onClick={() => openZoom(item.image)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg transition-colors border border-primary/20 font-medium"
                  >
                    {t("websitesSection.card.preview")}
                  </motion.button>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-2"
                  >
                    {t("websitesSection.card.visit")}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
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
              ✕ {t("websitesSection.card.close")}
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
