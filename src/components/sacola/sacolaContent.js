import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import classes from "./sacolaContent.module.css";

const SacolaContent = () => {
  const data = useSelector((state) => state.bag);
  console.log(data);

  if (data.items.length === 0) {
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
        <h1>Total: R${data.totalAmount.toFixed(2)}</h1>
        <p>Total de Unidades: {data.totalItems}</p>
        <div className={classes.actions}>
          <button>Finalizar Pedido</button>
          <button>Esvaziar Sacola</button>
        </div>
      </div>
      <section className={classes.items}>
        {data.items.map((item) => (
          <div key={`${item.id} ${item.size}`} className={classes.item}>
            <img src={item.img} alt={item.name} />
            <div className={classes.itemDisplay}>
              <h1>
                {item.name} {`${item.size || " "}`}
              </h1>
              <div className={classes.displayInfo}>
                <h2>Unidades: {item.quantity}</h2>
                <p>R$:{item.price}</p>
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
