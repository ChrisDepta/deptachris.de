"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState<string>("0");
  const [counter1, setCounter1] = useState<number | null>(null);
  const [counter2, setCounter2] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [isSecondOperand, setIsSecondOperand] = useState<boolean>(false);

  const reset = () => {
    setCounter1(null);
    setCounter2(null);
    setOperator(null);
    setIsSecondOperand(false);
    setResult("0");
  };

  const handleNumber = (value: string) => {
    if (isSecondOperand) {
      setCounter2((prev) =>
        prev !== null ? prev * 10 + Number(value) : Number(value)
      );
      setResult(value);
    } else {
      setCounter1((prev) =>
        prev !== null ? prev * 10 + Number(value) : Number(value)
      );
      setResult(value);
    }
  };

  const handleOperator = (op: string) => {
    if (counter1 !== null && counter2 !== null && operator !== null) {
      calculate();
    }
    setOperator(op);
    setIsSecondOperand(true);
  };

  const calculate = () => {
    if (counter1 !== null && counter2 !== null) {
      let calcResult;
      switch (operator) {
        case "+":
          calcResult = counter1 + counter2;
          break;
        case "-":
          calcResult = counter1 - counter2;
          break;
        case "*":
          calcResult = counter1 * counter2;
          break;
        case "/":
          calcResult = counter1 / counter2;
          break;
        default:
          return;
      }
      setResult(String(calcResult));
      setCounter1(calcResult);
      setCounter2(null);
      setOperator(null);
      setIsSecondOperand(false);
    }
  };

  const handleEquals = () => {
    calculate();
  };

  const handleClear = () => {
    reset();
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-gradient-to-br from-black/70 to-black p-6 rounded-xl w-auto border border-dcturkis/20 shadow-2xl shadow-dcturkis">
        {/* Wynik kalkulatora */}
        <div className="text-4xl font-bold text-white text-right mb-4 p-4 bg-gray-700 rounded-lg shadow-bg-gray-500 shadow-lg">
          {result}
        </div>
        {/* Przyciski kalkulatora */}
        <div className="grid grid-cols-4 gap-4">
          <button
            className="p-4 bg-gradient-to-br from-black via-gray-200 to-black text-black text-2xl font-bold rounded-lg hover:bg-gray-300 flex items-center justify-center"
            onClick={() => handleNumber("1")}>
            1
          </button>
          <button
            className="p-4 bg-gradient-to-br from-black via-gray-200 to-black text-black text-2xl font-bold rounded-lg hover:bg-gray-300 flex items-center justify-center"
            onClick={() => handleNumber("2")}>
            2
          </button>
          <button
            className="p-4 bg-gradient-to-br from-black via-gray-200 to-black text-black text-2xl font-bold rounded-lg hover:bg-gray-300 flex items-center justify-center"
            onClick={() => handleNumber("3")}>
            3
          </button>
          <button
            className="p-4 bg-gradient-to-br from-black via-dcturkis to-black text-black text-2xl font-bold rounded-lg hover:bg-orange-600 flex items-center justify-center"
            onClick={() => handleOperator("+")}>
            +
          </button>

          <button
            className="p-4 bg-gradient-to-br from-black via-gray-200 to-black text-black text-2xl font-bold rounded-lg hover:bg-gray-300 flex items-center justify-center"
            onClick={() => handleNumber("4")}>
            4
          </button>
          <button
            className="p-4 bg-gradient-to-br from-black via-gray-200 to-black text-black text-2xl font-bold rounded-lg hover:bg-gray-300 flex items-center justify-center"
            onClick={() => handleNumber("5")}>
            5
          </button>
          <button
            className="p-4 bg-gradient-to-br from-black via-gray-200 to-black text-black text-2xl font-bold rounded-lg hover:bg-gray-300 flex items-center justify-center"
            onClick={() => handleNumber("6")}>
            6
          </button>
          <button
            className="p-4 bg-gradient-to-br from-black via-dcturkis to-black text-black text-2xl font-bold rounded-lg hover:bg-orange-600 flex items-center justify-center"
            onClick={() => handleOperator("-")}>
            -
          </button>

          <button
            className="p-4 bg-gradient-to-br from-black via-gray-200 to-black text-black text-2xl font-bold rounded-lg hover:bg-gray-300 flex items-center justify-center"
            onClick={() => handleNumber("7")}>
            7
          </button>
          <button
            className="p-4 bg-gradient-to-br from-black via-gray-200 to-black text-black text-2xl font-bold rounded-lg hover:bg-gray-300 flex items-center justify-center"
            onClick={() => handleNumber("8")}>
            8
          </button>
          <button
            className="p-4 bg-gradient-to-br from-black via-gray-200 to-black text-black text-2xl font-bold rounded-lg hover:bg-gray-300 flex items-center justify-center"
            onClick={() => handleNumber("9")}>
            9
          </button>
          <button
            className="p-4 bg-gradient-to-br from-black via-dcturkis to-black text-black  text-2xl font-bold rounded-lg hover:bg-orange-600 flex items-center justify-center"
            onClick={() => handleOperator("*")}>
            *
          </button>

          <button
            className="p-4 bg-gradient-to-br from-black via-gray-200 to-black text-black text-2xl font-bold rounded-lg hover:bg-gray-300 flex items-center justify-center"
            onClick={() => handleNumber("0")}>
            0
          </button>
          <button
            className="p-4 bg-gradient-to-br from-black via-gray-200 to-black text-black text-2xl font-bold rounded-lg hover:bg-gray-300 flex items-center justify-center"
            onClick={() => handleClear()}>
            C
          </button>
          <button
            className="p-4 bg-gradient-to-br from-black via-gray-200 to-black text-black text-2xl font-bold rounded-lg hover:bg-gray-300 flex items-center justify-center"
            onClick={() => handleEquals()}>
            =
          </button>
          <button
            className="p-4 bg-gradient-to-br from-black via-dcturkis to-black text-black text-2xl font-bold rounded-lg hover:bg-orange-600 flex items-center justify-center"
            onClick={() => handleOperator("/")}>
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
