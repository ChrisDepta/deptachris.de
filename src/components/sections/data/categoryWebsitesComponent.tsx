"use client";
import { motion } from "framer-motion";
import MapComponent from "@/components/sections/data/mapWebsitesComponent";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function CategoryWebsitesComponent() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-32 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight overflow-hidden"
          >
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block"
            >
              {t("websitesSection.header.main")}
            </motion.span>
            {" "}
            <motion.span
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-block text-primary"
            >
              {t("websitesSection.header.highlight")}
            </motion.span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium"
          >
            {t("websitesSection.header.subtitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            {t("websitesSection.header.description")}
          </motion.p>
        </motion.div>
        <MapComponent category="myProjects" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-32 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight overflow-hidden"
        >
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block"
          >
            {t("websitesSection.header.main")}
          </motion.span>
          {" "}
          <motion.span
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block text-primary"
          >
            {t("websitesSection.header.highlight")}
          </motion.span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium"
        >
          {t("websitesSection.header.subtitle")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
        >
          {t("websitesSection.header.description")}
        </motion.p>
      </motion.div>
      <MapComponent category="myProjects" />
    </div>
  );
}
