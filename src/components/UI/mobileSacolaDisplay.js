import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import sacolaico from "../../assets/sacola-ico.png";
import classes from "./mobileSacolaDisplay.module.css";

const MobileSacolaDisplay = () => {
  const totalItems = useSelector((state) => state.bag.totalItems);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.bagItemsContainer}>
      <Link onClick={scrollTop} to="sacola">
        <img src={sacolaico} alt="uma sacola simples" />
      </Link>
      <div className={classes.bagItemsCounter}>{totalItems}</div>
    </div>
  );
};

const overlayDivElement = document.getElementById("overlays");

const MobileSacolaDisplayModal = () => {
  return ReactDOM.createPortal(<MobileSacolaDisplay />, overlayDivElement);
};

export default MobileSacolaDisplayModal;
