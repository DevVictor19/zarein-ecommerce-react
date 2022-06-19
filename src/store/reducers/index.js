import * as c from "../constants";

const initialState = {
  bag: { totalItems: 0, totalAmount: 0, items: [] },
};

const rootReducer = (state = initialState, action) => {
  if (action.type === c.ADD_ITEM) {
    const enteredProduct = action.payload;
    const bagItems = state.bag.items;

    let existingProduct = null;

    if (enteredProduct.size) {
      existingProduct = bagItems.find((item) => {
        return (
          item.id === enteredProduct.id && item.size === enteredProduct.size
        );
      });
    } else {
      existingProduct = bagItems.find((item) => item.id === enteredProduct.id);
    }

    if (existingProduct) {
      const indexOf_existingProduct = bagItems.indexOf(existingProduct);
      const updated_existingProduct = {
        ...existingProduct,
        price:
          existingProduct.price +
          enteredProduct.price * enteredProduct.quantity,
        quantity: existingProduct.quantity + enteredProduct.quantity,
      };

      const updated_bagItems = [...bagItems];
      updated_bagItems[indexOf_existingProduct] = updated_existingProduct;

      return {
        ...state,
        bag: {
          totalItems: state.bag.totalItems + enteredProduct.quantity,
          totalAmount:
            state.bag.totalAmount +
            enteredProduct.price * enteredProduct.quantity,
          items: [...updated_bagItems],
        },
      };
    }

    return {
      ...state,
      bag: {
        totalItems: state.bag.totalItems + action.payload.quantity,
        totalAmount:
          state.bag.totalAmount +
          action.payload.price * action.payload.quantity,
        items: state.bag.items.concat(action.payload),
      },
    };
  }

  return state;
};

export default rootReducer;
