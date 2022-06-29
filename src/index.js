import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import Compras from "./routes/compras";
import Catalogo from "./routes/catalogo";
import Sobre from "./routes/sobre";
import Contato from "./routes/contato";
import Produto from "./routes/produto";
import Sacola from "./routes/sacola";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Compras />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
          <Route path="sacola" element={<Sacola />} />
          <Route path=":productID" element={<Produto />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
