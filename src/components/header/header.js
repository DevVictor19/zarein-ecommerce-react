import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";

import classes from "./header.module.css";
import sacolaico from "../../assets/sacola-ico.png";
import mobileMenu from "../../assets/hamburgerMenu.png";
import NavigationLinks from "./navigationLinks";

const Header = () => {
  const [mobileMenuOn, setMobileMenuOn] = useState(false);
  const totalItems = useSelector((state) => state.bag.totalItems);

  const toggleMobileMenu = () => {
    setMobileMenuOn((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <h1>Zarein</h1>
        <div className={classes.desktopNavContainer}>
          <NavigationLinks />
          <div className={classes.bagItemsContainer}>
            <div>
              <Link to="sacola">
                <img src={sacolaico} alt="uma sacola simples" />
              </Link>
            </div>
            <div className={classes.bagItemsCounter}>{totalItems}</div>
          </div>
        </div>
        <div className={classes.mobileMenu} onClick={toggleMobileMenu}>
          <img src={mobileMenu} alt="bars menu" />
        </div>
        {mobileMenuOn && (
          <div className={classes.mobileNavContainer}>
            <NavigationLinks onClick={toggleMobileMenu} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
