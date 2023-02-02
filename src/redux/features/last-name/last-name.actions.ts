//Redux
//Redux Toolkit
import { createAction } from "@reduxjs/toolkit";

/**
 * Action of the reducer `lastNameReducer` supposed to set the `lastName` state to the value of the user's last name
 */
export const setLastName = createAction<string>("setLastName");
