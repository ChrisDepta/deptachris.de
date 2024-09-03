import React from "react";
import Link from "next/link";
import Image from "next/image";
import depidevLogo from "../../../public/depidevLogoDark.webp";

function Navbar() {
  return (
    <nav className=" z-10 backdrop-filter backdrop-blur-md fixed w-screen mx-auto p-5 flex items-center justify-between">
      <Link href="/" className="font-extrabold text-xl">
        deptachris
      </Link>
      <ul className="flex text-xl">
        <li>
          <Link href="/projects" className="py-5 px-12">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/about" className="py-5 px-12">
            About me
          </Link>
        </li>
        <li>
          <Link href="/contact " className="py-5 px-12">
            Contact
          </Link>
        </li>
      </ul>
      <Link
        href="/"
        className="font-bold text-sm border-2 py-2 px-5 rounded-xl">
        schreibe
      </Link>
    </nav>
  );
}

export default Navbar;
