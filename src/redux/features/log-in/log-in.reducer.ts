//Redux
//Redux toolkit
import { WebStorageService } from "@/utils/services/web-storage.service";
import { createReducer } from "@reduxjs/toolkit";

//Actions
import { logIn } from "./log-in.actions";

/**
 * **Reducer for the login**
 *
 *
 * *Reminder:*
 *
 * The reducer is a function that creates a new state object with the current state and the payload
 *
 * Used to handle the app state changes
 */
export const logInReducer = createReducer(false, (builder) => {
  builder.addCase(logIn, (state, action) => {
    state = action.payload;

    return state;
  });
});
