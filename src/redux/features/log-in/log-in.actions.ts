//Redux
//Redux Toolkit
/**
 * The createAction() function allows us to avoid creating
 * an Action Creator ourselves
 *
 * Example:
 *
 * const logIn = createAction<boolean>("logIn");
 *
 * let setIsLogged= logIn();
 * → { type: "logIn" }
 *
 * setIsLogged(true)
 * → { type: "logIn", payload: true }
 *
 */
import { createAction } from "@reduxjs/toolkit";

/**
 * Action of the reducer `logInReducer` supposed to set the `isLoggedIn` state to `true`
 * to allow the user to access the user page
 */
export const logIn = createAction<boolean>("logIn");

/**
 * Action of the reducer `logInReducer` supposed to set the `isLoggedIn` state to `false`
 * to log out the user and prevent them from entering the user page
 */
export const logOut = createAction<boolean>("logOut");
