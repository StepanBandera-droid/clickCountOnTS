import { StrictMode } from "react"; // Чё за strictMode?
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./components/Application/index.tsx";

createRoot(document.getElementById("root")!).render(
  //Почему после ("root") должен стоять восклиц. знак?
  <StrictMode>
    <App />
  </StrictMode>
);
