//Redux
import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

//Initial state
import { initialState } from "../../initial-state";

//Reducer
import { logInReducer } from "../../features/log-in/log-in.reducer";

export const store = configureStore({
  reducer: { logIn: logInReducer },
});
