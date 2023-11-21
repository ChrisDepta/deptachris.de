import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import depidevLogo from "../../../public/depidevLogoDark.webp"

function Navbar() {
  return (
    <nav className='border-b border-gray-800 z-10 backdrop-filter backdrop-blur-md fixed w-screen mx-auto p-5 flex items-start justify-center bg-black'>
        <Link href="/">
        <Image src={depidevLogo} alt="homeLogo" width={150} height={200} className='' />
        </Link>
        <ul className='flex text-2xl pl-48'>
          <li>
          <Link href="/projects" className='py-5 px-12'>Projects</Link>
          </li>
          <li>
          <Link href="/about" className='py-5 px-12'>About me</Link>
          </li>
          <li>
          <Link href="/contact " className='py-5 px-12'>Contact</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar