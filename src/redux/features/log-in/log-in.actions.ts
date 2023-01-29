//Redux
//Redux Toolkit
import { createAction } from "@reduxjs/toolkit";

/**
 * Action that makes the user log in
 */
const logUserIn = createAction("logIn", function prepare(logIn: boolean) {
  return {
    payload: {
      isLoggedIn: logIn,
    },
  };
});

/**
 * Dispatcher
 *
 * Needs to change the state of the payload
 */
export const logInAction = logUserIn;
