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
 * Reducer for the log-in
 */
export function logInReducer(state: any = false, action: any): any {
  const typeOfAction = action.type;
  switch (typeOfAction) {
    case "logIn": {
      return produce((draft: any) => {
        return (draft.isLoggedIn = !draft.isLoggedIn);
      }, initialState);
    }

    default: {
      return state;
    }
  }
}

/**
 * Reducer for the log-in
 */
const logReducer = createReducer(false, (builder) => {
  builder.addCase(logIn, (state, action) => {});
  builder.addCase(logOut, (state, action) => {});
});
