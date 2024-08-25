import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="ancientolympic">
      <Routes>
        <Route path="/" index element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
