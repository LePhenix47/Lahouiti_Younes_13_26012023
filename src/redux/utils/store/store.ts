//Redux
import { configureStore } from "@reduxjs/toolkit";

//Reducer
import { logInReducer } from "../../features/log-in/log-in.reducer";

/**
 * Immutable object who stores all the different states of the app
 */
export const store = configureStore({
  reducer: { isLoggedIn: logInReducer },
});
