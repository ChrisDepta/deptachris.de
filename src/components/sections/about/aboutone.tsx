import React from "react";
import Image from "next/image";
import portrait from "@/../public/portrait.webp";
import db from "@/db/db.json";

type Props = {};

export default function AboutOne({}: Props) {
  return (
    <div className="w-[80%] flex flex-col m-auto items-end">
      <div className="text-m  h-screen flex justify-between items-end ">
        <div className="basis-2/5 overflow-hidden flex flex-col h-screen ">
          <div className="basis-full overflow-y-auto pt-48 scrollbar-hide">
            <h2>Über mich:</h2>
            <p>{db.about.uberMich}</p>
            <h2>Technische Fähigkeiten:</h2>
            <ul>
              <li>Front-End: HTML5, CSS3, Tailwind, JavaScript (ES6+)</li>
              <li>Back-End: Node.js, Express</li>
              <li>Werkzeuge: Git, Webpack, Visual Studio Code</li>
            </ul>
            <h2>Meine Herangehensweise:</h2>
            <p>{db.about.fokus}</p>
            <h2>Projekte und Erfahrungen:</h2>
            <p>{db.about.projekte}</p>
            <h2>Warum ich?</h2>
            <p>{db.about.warumIch}</p>
          </div>
        </div>
        <div className="basis-1/2">
          <Image src={portrait} alt="homeLogo" width={600} height={600} />
        </div>
      </div>
    </div>
  );
}
