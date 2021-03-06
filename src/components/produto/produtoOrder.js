import { useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addItem } from "../../redux/ducks/bag";
import {
  showNotification,
  hideNotification,
} from "../../redux/ducks/notification";
import { useSelector } from "react-redux";

import classes from "./produtoOrder.module.css";

const isNotEmpty = (value) => value.trim() !== "";

const ProdutoOrder = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const sizeInputRef = useRef("");
  const quantityInputRef = useRef("");

  const submitHandler = () => {
    const enteredSize = sizeInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;

    let formIsValid = false;

    if (props.sizes) {
      formIsValid = isNotEmpty(enteredSize) && isNotEmpty(enteredQuantity);
    } else {
      formIsValid = isNotEmpty(enteredQuantity);
    }

    if (!formIsValid) {
      dispatch(
        showNotification({
          title: "Campos inválidos",
          message:
            "Antes de inserir algum item na sacola, insira a unidade e o tamanho desejado",
        })
      );
      setTimeout(() => {
        dispatch(hideNotification());
      }, 5000);
      return;
    }

    const order = {
      name: props.name,
      img: props.img,
      price: props.price,
      id: props.id,
      size: enteredSize || null,
      quantity: +enteredQuantity,
    };

    dispatch(addItem(order));

    dispatch(
      showNotification({
        title: "Item inserido na sacola",
        link: true,
        linkPath: "sacola",
        linkText: "Ver sacola",
      })
    );
    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);
  };

  return (
    <section className={classes.produtoOrderWrapper}>
      <img src={props.img} alt={props.name} />
      <div className={classes.produtoInfo}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div className={classes.produtoActions}>
          {props.sizes && (
            <div className={classes.selectInput}>
              <label htmlFor="size">Tamanho</label>
              <select ref={sizeInputRef} name="sizing" id="size">
                <option value="" disabled selected>
                  Escolha o Tamanho
                </option>
                {props.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label htmlFor="quantity">Quantidade</label>
            <input
              placeholder="Peças"
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              step="1"
              ref={quantityInputRef}
            />
          </div>
        </div>
        <h2>R$ {props.price}</h2>
        <button onClick={submitHandler}>Adicionar à sacola</button>
      </div>
    </section>
  );
};

export default ProdutoOrder;
