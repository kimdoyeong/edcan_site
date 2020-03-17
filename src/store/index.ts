import { createStore } from "redux";
import reducer from "./reducers";

const devtools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  reducer,
  process.env.NODE_ENV === "development" && devtools
);

export default store;
