import React from "react";
import Link from "next/link";
import Image from "next/image";
import deptachrisLogo from "../../../public/simpleLogo.png";

function Footer() {
  return (
    <div className="flex flex-col w-screen items-center bg-black p-12 ">
      <Image
        src={deptachrisLogo}
        alt="homeLogo"
        width={200}
        height={200}
        className=""
      />
    </div>
  );
}

export default Footer;
