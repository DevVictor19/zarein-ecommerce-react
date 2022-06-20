import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import NotificationModal from "./components/UI/notification";

function App() {
  return (
    <React.Fragment>
      <NotificationModal />
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default App;
