//Redux
//Redux Toolkit
/**
 * The createAction() function allows us to avoid creating
 * an Action Creator ourselves
 *
 * example:
 *
 * const logIn = createAction<boolean>("logIn");
 *
 * let setIsLogged= logIn();
 * → { type: "logIn" }
 *
 * setIsLogged(true)
 * → { type: "logIn", payload:true }
 *
 */
import { createAction } from "@reduxjs/toolkit";

export const logIn = createAction<boolean>("logIn");

export const logOut = createAction<boolean>("logOut");

export const logInAction = (): { type: string; payload?: any } => {
  return { type: "logIn" };
};
