import rootReducer from "./Reducers";

//Importing

import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;
