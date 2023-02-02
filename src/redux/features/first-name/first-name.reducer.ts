//Redux
//Redux toolkit
import { createReducer } from "@reduxjs/toolkit";

//Immer
import produce from "immer";

//Initial state
import { initialState } from "../../initial-state";

//Actions
import { getFirstName, setFirstName } from "./first-name.actions";

/**
 * **Reducer for the first and last name**
 *
 *
 * *Reminder:*
 *
 * The reducer is a function that creates a new state object with the current state and the payload
 *
 * Used to handle the app state changes
 */
export const firstNameReducer = createReducer("", (builder) => {
  builder.addCase(setFirstName, (state, action) => {
    state = action.payload;
    return state;
  });

  builder.addCase(getFirstName, (state, action) => {
    return action.payload;
  });
});
