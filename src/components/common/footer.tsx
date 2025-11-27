"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import deptachrisLogo from "@/../public/simpleLogo.png";
import facebookLogo from "@/../public/fbIcon.webp";
import linkedinLogo from "@/../public/Linkedin.webp";
import githubLogoLight from "@/../public/gitHubWhite.webp";
import githubLogoDark from "@/../public/gitHubBlack.webp";
import instaLogo from "@/../public/instaIcon.webp";
import ScrollToTopButton from "../elements/scrollTopButton";
import { useTheme } from "@/../ThemeContext";
import ThemeToggle from "../elements/ThemeToggle";

export default function Footer() {
  // sprawdzam jaki jest Theme żeby móc zmienić logo na ciemne lub jasne przy użyciu useTheme
  const { theme } = useTheme();
  let githubLogo = theme === "dark" ? githubLogoLight : githubLogoDark;

  return (
    <div className="min-h-[40vh] flex flex-col w-screen justify-end items-center bg-[hsl(var(--background))] border-t border-[hsl(var(--border))] p-6 md:p-12 pb-6 h-full">
      
      {/* Logo na górze na małych ekranach */}
      <Link
        href="/"
        className="flex items-center justify-center text-3xl md:text-4xl font-extrabold mb-8 md:mb-0 md:hidden hover:scale-105 transition-all duration-200 group"
        aria-label="Zur Startseite"
      >
        <div className="relative mr-3">
          <Image
            src={deptachrisLogo}
            alt="homeLogo"
            width={60}
            height={60}
            className="rounded-xl group-hover:rotate-3 transition-transform duration-200"
          />
        </div>
        <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          deptachris
        </span>
      </Link>

      <div className="flex flex-wrap items-start justify-evenly md:justify-evenly w-full">
        {/* Logo desktop - ukryte na mobile */}
        <Link
          href="/"
          className="hidden md:flex items-center justify-center text-4xl font-extrabold md:basis-1/3 lg:basis-1/2 hover:scale-105 transition-all duration-200 group"
          aria-label="Zur Startseite"
        >
          <div className="relative mr-3 xl:mr-1">
            <Image
              src={deptachrisLogo}
              alt="homeLogo"
              width={80}
              height={80}
              className="rounded-xl group-hover:rotate-3 transition-transform duration-200"
            />
          </div>
          <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            deptachris
          </span>
        </Link>
        
        {/* Menu nawigacji */}
        <div className="flex flex-col text-lg justify-start basis-auto md:basis-1/4 md:mt-0 mt-8">
          <Link
            href="/"
            className="py-2 hover:text-primary transition-colors textShadow">
            Start
          </Link>

          <Link
            href="/about"
            className="py-2 hover:text-primary transition-colors textShadow">
            Über mich
          </Link>

          <Link
            href="/websites"
            className="py-2 hover:text-primary transition-colors textShadow">
            Websites
          </Link>

          <Link
            href="/graphics"
            className="py-2 hover:text-primary transition-colors textShadow">
            Graphics
          </Link>

          <Link
            href="/contact"
            className="py-2 hover:text-primary transition-colors textShadow">
            Kontakt
          </Link>
        </div>
        
        {/* Social media */}
        <div className="flex flex-col text-base md:text-xl justify-start basis-auto md:basis-1/4 md:mt-0 mt-8">
          <Link
            href="https://www.facebook.com/profile.php?id=61566083339386"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-3 md:py-4 hover:text-primary transition-colors textShadow">
            <Image
              src={facebookLogo}
              alt="facebookLogo"
              width={24}
              height={24}
              className="mr-3 md:mr-2"
            />
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com/deptachris.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-3 md:py-4 hover:text-primary transition-colors textShadow">
            <Image
              src={instaLogo}
              alt="instaLogo"
              width={24}
              height={24}
              className="mr-3 md:mr-2"
            />
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/in/christoph-depta-09683221a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-3 md:py-4 hover:text-primary transition-colors textShadow">
            <Image
              src={linkedinLogo}
              alt="linkedinLogo"
              width={24}
              height={24}
              className="mr-3 md:mr-2"
            />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/ChrisDepta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-3 md:py-4 hover:text-primary transition-colors textShadow">
            <Image
              src={githubLogo}
              alt="githubLogo"
              width={24}
              height={24}
              className="mr-3 md:mr-2"
            />
            Github
          </Link>
        </div>
      </div>
      {/* Bottom section */}
      <div className="pb-4 pt-12 md:pt-8 text-xs w-full flex justify-between items-center flex-wrap gap-4">
        <ScrollToTopButton />
        <ThemeToggle />
        <div className="flex gap-6 basis-full md:basis-auto justify-center md:justify-start pt-6 md:pt-0">
          <Link
            href="/impressum"
            className="hover:text-primary transition-colors textShadow">
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="hover:text-primary transition-colors textShadow">
            Datenschutz
          </Link>
        </div>
      </div>
    </div>
  );
}
