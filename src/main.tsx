import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import NotFound from "./router/NotFound.tsx";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter basename="/ancientolympic/">
      <Routes>
        <Route index element={<App />} />
        <Route path="/404" element={<NotFound />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
