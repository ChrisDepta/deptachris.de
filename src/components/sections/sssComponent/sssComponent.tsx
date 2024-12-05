"use client";
import { useState } from "react";
import Image from "next/image"; // Importujemy Image z next/image

type GameSummary = {
  numbersOfPlay: number;
  wins: number;
  losses: number;
  draws: number;
};

const IndexPage = () => {
  const [humanImg, setHumanImg] = useState<string>("");
  const [aiImg, setAiImg] = useState<string>("");
  const [gameSummary, setGameSummary] = useState<GameSummary>({
    numbersOfPlay: 0,
    wins: 0,
    losses: 0,
    draws: 0,
  });
  const [result, setResult] = useState<string>("");

  const images = [
    { option: "papier", src: "/papier.jpg", alt: "Papier" },
    { option: "stein", src: "/stein.jpg", alt: "Stein" },
    { option: "schere", src: "/schere.jpg", alt: "Schere" },
  ];

  const aiChoice = () => {
    const randomChoice = images[Math.floor(Math.random() * 3)];
    setAiImg(randomChoice.option);
  };

  const humanChoice = (option: string) => {
    setHumanImg(option); // Ustawiamy wybór gestu
    setResult(""); // Resetujemy wynik, gdy zmieniamy wybór
  };

  const compareResult = () => {
    if (!humanImg) {
      alert("BITTE ZUERST EINE GESTE WÄHLEN!");
      return;
    }

    aiChoice();
    setGameSummary((prev) => ({
      ...prev,
      numbersOfPlay: prev.numbersOfPlay + 1,
    }));

    let resultText = "";
    if (aiImg === humanImg) {
      resultText = "Remis";
      setGameSummary((prev) => ({ ...prev, draws: prev.draws + 1 }));
    } else if (
      (humanImg === "stein" && aiImg === "papier") ||
      (humanImg === "papier" && aiImg === "schere") ||
      (humanImg === "schere" && aiImg === "stein")
    ) {
      resultText = "Komputer gewinnt";
      setGameSummary((prev) => ({ ...prev, losses: prev.losses + 1 }));
    } else {
      resultText = "Du hast gewonnen";
      setGameSummary((prev) => ({ ...prev, wins: prev.wins + 1 }));
    }

    setResult(resultText); // Ustawiamy wynik
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="wrap bg-opacity-40 backdrop-blur-lg w-[90%] xl:max-w-[50vw] xl:max-h-[70vh] rounded-3xl shadow-2xl shadow-dcturkis p-8 flex flex-wrap">
        <h1 className="basis-full text-center text-lg md:text-2xl xl:text-4xl mb-6 text-white font-semibold tracking-wide">
          SCHNICK SCHNACK SCHNUCK
        </h1>

        <div className="panel-left flex flex-col gap-5 flex-basis-1/3 grow">
          <div className="panel-left-top p-5 bg-gray-800 bg-opacity-60 rounded-lg shadow-md">
            <h4 className="text-teal-300">Spiel Verlauf:</h4>
            <p className="text-white">
              Dein Wahl:{" "}
              <span className="font-bold text-teal-300">{humanImg}</span>
            </p>
            <p className="text-white">
              Komputer Wahl:{" "}
              <span className="font-bold text-teal-300">{aiImg}</span>
            </p>
            <h2 className="text-white mt-2">
              Gewinner: <br />
              <span className="text-teal-300">{result || "- - - - - -"}</span>
            </h2>
          </div>

          <div className="panel-left-bottom p-5 bg-gray-800 bg-opacity-60 rounded-lg shadow-md">
            <h4 className="text-teal-300">Statistik:</h4>
            <p className="text-white">
              Spiele:{" "}
              <span className="font-bold text-teal-300">
                {gameSummary.numbersOfPlay}
              </span>
            </p>
            <p className="text-white">
              Gewonnen:{" "}
              <span className="font-bold text-teal-300">
                {gameSummary.wins}
              </span>
            </p>
            <p className="text-white">
              Verloren:{" "}
              <span className="font-bold text-teal-300">
                {gameSummary.losses}
              </span>
            </p>
            <p className="text-white">
              Unentschieden:{" "}
              <span className="font-bold text-teal-300">
                {gameSummary.draws}
              </span>
            </p>
          </div>
        </div>

        <div className="select flex flex-col items-center basis-full xl:basis-1/2 grow">
          <h3 className="text-xl my-5 text-white">Wähle eine Geste!</h3>
          <div className="flex justify-center gap-5 mb-5">
            {images.map((image) => (
              <div
                key={image.option}
                className="relative w-24 md:w-36 m-auto cursor-pointer rounded-lg shadow-md transition-transform transform hover:scale-105"
                onClick={() => humanChoice(image.option)}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  title={image.alt}
                  layout="intrinsic" // Używamy "intrinsic" do dopasowania rozmiaru obrazu
                  width={150}
                  height={150}
                  className={`rounded-lg ${
                    humanImg === image.option
                      ? "border-4 border-dcturkis/40 shadow-lg"
                      : ""
                  }`} // Dodanie obramowania, gdy wybrany gest
                />
              </div>
            ))}
          </div>
          <button
            className="px-10 py-4 bg-dcturkis text-black font-bold rounded-lg shadow-md mt-5 hover:bg-teal-500 transition-colors h-auto w-auto flex justify-center items-center"
            onClick={compareResult}>
            Los!
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
