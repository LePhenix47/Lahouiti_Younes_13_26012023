//Redux
import { configureStore } from "@reduxjs/toolkit";

//Reducer
import { logInReducer } from "../../features/log-in/log-in.reducer";

export const store = configureStore({
  reducer: { isLoggedIn: logInReducer },
});
