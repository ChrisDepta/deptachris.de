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
      className=" pb-0 text-4xl text-dcturkis text-extrabold cursor-pointer bg-transparent hover:text-white hover:shadow-2xl hover:scale-125 transition-all duration-500">
      ↑
    </button>
  );
};

export default ScrollToTopButton;
