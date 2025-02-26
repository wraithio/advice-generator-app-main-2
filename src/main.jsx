import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AdviceContainer from "./components/AdviceContainer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdviceContainer />
  </StrictMode>
);
