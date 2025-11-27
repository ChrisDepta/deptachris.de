"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import deptachrisLogo from "../../../public/simpleLogo.png";

function Nav() {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function classToggle() {
    setMenuActive((prev) => !prev);
  }

  function menuClose() {
    if (menuActive) {
      setMenuActive(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      menuClose();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuActive, menuClose]);

  const navItems = [
    { href: "/", label: "Start" },
    { href: "/about", label: "Über mich" },
    { href: "/websites", label: "Webseiten" },
    { href: "/graphics", label: "Grafik" },
    { href: "/contact", label: "Kontakt" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-[hsl(var(--background))]/90 backdrop-blur-md shadow-lg py-2" 
          : "bg-[hsl(var(--background))]/80 backdrop-blur-md py-4",
        "border-b border-[hsl(var(--border))]"
      )}
    >
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center font-black text-xl lg:text-2xl xl:text-3xl hover:scale-105 transition-all duration-200 group focus:outline-none focus-visible:outline-none rounded-lg p-1 -m-1"
            aria-label="Zur Startseite"
          >
            <div className="relative mr-3">
              <Image
                src={deptachrisLogo}
                alt="deptachris Logo"
                width={55}
                height={55}
                className="rounded-xl group-hover:rotate-3 transition-transform duration-200 lg:w-12 lg:h-12"
                priority
              />
            </div>
            <span className="hidden sm:block bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent text-2xl">
              deptachris
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 rounded-xl text-base lg:text-lg xl:text-xl font-semibold transition-all duration-300 "
              >
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                  {item.label}
                </span>
                <div className="absolute inset-0 bg-secondary/50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <div className="absolute bottom-1 left-0 right-0 h-px overflow-hidden">
                  <div className="nav-underline w-full h-full bg-primary"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative p-3 rounded-xl bg-secondary/50 hover:bg-secondary/80 transition-all duration-300 hover:scale-105"
            onClick={classToggle}
            aria-label={menuActive ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuActive}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menuActive ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-7 h-7 text-foreground"
              >
                {menuActive ? (
                  <X className="w-full h-full" />
                ) : (
                  <Menu className="w-full h-full" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 space-y-3 border-t border-[hsl(var(--border))] mt-4 bg-card/50 rounded-2xl mx-4 px-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="group relative flex items-center px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                      onClick={menuClose}
                    >
                      <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                        {item.label}
                      </span>
                      <div className="absolute inset-0 bg-secondary/50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
                      <svg className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Nav;
