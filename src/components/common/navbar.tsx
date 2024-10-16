import React from "react";
import Link from "next/link";
import Image from "next/image";
import deptachrisLogo from "../../../public/simpleLogo.png";

function Nav() {
  return (
    <nav className=" z-10 backdrop-filter backdrop-blur-md fixed w-screen mx-auto p-4 px-8 flex items-center justify-between h-20">
      <Link
        href="/"
        className="font-extrabold text-xl flex items-center justify-between">
        <Image
          src={deptachrisLogo}
          alt="Opis obrazu" // Opis alternatywny dla dostępności
          width={50} // Szerokość obrazu
          height={50} // Wysokość obrazu
        />
        <strong className="-ml-8 text-2xl">deptachris.de</strong>
      </Link>
      <div className="flex justify-between items-center  ">
        <ul className="flex text-xl mr-20">
          <li>
            <Link
              href="/"
              className="py-5 px-12 hover:text-dcturkis textShadow ">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="py-5 px-12 hover:text-dcturkis textShadow">
              About me
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="py-5 px-12 hover:text-dcturkis textShadow">
              Projects
            </Link>
          </li>
          {/* <li>
            <Link
              href="/contact "
              className="py-5 px-12 hover:text-dcturkis textShadow">
              Contact
            </Link>
          </li> */}
        </ul>
        <div className="flex justify-center items-center w-auto h-full">
          <Link href="/contact" className="schreibeButton">
            schreibe
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
