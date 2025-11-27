"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portrait from "@/../public/portrait.webp";

export default function ChrisComponent() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-12"
        >
          {/* Portrait */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-48 h-48 mx-auto"
          >
            <Image
              src={portrait}
              alt="Christoph Depta - Frontend Entwickler"
              fill
              className="rounded-full object-cover ring-4 ring-primary/20 shadow-xl"
              sizes="192px"
              priority
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Christoph{" "}
              <span className="text-primary">Depta</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Frontend Entwickler & UI/UX Designer
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ich erschaffe digitale Erlebnisse, die begeistern und funktionieren.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}