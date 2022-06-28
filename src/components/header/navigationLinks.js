import { NavLink } from "react-router-dom";

const NavigationLinks = (props) => {
  const activeClassStyle = {
    borderBottom: "1px solid var(--black-75)",
  };

  const setActiveStyle = ({ isActive }) => {
    return isActive ? activeClassStyle : { borderBottom: "" };
  };

  const onClickLinkHandler = () => {
    props.onClick();
  };

  return (
    <nav onClick={onClickLinkHandler}>
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
  );
};

export default NavigationLinks;
