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
    <div className=" min-h-[70vh] flex flex-col w-screen justify-end items-center bg-[rgb(var(--background-end-rgb))] p-12 pb-6 h-full">
      <div className=" flex flex-wrap items-start justify-between pr-8 md:pr-0 md:justify-evenly w-full">
        <div className="flex items-center justify-center text-4xl font-extrabold basis-full md:basis-1/3 lg:basis-1/2">
          <Image
            src={deptachrisLogo}
            alt="homeLogo"
            width={80}
            height={80}
            className="mr-[-15%] xl:mr-[-5%]"
          />
          <span className="hover:text-[rgb(var(--accent-rgb))] textShadow">
            deptachris
          </span>
        </div>
        <div className="flex flex-col text-lg h-full justify-end mt-12 md:mt-0 basis-1/3 md:basis-1/4">
          <Link
            href="/"
            className="py-2 hover:text-[rgb(var(--accent-rgb))] textShadow">
            Start
          </Link>

          <Link
            href="/about"
            className="py-2 hover:text-[rgb(var(--accent-rgb))] textShadow">
            Über mich
          </Link>

          <Link
            href="/websites"
            className="py-2 hover:text-[rgb(var(--accent-rgb))] textShadow">
            Websites
          </Link>

          <Link
            href="/graphics"
            className="py-2 hover:text-[rgb(var(--accent-rgb))] textShadow">
            Graphics
          </Link>

          <Link
            href="/projects"
            className="py-2 hover:text-[rgb(var(--accent-rgb))] textShadow">
            Spiele
          </Link>

          <Link
            href="/contact"
            className="py-2 hover:text-[rgb(var(--accent-rgb))] textShadow">
            Kontakt
          </Link>
        </div>
        <div className="flex flex-col text-xl justify-end mt-12 md:mt-0 basis-1/3 md:basis-1/4">
          <Link
            href="https://www.facebook.com/profile.php?id=61566083339386"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-4 hover:text-[rgb(var(--accent-rgb))] textShadow ">
            <Image
              src={facebookLogo}
              alt="facebookLogo"
              width={30}
              height={30}
              className="mx-2"
            />
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com/deptachris.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-4 hover:text-[rgb(var(--accent-rgb))] textShadow ">
            <Image
              src={instaLogo}
              alt="instaLogo"
              width={30}
              height={30}
              className="mx-2"
            />
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/in/christoph-depta-09683221a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-4 hover:text-[rgb(var(--accent-rgb))] textShadow ">
            <Image
              src={linkedinLogo}
              alt="linkedinLogo"
              width={30}
              height={30}
              className="mx-2"
            />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/ChrisDepta"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center py-4 hover:text-[rgb(var(--accent-rgb))] textShadow ">
            <Image
              src={githubLogo}
              alt="githubLogo"
              width={30}
              height={30}
              className="mx-2"
            />
            Github
          </Link>
        </div>
      </div>
      <div className="pb-4 pt-24 text-xs w-full 2xl:w-3/4 flex justify-between items-end flex-wrap">
        <ScrollToTopButton />
        <ThemeToggle />
        <div className=" basis-full md:basis-1/4 pt-12 md:pt-0">
          <Link
            href="/impressum"
            className="px-12 hover:text-[rgb(var(--accent-rgb))] textShadow">
            impressum
          </Link>
          <Link
            href="/datenschutz"
            className=" hover:text-[rgb(var(--accent-rgb))] textShadow">
            Datenschutz
          </Link>
        </div>
      </div>
    </div>
  );
}
