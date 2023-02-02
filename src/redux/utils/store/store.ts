//Redux
import { firstNameReducer } from "@/redux/features/first-name/first-name.reducer";
import { lastNameReducer } from "@/redux/features/last-name/last-name.reducer";
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
  reducer: {
    isLoggedIn: logInReducer,
    firstName: firstNameReducer,
    lastName: lastNameReducer,
  },
});
