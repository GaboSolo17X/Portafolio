import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { PortfolioRoutes } from "./router/portfolioRoutes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PortfolioRoutes/>
    </BrowserRouter>
  </StrictMode>
);
