import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import depidevLogo from "../../../public/depidevLogoDark.webp"

function Footer() {
  return (
    <div className='flex flex-col items-center bg-black p-12 '>
      <Image src={depidevLogo} alt="homeLogo" width={400} height={200} className='mr-72 ml-auto' />
    </div>
  )
}

export default Footer