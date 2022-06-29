import { combineReducers, createStore } from "redux";
import bag from "../ducks/bag";
import notification from "../ducks/notification";

const reducers = combineReducers({
  bag,
  notification,
});

const store = createStore(reducers);

export default store;
