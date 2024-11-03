import React, { useState } from 'react';
import logo from './logo.svg'; // Импортируем изображение

const App: React.FC = () => {
  // Устанавливаем состояния для полей ввода и отображения результата
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [result, setResult] = useState<string>('');

  // Обработчики изменений для полей ввода
  const handleAChange = (event: React.ChangeEvent<HTMLInputElement>) => setA(Number(event.target.value));
  const handleBChange = (event: React.ChangeEvent<HTMLInputElement>) => setB(Number(event.target.value));

  // Функция для вычисления результата
  const calculateResult = () => {
    const factorialResult = factorial(a - b);
    const sinResult = Math.sin(b);
    setResult(`Factorial of (a - b): ${factorialResult}, sin(b): ${sinResult}`);
  };

  // Функция для вычисления факториала
  const factorial = (num: number): number => {
    if (num < 0) return 0; // Факториал не определен для отрицательных чисел
    return num <= 1 ? 1 : num * factorial(num - 1);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Math Calculation App</h1>
      <h2>Enter values to calculate results</h2>
      <img src={logo} alt="Example" style={{ width: '150px', height: '150px' }} />

      <div style={{ marginTop: '20px' }}>
        <input
          type="number"
          placeholder="Enter value for a"
          onChange={handleAChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Enter value for b"
          onChange={handleBChange}
        />
      </div>

      <button onClick={calculateResult} style={{ marginTop: '10px' }}>
        Calculate
      </button>

      <h3>Result: {result}</h3>
    </div>
  );
};

export default App;