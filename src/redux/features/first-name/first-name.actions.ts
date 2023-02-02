//Redux
//Redux Toolkit

import { createAction } from "@reduxjs/toolkit";

/**
 * Action of the reducer `firstNameReducer` supposed to set the `firstName` state to the value of the user's last name
 */
export const setFirstName = createAction<string>("setFirstName");
