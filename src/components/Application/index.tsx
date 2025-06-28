import type { ReactElement } from "react";
import Button from "../Button";
import DeleteCount from "../DeleteCount";
import Header from "../Header";
import { useState, useEffect } from "react";
import "./styles.css";

const App = (): ReactElement => {
  const [count, setCount] = useState(0);

  useEffect((): void => {
    const newCount = localStorage.getItem("count");
    if (newCount != null) {
      setCount(Number(newCount));
    }
  });

  const handleClick = (): void => {
    const newNumber: number = count + 1;
    setCount(newNumber);
    localStorage.setItem("count", String(newNumber)); //Почему нужно оборачивать в String()?
  };

  const deleteCount = (): void => {
    setCount(0);
    localStorage.removeItem("count");
  };

  return (
    <div className="container">
      <Header />
      <div>
        <Button onClick={handleClick}>Нажми!</Button>
        <p className="text-button">Количество кликов: {count}</p>
      </div>
      <div>
        <DeleteCount onClick={deleteCount}>
          Сбросить количество кликов
        </DeleteCount>
      </div>
    </div>
  );
};

export default App;
