import type { ReactElement } from "react";
import Button from "../Button";
import DeleteCount from "../DeleteCount";
import Header from "../Header";
import { useState } from "react";
import "./styles.css";

const App = (): ReactElement => {
  const [count, setCount] = useState(0);

  const handleClick = (): void => {
    const newNumber = count + 1;
    setCount(newNumber);
  };

  const deleteCount = (): void => {
    setCount(0);
  };

  return (
    <div>
      <Header />
      <div>
        <Button onClick={handleClick}>Нажми!</Button>
        <p>Количество кликов: {count}</p>
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
