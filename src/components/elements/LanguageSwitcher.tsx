"use client";
import "@/lib/i18n.client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";



const languages = [
  { code: "en", label: "English", icon: "🇬🇧" },
  { code: "de", label: "Deutsch", icon: "🇩🇪" },
  { code: "pl", label: "Polski", icon: "🇵🇱" },
];


export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  // Update currentLang when i18n.language changes
  useEffect(() => {
    const handleLangChange = (lng: string) => {
      setCurrentLang(lng);
    };
    i18n.on('languageChanged', handleLangChange);
    return () => {
      i18n.off('languageChanged', handleLangChange);
    };
  }, [i18n]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const current = languages.find(l => l.code === currentLang) || languages[0];
  const otherLangs = languages.filter(l => l.code !== current.code);

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-primary/30 bg-background text-foreground font-semibold shadow focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all min-w-[80px] hover:bg-accent/20 relative after:content-[''] after:absolute after:inset-0 after:rounded-lg after:pointer-events-none after:border-2 after:border-primary/40 after:blur-sm"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-lg">{current.icon}</span>
        <span className="text-sm font-bold">{current.label}</span>
        <svg className="ml-1 w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.585l3.71-3.355a.75.75 0 1 1 1.02 1.1l-4.25 3.85a.75.75 0 0 1-1.02 0l-4.25-3.85a.75.75 0 0 1 .02-1.06z"/></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-background border border-primary/30 border-t-0 rounded-lg shadow-lg z-50 overflow-hidden animate-fadeIn">
          {otherLangs.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-accent/80 focus:bg-accent/90 transition-colors font-medium text-foreground"
            >
              <span className="text-lg">{lang.icon}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
