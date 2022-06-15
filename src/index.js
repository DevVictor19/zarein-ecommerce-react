import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import Compras from "./routes/compras";
import Catalogo from "./routes/catalogo";
import Sobre from "./routes/sobre";
import Contato from "./routes/contato";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Compras />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
