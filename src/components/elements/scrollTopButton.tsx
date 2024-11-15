// components/ScrollToTopButton.tsx
"use client";

import React from "react";

const ScrollToTopButton: React.FC = () => {
  // Funkcja, która przewija stronę na górę
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className=" pb-0 text-2xl text-[rgb(var(--accent-rgb))] font-extrabold border-t border-[rgb(var(--border-rgb))] bg-[rgb(var(--bacground-end-rgb))] shadow-lg shadow-[rgb(var(--shadow-rgb))] hover:scale-125 transition-all duration-500 ">
      ↑
    </button>
  );
};

export default ScrollToTopButton;
