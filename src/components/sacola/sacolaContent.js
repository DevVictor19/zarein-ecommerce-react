import { Link } from "react-router-dom";
import classes from "./sacolaContent.module.css";
import img from "../../data/products/RoseiraSeda.png";

const data = {
  totalItems: 1,
  totalAmount: 0,
  items: [
    {
      name: "Roseira Seda",
      id: "v1",
      size: "G",
      img: img,
      quantity: 1,
      price: 97.98,
    },
    {
      name: "Roseira Seda",
      id: "v2",
      size: "G",
      img: img,
      quantity: 1,
      price: 97.98,
    },
  ],
};

const SacolaContent = () => {
  if (!data.totalItems) {
    return (
      <section className={classes.emptyBag}>
        <h1>Não há produtos na sua sacola</h1>
        <Link to="/">Ir para as compras</Link>
      </section>
    );
  }

  return (
    <section>
      <div className={classes.bagDisplay}>
        <h1>Total: R$948.48</h1>
        <p>Total de Unidades: 45</p>
        <div className={classes.actions}>
          <button>Finalizar Pedido</button>
          <button>Esvaziar Sacola</button>
        </div>
      </div>
      <section className={classes.items}>
        {data.items.map((item) => (
          <div key={item.id} className={classes.item}>
            <img src={item.img} alt={item.name} />
            <div className={classes.itemDisplay}>
              <h1>{item.name}</h1>
              <div className={classes.displayInfo}>
                <h2>Unidades: {item.quantity}</h2>
                <p>R$: {item.price}</p>
              </div>
              <div className={classes.displayActions}>
                <button>+</button>
                <button>-</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default SacolaContent;
