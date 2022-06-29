// constants
export const SHOW_NOTIFICATION = "zarein/notification/show";
export const HIDE_NOTIFICATION = "zarein/notification/hide";

const initialState = {
  title: "",
  link: false,
  linkText: "",
  linkPath: "",
  message: "",
  show: false,
};

// reducer
export default function reducer(state = initialState, action) {
  if (action.type === SHOW_NOTIFICATION) {
    return {
      title: action.payload.title,
      link: action.payload.link || false,
      linkText: action.payload.linkText || "",
      linkPath: action.payload.linkPath || "",
      message: action.payload.message || "",
      show: true,
    };
  }

  if (action.type === HIDE_NOTIFICATION) {
    return { ...state, show: false };
  }

  return state;
}

// actions
export const showNotification = (config) => {
  return { type: SHOW_NOTIFICATION, payload: config };
};

export const hideNotification = () => {
  return { type: HIDE_NOTIFICATION, payload: null };
};
