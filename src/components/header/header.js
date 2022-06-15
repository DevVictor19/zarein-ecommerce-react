import { NavLink } from "react-router-dom";

import classes from "./header.module.css";
import sacolaico from "../../assets/sacola-ico.png";

const Header = () => {
  const activeClassStyle = {
    borderBottom: "1px solid var(--black-75)",
  };

  const setActiveStyle = ({ isActive }) => {
    return isActive ? activeClassStyle : { borderBottom: "" };
  };

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.navWrapper}>
          <h1 className={classes.logo}>Zarein</h1>
          <nav className={classes.nav}>
            <ul>
              <li>
                <NavLink style={setActiveStyle} to="/">
                  Compras
                </NavLink>
              </li>
              <li>
                <NavLink style={setActiveStyle} to="catalogo">
                  Catálogo
                </NavLink>
              </li>
              <li>
                <NavLink style={setActiveStyle} to="sobre">
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink style={setActiveStyle} to="contato">
                  Contato
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className={classes.sacolaIco}>
          <img src={sacolaico} alt="uma sacola simples" />
        </div>
        <div className={classes.sacolaDisplay}>3</div>
      </div>
    </header>
  );
};

export default Header;
