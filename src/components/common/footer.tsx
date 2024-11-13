import React from "react";
import Link from "next/link";
import Image from "next/image";
import deptachrisLogo from "../../../public/simpleLogo.png";
import facebookLogo from "../../../public/fbIcon.webp";
import linkedinLogo from "../../../public/Linkedin.webp";
import githubLogo from "../../../public/gitHubWhite.webp";
import instaLogo from "../../../public/instaIcon.webp";
import ScrollToTopButton from "../elements/scrollTopButton";

function Footer() {
  return (
    <div className=" min-h-[70vh] flex flex-col w-screen justify-end items-center bg-black p-12 pb-6 h-full">
      <div className=" flex items-start justify-evenly w-full">
        <div className="flex items-center justify-center text-4xl font-extrabold ">
          <Image
            src={deptachrisLogo}
            alt="homeLogo"
            width={80}
            height={80}
            className="mr-[-15%]"
          />
          <span className="textShadow">deptachris.de</span>
        </div>
        <div className="flex flex-col text-sm h-full justify-end">
          <Link href="/" className="py-2 hover:text-dcturkis textShadow">
            Start
          </Link>

          <Link href="/about" className="py-2 hover:text-dcturkis textShadow">
            Über mich
          </Link>

          <Link
            href="/websites"
            className="py-2 hover:text-dcturkis textShadow">
            Websites
          </Link>

          <Link
            href="/graphics"
            className="py-2 hover:text-dcturkis textShadow">
            Graphics
          </Link>

          <Link
            href="/projects"
            className="py-2 hover:text-dcturkis textShadow">
            Spiele
          </Link>

          <Link href="/contact" className="py-2 hover:text-dcturkis textShadow">
            Kontakt
          </Link>
        </div>
        <div className="flex flex-col text-xlg justify-end">
          <Link
            href="https://www.facebook.com/profile.php?id=61566083339386"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-4 hover:text-dcturkis textShadow ">
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
            className="flex items-center py-4 hover:text-dcturkis textShadow ">
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
            className="flex items-center py-4 hover:text-dcturkis textShadow ">
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
            className=" flex items-center py-4 hover:text-dcturkis textShadow ">
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
      <div className="pt-24 text-xs w-3/4 flex justify-between items-end">
        <ScrollToTopButton />
        <div>
          <Link
            href="/impressum"
            className="px-12 hover:text-dcturkis textShadow">
            impressum
          </Link>
          <Link href="/datenschutz" className=" hover:text-dcturkis textShadow">
            Datenschutz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
