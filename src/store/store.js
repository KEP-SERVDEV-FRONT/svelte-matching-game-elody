import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { bindTracked } from "svelte3-redux";
import { reducer } from "./reducer";

export const store = createStore(reducer, applyMiddleware(createLogger()));
export const state = bindTracked(store);
