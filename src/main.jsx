import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { PortfolioApp } from "./assets/portfolioApp";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PortfolioApp />
    </BrowserRouter>
  </StrictMode>
);
