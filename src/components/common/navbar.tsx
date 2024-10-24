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
          width={40} // Szerokość obrazu
          height={40} // Wysokość obrazu
        />
        <strong className="-ml-6 text-xl">deptachris</strong>
      </Link>
      <div className="flex justify-between items-center  ">
        <ul className="flex text-lg mr-24">
          <li>
            <Link
              href="/"
              className="py-5 px-12 hover:text-dcturkis textShadow ">
              Start
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="py-5 px-12 hover:text-dcturkis textShadow">
              Über mich
            </Link>
          </li>
          <li>
            <Link
              href="/websites"
              className="py-5 px-12 hover:text-dcturkis textShadow">
              Webseiten
            </Link>
          </li>
          <li>
            <Link
              href="/graphics"
              className="py-5 px-12 hover:text-dcturkis textShadow">
              Grafik
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="py-5 px-12 hover:text-dcturkis textShadow">
              Leistungen
            </Link>
          </li>
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
