//Redux
import { configureStore } from "@reduxjs/toolkit";

//Reducer
import { logInReducer } from "../../features/log-in/log-in.reducer";

/**
 * Store:
 *
 * Immutable object that stores all the different states of the app
 *
 * Used to manage the data
 */
export const store = configureStore({
  reducer: { isLoggedIn: logInReducer },
});
