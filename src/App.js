import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import NotificationModal from "./components/UI/notification";
import MobileSacolaDisplayModal from "./components/UI/mobileSacolaDisplay";

function App() {
  return (
    <React.Fragment>
      <NotificationModal />
      <MobileSacolaDisplayModal />
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default App;
