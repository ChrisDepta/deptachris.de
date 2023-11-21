import React from 'react'
import Image from 'next/image'
import portrait  from "../../../../public/portrait.webp"

type Props = {}

export default function AboutOne({}: Props) {
  return (
    <>
    <div className='pt-12 basis-1/2 text-m'>
        <h1 className='basis-full  pb-5 text-4xl font-bold '>About me:</h1>
        <p className='tracking-wide leading-6'>Ich Bin ein Webentwickler der motiviert zu lernen ist un sich focusiert 
          auf neuste und modernste werkzeuge. Ich bin mit Webmastering schon seit 2012
           beschäftig. Damals habe ich nur für eigene zwecke aangefangen zum lernen. 
           Habe ich mir selbst HTML5 CSS un SEO beigebracht. Dannach habe ich immer 
           wieder was neues dazu gelernt. Seit 2020 kann ich auch JavaScrip. Ich liebe
            Implementieren und alles was weit weg von designen steht.
            Ich mag sehr mit code zu arbeiten, umso mehr desto besser.</p>
      </div>
      <Image src={portrait} alt="homeLogo" width={500} height={500} className='' />
    </>
  )
}