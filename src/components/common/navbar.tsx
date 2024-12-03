"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import deptachrisLogo from "../../../public/simpleLogo.png";

function Nav() {
  const [menuActive, setMenuActive] = useState(false);
  function classToggle() {
    setMenuActive((prev) => !prev);
  }

  function menuClose() {
    if (menuActive) {
      setMenuActive(false);
    }
  }

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", menuClose);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", menuClose);
    };
  });

  return (
    <nav
      className={`z-10 bg-[rgb(var(--background-light-rgb))] backdrop-filter backdrop-blur-md fixed w-screen mx-auto py-6 md:py-4 px-8 flex items-start md:items-center justify-between h-20 md:h-20 overflow-x-hidden overflow-y-visible
    ${menuActive ? "h-auto" : ""}`}>
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
      <div className="trigger md:hidden">
        <svg
          className={`bars ${menuActive ? "active" : ""}`}
          viewBox="0 0 100 100"
          onClick={classToggle}>
          <path
            className="line top"
            d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"></path>
          <path
            className="line middle"
            d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"></path>
          <path
            className="line bottom"
            d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"></path>
        </svg>
      </div>
      <div
        className={`pt-24 md:pt-0 w-screen md:w-auto flex justify-between items-end md:translate-x-0 md:items-center transition-all duration-700 ease-out ${
          !menuActive ? "translate-x-[150%]" : "translate-x-0"
        }`}>
        <ul className="flex flex-col md:flex-row text-lg  xl:text-lg mr-0 xl:mr-24">
          <li className="my-2 md:my-0">
            <Link
              href="/"
              className=" py-5 px-4 xl:px-12 hover:text-[rgb(var(--accent-rgb))] textShadow ">
              Start
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              href="/about"
              className=" py-5 px-4 xl:px-12 hover:text-[rgb(var(--accent-rgb))] textShadow">
              Über mich
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              href="/websites"
              className="py-5 px-4 xl:px-12 hover:text-[rgb(var(--accent-rgb))] textShadow">
              Webseiten
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              href="/graphics"
              className="py-5 px-4 xl:px-12 hover:text-[rgb(var(--accent-rgb))] textShadow">
              Grafik
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              href="/projects"
              className="py-5 px-4 xl:px-12 hover:text-[rgb(var(--accent-rgb))] textShadow">
              Spiele
            </Link>
          </li>
        </ul>
        <div className="mb-4 mr-4 md:m-0 flex justify-center items-center w-auto h-full">
          <Link
            href="/contact"
            className="schreibeButton xl:text-lg xl:w-[140px]">
            schreibe
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
