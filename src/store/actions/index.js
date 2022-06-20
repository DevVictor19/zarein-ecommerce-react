import * as c from "../constants";

export const addItem = (item) => {
  return { type: c.ADD_ITEM, payload: item };
};

export const clearBag = () => {
  return { type: c.CLEAR_ITEMS, payload: null };
};

export const addOne = (id, size) => {
  return { type: c.ADD_ONE, payload: { id, size } };
};

export const removeOne = (id, size) => {
  return { type: c.REMOVE_ONE, payload: { id, size } };
};
