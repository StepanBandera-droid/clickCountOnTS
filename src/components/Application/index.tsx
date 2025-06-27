import type { ReactElement } from "react";
import Button from "../Button";
import DeleteCount from "../DeleteCount";
import Header from "../Header";
import "./styles.css";

const App = (): ReactElement => {
  return (
    <div>
      <Header />
      <div>
        <Button />
      </div>
      <div>
        <DeleteCount />
      </div>
    </div>
  );
};

export default App;
