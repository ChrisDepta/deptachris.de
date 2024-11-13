"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import portrait from "@/../public/portrait.webp";

export default function ChrisComponent() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Ustawienie rozmiarów okna po stronie klienta
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);

      // Ustawienie początkowej wartości
      handleResize();
      handleScroll();

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="h-screen-minus-200px w-full rounded-t-3xl flex flex-col items-center justify-center bg-gradient-to-b from-black/20 via-black to-black relative overflow-hidden border border-dcturkis/20"
      onMouseMove={handleMouseMove}>
      {/* Efekt świetlnego neonu pod kursorem */}
      <div
        className="pointer-events-none absolute bg-dcturkis rounded-full opacity-75 blur-xl transition-transform duration-100"
        style={{
          width: "50px",
          height: "50px",
          transform: `translate(${
            cursorPosition.x - 0.5 * windowSize.width
          }px, ${
            cursorPosition.y - 100 - 0.5 * windowSize.height + scrollPosition
          }px)`,
        }}
      />

      {/* Portret */}
      <div className="relative z-5 p-8 bg-opacity-50 backdrop-blur-lg rounded-full shadow-lg shadow-dcturkis mb-12">
        <Image
          src={portrait}
          alt="User portrait"
          className="rounded-full"
          width={350}
          height={350}
        />
      </div>
      <h1 className="text-6xl font-extrabold mb-2">Christoph Depta</h1>
      <h2>Software Entwickler</h2>
      <p className="text-xl w-2/3 text-center mt-2">
        {`„Als Frontend-Entwickler aus Leidenschaft finde ich wahres Glück in der Kunst der Umsetzung und dem Leben von Ideen durch Code – denn wenn der Code läuft, läuft auch mein Herz.“`}
      </p>
    </div>
  );
}
