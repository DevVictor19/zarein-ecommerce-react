import * as c from "../constants";

export const addItem = (item) => {
  return { type: c.ADD_ITEM, payload: item };
};
