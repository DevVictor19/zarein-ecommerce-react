function HIDE_NOTIFICATION_REDUCER(state) {
  return {
    ...state,
    notification: { ...state.notification, show: false },
  };
}

export default HIDE_NOTIFICATION_REDUCER;
