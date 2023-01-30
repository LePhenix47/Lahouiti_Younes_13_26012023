//Redux
//Redux toolkit
import { createReducer } from "@reduxjs/toolkit";

//Immer
import produce from "immer";

//Initial state
import { initialState } from "../../initial-state";

//Actions
import { logIn, logOut } from "./log-in.actions";

/**
 * Reducer for the login
 *
 *
 * *Reminder:*
 *
 * The reducer is a function that creates a new state object with the current state and the payload
 */
export const logInReducer = createReducer(false, (builder) => {
  builder.addCase(logIn, (state, action) => {
    return true;
  });
  builder.addCase(logOut, (state, action) => {
    return false;
  });
});
