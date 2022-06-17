import { Link } from "react-router-dom";

import classes from "./produtosMenu.module.css";

const ProdutosMenu = (props) => {
  return (
    <div className={classes.menuWrapper}>
      <div className={classes.menuDisplay}>
        <Link to="/">Compras</Link>
        <div> &gt; </div>
        <p>Produto {props.productName} </p>
      </div>
    </div>
  );
};

export default ProdutosMenu;
