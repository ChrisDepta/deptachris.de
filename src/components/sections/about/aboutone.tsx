import React from "react";
import Image from "next/image";
import portrait from "../../../../public/portrait.webp";

type Props = {};

export default function AboutOne({}: Props) {
  return (
    <div className="w-[80%] flex flex-col m-auto items-end">
      <div className="text-m  h-screen flex justify-between items-end ">
        <div className="basis-2/5 overflow-hidden flex flex-col h-screen ">
          <div className="basis-full overflow-y-auto pt-48 scrollbar-hide">
            <h2>Über mich:</h2>
            <p>
              Ich bin ein leidenschaftlicher und motivierter Webentwickler, der
              sich darauf konzentriert, die neuesten Technologien und Tools zu
              beherrschen. Seit 2012 beschäftige ich mich mit Webentwicklung,
              was als persönliches Lernprojekt begann. Ich habe mir selbst
              HTML5, CSS und SEO beigebracht, um meine ersten Webseiten zu
              erstellen. Seitdem erweitere ich kontinuierlich mein Wissen und
              habe im Jahr 2020 begonnen, JavaScript intensiv zu nutzen.
            </p>
            <h2>Technische Fähigkeiten:</h2>
            <ul>
              <li>Front-End: HTML5, CSS3, Tailwind, JavaScript (ES6+)</li>
              <li>Back-End: Node.js, Express</li>
              <li>Werkzeuge: Git, Webpack, Visual Studio Code</li>
            </ul>
            <h2>Meine Herangehensweise:</h2>
            <p>
              Ich bin ein Entwickler, der die Umsetzung liebt und besonders gern
              an technischen Herausforderungen arbeitet. Mir macht es großen
              Spaß, mich in den Code zu vertiefen und effiziente Lösungen zu
              entwickeln. Der kreative Aspekt liegt für mich im Code, nicht im
              Design.
            </p>
            <h2>Projekte und Erfahrungen:</h2>
            <p>
              Ich habe an einer Vielzahl von Projekten gearbeitet, von kleinen
              persönlichen Websites bis hin zu größeren Anwendungen. Diese
              Projekte haben mir geholfen, praktische Erfahrung mit JavaScript
              und modernem Front-End-Development zu sammeln.
            </p>
            <h2>Warum ich?</h2>
            <p>
              Ich bin ständig auf der Suche nach neuen Herausforderungen und
              liebe es, mich in neue Technologien einzuarbeiten. Wenn Sie einen
              Entwickler suchen, der nicht nur Code schreibt, sondern auch eine
              Leidenschaft für kontinuierliches Lernen und Innovation mitbringt,
              dann bin ich die richtige Wahl.
            </p>
          </div>
        </div>
        <div className="basis-1/2">
          <Image src={portrait} alt="homeLogo" width={600} height={600} />
        </div>
      </div>
    </div>
  );
}
