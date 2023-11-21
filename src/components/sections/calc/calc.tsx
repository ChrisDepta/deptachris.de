'use client';
import React, { useState } from 'react';


type Operator = '+' | '-' | '*' | '/' | '%';

const Calculator: React.FC = () => {
  const [result, setResult] = useState('0');
  const [counter1, setCounter1] = useState<string | null>(null);
  const [counter2, setCounter2] = useState<string | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);

  const reset = () => {
    setCounter1(null);
    setCounter2(null);
    setOperator(null);
  };

  const handleNumberClick = (number: string) => {
    if (operator === null) {
      setCounter1(counter1 === null ? number : counter1 + number);
      setResult(counter1 === null ? number : counter1 + number);
    } else {
      setCounter2(counter2 === null ? number : counter2 + number);
      setResult(counter2 === null ? number : counter2 + number);
    }
  };

  const handleOperatorClick = (selectedOperator: Operator) => {
    if (counter1 !== null && counter2 !== null) {
      calculate();
    }
    setOperator(selectedOperator);
  };

  const calculate = () => {
    const num1 = parseFloat(counter1!);
    const num2 = parseFloat(counter2!);

    switch (operator) {
      case '+':
        setResult((num1 + num2).toString());
        setCounter1((num1 + num2).toString());
        break;
      case '-':
        setResult((num1 - num2).toString());
        setCounter1((num1 - num2).toString());
        break;
      case '*':
        setResult((num1 * num2).toString());
        setCounter1((num1 * num2).toString());
        break;
      case '/':
        setResult((num1 / num2).toString());
        setCounter1((num1 / num2).toString());
        break;
      case '%':
        setResult(((num1 / 100) * num2).toString());
        setCounter1(((num1 / 100) * num2).toString());
        break;
      default:
        break;
    }

    setCounter2(null);
  };

  const handleEqualClick = () => {
    if (counter1 !== null && counter2 !== null) {
      calculate();
    }
  };

  const handleResetClick = () => {
    setResult('0');
    reset();
  };

  return (
    <>

    
    <div className='bg-white/[.60] p-6 rounded-3xl text-current flex text-4xl font-bold flex-col mb-36 '>
    <div className="h-36 flex justify-end items-end font-normal text-6xl text-primary/70 border-b bg-gradient-to-b from-transparent to-white/20 p-4 pb-6 rounded-2xl my-6">{result}</div>
      <div>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleOperatorClick('%')}>%</button>
        <button onClick={() => handleNumberClick('.')}>,</button>
      </div>
      <div className="flex ">
      <button className='grow' onClick={handleResetClick}>C</button>
        <button className='grow' onClick={handleEqualClick}>=</button>
      </div>
    </div></>
);
};

export default Calculator;