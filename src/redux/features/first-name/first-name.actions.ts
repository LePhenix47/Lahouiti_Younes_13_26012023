//Redux
//Redux Toolkit

import { createAction } from "@reduxjs/toolkit";

/**
 * Action of the reducer `nameReducer` supposed to set the `isLoggedIn` state to `true`
 * to allow the user to access the user page
 */
export const setFirstName = createAction<string>("setFirstName");

/**
 * Action of the reducer `nameReducer` supposed to set the `isLoggedIn` state to `false`
 * to log out the user and prevent them from entering the user page
 */
export const getFirstName = createAction<string>("getFirstName");
