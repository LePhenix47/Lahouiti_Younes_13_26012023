//Redux
//Redux toolkit
import { createReducer } from "@reduxjs/toolkit";

//Actions
import { setLastName, getLastName } from "./last-name.actions";

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
export const lastNameReducer = createReducer("", (builder) => {
  builder.addCase(setLastName, (state, action) => {
    state = action.payload;
    return state;
  });

  builder.addCase(getLastName, (state, action) => {
    return action.payload;
  });
});
