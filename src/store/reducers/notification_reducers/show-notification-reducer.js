function SHOW_NOTIFICATION_REDUCER(state, action) {
  return {
    ...state,
    notification: {
      title: action.payload.title,
      link: action.payload.link || false,
      linkText: action.payload.linkText || "",
      linkPath: action.payload.linkPath || "",
      message: action.payload.message || "",
      show: true,
    },
  };
}

export default SHOW_NOTIFICATION_REDUCER;
