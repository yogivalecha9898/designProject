import { createStore } from "redux";
import combined from "./component/reducers";

const store = createStore(combined)

export default store