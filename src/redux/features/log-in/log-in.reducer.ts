//Immer
import produce from "immer";

//Redux
//Redux Toolkit
import { createReducer } from "@reduxjs/toolkit";

import { logInAction } from "@/redux/features/log-in/log-in.actions";

/**
 * Reducer for the log-in
 *
 * Creates a new state with the current state and payload
 */
export function logInReducer(state: any = false, action: any): any {
  const typeOfAction = action.type;
  switch (typeOfAction) {
    case "logIn": {
      return produce((draft: any) => {
        return (draft.isLoggedIn = !draft.isLoggedIn);
      });
    }

    default: {
      return state;
    }
  }
}
