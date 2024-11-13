// pages/index.tsx
"use client";
import { useState } from "react";

const sentences = [
  "ich brauche mehr schlafen",
  "alles was ich sehe ist cool",
  "ich will keine zigaretten",
  "egsiestierst du wirklich",
  "wo das pfäffer wächst",
  "wohin tupta in der nacht ein igel",
];
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ä",
  "ö",
  "ü",
];

const Game = () => {
  const [sentence, setSentence] = useState<string>("");
  const [word, setWord] = useState<string>("");
  const [mistakesCounter, setMistakesCounter] = useState<number>(10);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isGameWon, setIsGameWon] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const startGame = () => {
    setIsGameOver(false);
    setIsGameWon(false);
    setMistakesCounter(10);
    randomSentence();
    setWord("_".repeat(sentence.length));
    setGameStarted(true);
  };

  const randomSentence = () => {
    const randNumb = Math.floor(Math.random() * sentences.length);
    setSentence(sentences[randNumb]);
  };

  const handleLetterClick = (letter: string, index: number) => {
    let checked = false;
    // Rozdzielamy 'word' na tablicę, by móc ją modyfikować
    const newWord = word.split(""); // Teraz newWord to tablica

    // Iteracja po 'sentence' zamiast po 'word'
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === letter) {
        checked = true;
        newWord[i] = letter; // Podmieniamy odpowiednią literę w tablicy
      }
    }

    // Jeśli litera pasuje, aktualizujemy stan
    if (checked) {
      setWord(newWord.join("")); // Łączymy tablicę z powrotem w string
    } else {
      setMistakesCounter(mistakesCounter - 1);
    }

    // Sprawdzamy, czy słowo zostało odgadnięte
    if (newWord.join("") === sentence) {
      setIsGameWon(true);
    }

    // Jeśli liczba błędów jest za duża, kończymy grę
    if (mistakesCounter <= 1) {
      setIsGameOver(true);
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setMistakesCounter(10);
    setSentence("");
    setWord("");
    setIsGameOver(false);
    setIsGameWon(false);
  };

  return (
    <div
      className="flex justify-center items-center w-full h-screen bg-black bg-cover bg-center"
      style={{ backgroundImage: "url(img/background.jpg)" }}>
      <div className="text-center text-white flex flex-col items-center">
        {/* Play Button */}
        {!gameStarted && !isGameWon && !isGameOver && (
          <div
            className="bg-purple-700 text-white text-8xl font-bold py-10 px-20 rounded-full mb-5 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            onClick={startGame}>
            PLAY
          </div>
        )}

        {/* Again Button */}
        {(isGameWon || isGameOver) && (
          <div
            className="bg-purple-700 text-white text-8xl font-bold py-10 px-20 rounded-full mb-5 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            onClick={resetGame}>
            AGAIN?
          </div>
        )}

        {/* Mistakes Counter */}
        <div className="text-lg mb-10">
          <span>MISTAKES: {mistakesCounter}</span>
        </div>

        {/* Sentence */}
        <div
          className={`text-6xl letter-spacing mb-10 ${
            gameStarted ? "" : "hidden"
          }`}>
          {word.toUpperCase()}
        </div>

        {/* Alphabet Letters */}
        <div
          className={`flex flex-wrap justify-center mb-10 ${
            gameStarted ? "" : "hidden"
          }`}>
          {alphabet.map((letter, index) => (
            <div
              key={index}
              className={`text-4xl py-2 px-4 m-2 rounded-full border-2 border-white text-white text-center cursor-pointer transition duration-300 transform hover:scale-110 ${
                word.includes(letter) ? "bg-green-400" : ""
              }`}
              onClick={() => handleLetterClick(letter, index)}>
              {letter}
            </div>
          ))}
        </div>

        {/* Game Over and Win Messages */}
        {isGameOver && (
          <div className="text-6xl text-white font-bold">GAME OVER</div>
        )}
        {isGameWon && (
          <div className="text-6xl text-white font-bold">YOU WON!</div>
        )}
      </div>
    </div>
  );
};

export default Game;
