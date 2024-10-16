import React from "react";
import Link from "next/link";
import Image from "next/image";
import deptachrisLogo from "../../../public/simpleLogo.png";
import facebookLogo from "../../../public/fbIcon.webp";
import linkedinLogo from "../../../public/Linkedin.webp";
import githubLogo from "../../../public/gitHubWhite.webp";

function Footer() {
  return (
    <div className="flex flex-col w-screen justify-end items-center bg-black p-12 h-full ">
      <div className=" flex items-end justify-evenly w-full">
        <div className="flex items-center justify-center text-5xl font-extrabold ">
          <Image
            src={deptachrisLogo}
            alt="homeLogo"
            width={100}
            height={100}
            className="mr-[-15%]"
          />
          <span className="textShadow">deptachris.de</span>
        </div>
        <div className="flex flex-col text-xl h-full justify-end">
          <Link href="/" className="py-2 hover:text-dcturkis textShadow">
            Home
          </Link>

          <Link href="/about" className="py-2 hover:text-dcturkis textShadow">
            About me
          </Link>

          <Link
            href="/projects"
            className="py-2 hover:text-dcturkis textShadow">
            Projects
          </Link>

          <Link href="/contact" className="py-2 hover:text-dcturkis textShadow">
            Contact
          </Link>
        </div>
        <div className="flex flex-col text-2xl justify-end">
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
          {/* <Link
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="py-6 hover:text-dcturkis textShadow"
        >
          Instagram
        </Link> */}
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
      <div className="py-6">
        <Link
          href="/impressum"
          className="px-12 hover:text-dcturkis textShadow">
          impressum
        </Link>
        <Link href="/agb" className=" hover:text-dcturkis textShadow">
          AGB
        </Link>
      </div>
    </div>
  );
}

export default Footer;
