import * as c from "../constants";

import ADD_ITEM_REDUCER from "./sacola_reducers/add-item-reducer";
import ADD_ONE_REDUCER from "./sacola_reducers/add-one-reducer";
import CLEAR_ITEMS_REDUCER from "./sacola_reducers/clear-items-reducer";
import REMOVE_ONE_REDUCER from "./sacola_reducers/remove-one-reducer";

const initialState = {
  bag: { totalItems: 0, totalAmount: 0, items: [] },
};

const rootReducer = (state = initialState, action) => {
  if (action.type === c.ADD_ITEM) {
    return ADD_ITEM_REDUCER(state, action);
  }

  if (action.type === c.CLEAR_ITEMS) {
    return CLEAR_ITEMS_REDUCER(state);
  }

  if (action.type === c.ADD_ONE) {
    return ADD_ONE_REDUCER(state, action);
  }

  if (action.type === c.REMOVE_ONE) {
    return REMOVE_ONE_REDUCER(state, action);
  }

  return state;
};

export default rootReducer;
