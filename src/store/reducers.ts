import { combineReducers } from "redux";
import Chapter from "./chapter";

const reducers = {
  Chapter
};
const reducer = combineReducers(reducers);
type ReducersType = typeof reducers;

export type RootState = {
  [J in keyof ReducersType]: ReturnType<ReducersType[J]>;
};

export default reducer;
