import type { ReactElement } from "react";
import Button from "../Button";
import DeleteCount from "../DeleteCount";
import Header from "../Header";
import { useState } from "react";
import "./styles.css";

const App = (): ReactElement => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newNumber = count + 1;
    setCount(newNumber);
  };

  return (
    <div>
      <Header />
      <div>
        <Button onClick={handleClick} />
        <p>Количество кликов: {count}</p>
      </div>
      <div>
        <DeleteCount />
      </div>
    </div>
  );
};

export default App;
