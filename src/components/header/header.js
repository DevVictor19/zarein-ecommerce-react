import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import classes from "./header.module.css";
import sacolaico from "../../assets/sacola-ico.png";

const Header = () => {
  const bagContext = useSelector((state) => state.bag);

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
          <Link to="sacola">
            <img src={sacolaico} alt="uma sacola simples" />
          </Link>
        </div>
        <div className={classes.sacolaDisplay}>{bagContext.totalItems}</div>
      </div>
    </header>
  );
};

export default Header;
