"use client";
import { motion } from "framer-motion";
import MapComponent from "@/components/sections/data/mapGraphicsComponent";

const categories = [
  { key: "ncoffee", title: "Kaffee und Getränkelieferant - NCOFFEE" },
  { key: "blankenship", title: "Sachverständigenbüro - Blankenship" },
  { key: "damiano", title: "Pizzeria - Damiano" },
  { key: "paluch", title: "Bauunternehmen - Paluch" },
  { key: "pisa", title: "Pizzeria - Pisa" }
];

export default function CategoryComponent() {
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
            Meine
          </motion.span>
          {" "}
          <motion.span
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block text-primary"
          >
            Grafiken
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium"
        >
          Kreative Designs & Visuelle Identitäten
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
        >
          Eine Sammlung meiner grafischen Arbeiten für verschiedene Branchen und Kunden. 
          Von Logos und Corporate Design bis hin zu Werbematerialien – jedes Design wurde mit Fokus auf 
          Markenidentität und visuelle Wirkung entwickelt.
        </motion.p>
      </motion.div>
      
      <div className="space-y-20">
        {categories.map((category, index) => (
          <motion.section 
            key={category.key} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-4 leading-tight">
                {category.title}
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 bg-primary mx-auto rounded-full"
              ></motion.div>
            </motion.div>
            <MapComponent category={category.key} />
          </motion.section>
        ))}
      </div>
    </div>
  );
}
