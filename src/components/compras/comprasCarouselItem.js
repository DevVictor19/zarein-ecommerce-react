import classes from "./comprasCarouselItem.module.css";

const ComprasCarouselItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.imgWrapper}>
        <img src={props.item.img} alt={props.item.name} />
      </div>
      <h2>{props.item.name}</h2>
      <h3>R$ {props.item.price}</h3>
      <button>Mais Detalhes</button>
    </div>
  );
};

export default ComprasCarouselItem;
