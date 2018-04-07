import { createStore } from "redux";
import rootReducer from "../reducers/index";

//State of whole application live inside the store
//can pass initial state to create store. Useful for Server-Side rendering

const store = createStore(rootReducer);

export default store;