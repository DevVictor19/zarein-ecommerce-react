function CLEAR_ITEMS_REDUCER(state) {
  return {
    ...state,
    bag: {
      totalAmount: 0,
      totalItems: 0,
      items: [],
    },
  };
}

export default CLEAR_ITEMS_REDUCER;
