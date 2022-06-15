import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";

import Header from "./components/header/header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default App;
