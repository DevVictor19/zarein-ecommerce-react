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

    const newProduct = {
      ...enteredProduct,
      price: enteredProduct.price * enteredProduct.quantity,
    };

    return {
      ...state,
      bag: {
        totalItems: state.bag.totalItems + action.payload.quantity,
        totalAmount:
          state.bag.totalAmount +
          action.payload.price * action.payload.quantity,
        items: state.bag.items.concat(newProduct),
      },
    };
  }

  if (action.type === c.CLEAR_BAG) {
    return {
      ...state,
      bag: {
        totalAmount: 0,
        totalItems: 0,
        items: [],
      },
    };
  }

  if (action.type === c.ADD_ONE) {
    const currentProductId = action.payload.id;
    const currentPrductSize = action.payload.size;

    let currentItem = null;

    if (currentPrductSize) {
      currentItem = state.bag.items.find((item) => {
        return item.id === currentProductId && item.size === currentPrductSize;
      });
    } else {
      currentItem = state.bag.items.find((item) => {
        return item.id === currentProductId;
      });
    }

    const indexOf_currentItem = state.bag.items.indexOf(currentItem);

    const defaultPrice_currentItem = currentItem.price / currentItem.quantity;

    const updated_currentItem = {
      ...state.bag.items[indexOf_currentItem],
      price: currentItem.price + defaultPrice_currentItem,
      quantity: currentItem.quantity + 1,
    };

    const updated_items = [...state.bag.items];
    updated_items[indexOf_currentItem] = updated_currentItem;

    return {
      ...state,
      bag: {
        totalAmount: state.bag.totalAmount + defaultPrice_currentItem,
        totalItems: state.bag.totalItems + 1,
        items: [...updated_items],
      },
    };
  }

  if (action.type === c.REMOVE_ONE) {
    const currentProductId = action.payload.id;
    const currentPrductSize = action.payload.size;

    let currentItem = null;

    if (currentPrductSize) {
      currentItem = state.bag.items.find((item) => {
        return item.id === currentProductId && item.size === currentPrductSize;
      });
    } else {
      currentItem = state.bag.items.find((item) => {
        return item.id === currentProductId;
      });
    }

    let updated_items = [...state.bag.items];
    const indexOf_currentItem = state.bag.items.indexOf(currentItem);
    const defaultPrice_currentItem = currentItem.price / currentItem.quantity;

    if (currentItem.quantity === 1) {
      updated_items.splice(indexOf_currentItem, 1);

      return {
        ...state,
        bag: {
          totalAmount: state.bag.totalAmount - defaultPrice_currentItem,
          totalItems: state.bag.totalItems - 1,
          items: [...updated_items],
        },
      };
    }

    const updated_currentItem = {
      ...state.bag.items[indexOf_currentItem],
      price: currentItem.price - defaultPrice_currentItem,
      quantity: currentItem.quantity - 1,
    };

    updated_items[indexOf_currentItem] = updated_currentItem;

    return {
      ...state,
      bag: {
        totalAmount: state.bag.totalAmount - defaultPrice_currentItem,
        totalItems: state.bag.totalItems - 1,
        items: [...updated_items],
      },
    };
  }

  return state;
};

export default rootReducer;
