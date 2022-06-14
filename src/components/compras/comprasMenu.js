import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import classes from "./comprasMenu.module.css";

const replaceSpecialChars = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove accents
};

const ComprasMenu = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ filter: "todos" });
  }, [setSearchParams]);

  const setFilterHandler = (event) => {
    event.preventDefault();
    const filter = replaceSpecialChars(event.target.innerHTML).toLowerCase();
    setSearchParams({ filter });
    props.onClickMenu();
  };

  let todosActiveClass = "";
  let popularesActiveClass = "";
  let promocaoActiveClass = "";

  switch (searchParams.get("filter")) {
    case "todos":
      todosActiveClass = classes.activeLink;
      break;

    case "populares":
      popularesActiveClass = classes.activeLink;
      break;

    case "promocao":
      promocaoActiveClass = classes.activeLink;
      break;

    default:
      break;
  }

  return (
    <div className={classes.menuWrapper}>
      <nav>
        <ul>
          <li>
            <a className={todosActiveClass} onClick={setFilterHandler} href="/">
              Todos
            </a>
          </li>
          <div>|</div>
          <li>
            <a
              className={popularesActiveClass}
              onClick={setFilterHandler}
              href="/"
            >
              Populares
            </a>
          </li>
          <div>|</div>
          <li>
            <a
              className={promocaoActiveClass}
              onClick={setFilterHandler}
              href="/"
            >
              Promoção
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ComprasMenu;
