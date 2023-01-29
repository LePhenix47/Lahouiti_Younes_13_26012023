//Immer
import produce from "immer";

//Initial state
import { initialState } from "../../initial-state";

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
