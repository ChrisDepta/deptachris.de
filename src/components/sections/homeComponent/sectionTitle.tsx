"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  highlight?: string;
}

export default function SectionTitle({ title, subtitle, highlight }: SectionTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);

  // Animacja dla każdej litery
  const letters = title.split("");
  const highlightLetters = highlight ? highlight.split("") : [];

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity, scale }}
      className="text-center mb-12 -mt-20 relative z-20 w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 overflow-hidden">
          {/* Animacja każdej litery dla głównego tytułu */}
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 100, opacity: 0, rotateX: 90 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.03,
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                damping: 12,
              }}
              className="inline-block"
              style={{ transformOrigin: "center bottom" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
          {highlight && (
            <>
              {" "}
              {highlightLetters.map((letter, index) => (
                <motion.span
                  key={`highlight-${index}`}
                  initial={{ y: 100, opacity: 0, rotateX: 90 }}
                  whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: (letters.length + index) * 0.03 + 0.2,
                    duration: 0.8,
                    ease: "easeOut",
                    type: "spring",
                    damping: 12,
                  }}
                  className="inline-block text-primary"
                  style={{ transformOrigin: "center bottom" }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </>
          )}
        </h2>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}