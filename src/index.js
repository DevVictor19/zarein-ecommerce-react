import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import Compras from "./routes/compras";
import Catalogo from "./routes/catalogo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Compras />} />
        <Route path="catalogo" element={<Catalogo />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
