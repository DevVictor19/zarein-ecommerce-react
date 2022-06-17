import classes from "./produtosOrder.module.css";

const ProdutosOrder = (props) => {
  return (
    <section className={classes.produtosOrderWrapper}>
      <img src={props.img} alt={props.name} />
      <div className={classes.produtosInfo}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div className={classes.produtosActions}>
          <div>
            <label htmlFor="size">Tamanho</label>
            <select name="sizing" id="size">
              <option value="" disabled selected>
                Escolha o Tamanho
              </option>
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
            </select>
          </div>
          <div className={classes.qntInput}>
            <label htmlFor="quantity">Quantidade</label>
            <input
              placeholder="Peças"
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              step="1"
            />
          </div>
        </div>
        <h2>R$ {props.price}</h2>
        <button>Adicionar à sacola</button>
      </div>
    </section>
  );
};

export default ProdutosOrder;
