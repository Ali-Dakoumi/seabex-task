import { combineReducers, createStore, compose } from "redux";

import { cartReducer } from "../reducers";

export const rootReducer = combineReducers({
  cart: cartReducer,
});

interface WindowWithDevToolsExtension extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

const composeEnhancers =
  (window as WindowWithDevToolsExtension)
    .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default store;
