import { Link } from "react-router-dom";
import classes from "./comprasCarouselItem.module.css";

const ComprasCarouselItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.imgWrapper}>
        <img src={props.img} alt={props.name} />
      </div>
      <h2>{props.name}</h2>
      <h3>R$ {props.price}</h3>
      <Link to={props.id}>Mais Detalhes</Link>
    </div>
  );
};

export default ComprasCarouselItem;
