//React
import React, { MutableRefObject, useRef, useState } from "react";

//Components
import Button from "@/components/Button/Button";

//Utils
import CookieService from "@/utils/services/cookies.service";
import ApiService from "@/utils/services/api.service";

//TanStack Query
import { useMutation } from "@tanstack/react-query";
import { log } from "@/utils/functions/helper-functions";
import { setFirstName } from "@/redux/features/first-name/first-name.actions";
import { setLastName } from "@/redux/features/last-name/last-name.actions";
import { useDispatch, useSelector } from "react-redux";
import SpinLoader from "../SpinLoader/SpinLoader";
import ApiError from "../ApiError/ApiError";
import ApiSuccess from "../ApiSuccess/ApiSuccess";

export default function ChangeName(): JSX.Element {
  const dispatch = useDispatch();

  const userFirstName = useSelector((state: any) => {
    return state.firstName;
  });

  const userLastName = useSelector((state: any) => {
    return state.lastName;
  });

  //Local state to open/close the settings to change the name
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Refs to get the values of the inputs later
  const firstNameRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const lastNameRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  //We make the POST request
  const apiService: ApiService = new ApiService();

  /**
   * Mutator that makes the PUT API call to change the user's first and/or last name
   */
  const patchNamesMutation = useMutation({
    //@ts-ignore
    mutationFn: ({
      jwt,
      newFirstName,
      newLastName,
    }: {
      jwt: string;
      newFirstName: string;
      newLastName: string;
    }) => {
      console.log("patchNamesMutation", { jwt, newFirstName, newLastName });

      dispatch(setFirstName(newFirstName));
      dispatch(setLastName(newLastName));

      return apiService.putProfile(jwt, newFirstName, newLastName);
    },
    onMutate: () => {},
    onSuccess: (data: any, variables: any) => {
      log("PATCH SUCCESS:", data, variables);
    },
    onError: (error: any, variables: any) => {
      log("PATCH FAIL", error, variables);
    },
  });

  /**
   * Opens or closes the settings for the name of the user
   */
  function toggleNameSettings(): void {
    setIsOpen(!isOpen);
  }

  /**
   * Function that saves the changes made to the user
   */
  function saveNameSettings(): void {
    const newFirstName: string | undefined = firstNameRef?.current?.value;
    const newLastName: string | undefined = lastNameRef?.current?.value;

    const userDidNotChangeNames: boolean =
      newFirstName === userFirstName && newLastName === userLastName;

    const inputsAreNotEmpty = newFirstName?.length && newLastName?.length;

    //We prevent the user from making useless API calls
    if (userDidNotChangeNames) {
      return;
    }

    if (!inputsAreNotEmpty) {
      return;
    }
    //We recover the jwt inside the browser"s cookies
    const cookieCreator: CookieService = new CookieService();

    let jsonWebToken: string | undefined =
      cookieCreator.getCookieByName("jwt")?.value;

    //@ts-ignore Makes the POST API call
    patchNamesMutation.mutate({ jwt: jsonWebToken, newFirstName, newLastName });

    // setIsOpen(!isOpen);
  }

  return (
    <>
      <h1 className="change-name__title">
        Welcome back
        <br />
        {isOpen ? "" : `${userFirstName} ${userLastName}!`}
      </h1>
      {patchNamesMutation.isLoading && <SpinLoader width={100} />}
      {patchNamesMutation.isError && (
        <ApiError message="An unexpected error occured" />
      )}
      {isOpen && patchNamesMutation.isSuccess && (
        <ApiSuccess data={null} message="Name successfully changed!" />
      )}

      <div
        className={`change-name__name-inputs-buttons ${
          isOpen ? "show" : "hide"
        }`}
      >
        <input
          type="text"
          className={`change-name__input ${isOpen ? "show" : "hide"}`}
          placeholder="First name"
          ref={firstNameRef}
          defaultValue={userFirstName}
        />
        <input
          type="text"
          className={`change-name__input ${isOpen ? "show" : "hide"}`}
          placeholder="Last name"
          ref={lastNameRef}
          defaultValue={userLastName}
        />
        <Button
          buttonText="Save"
          buttonType="button"
          className={`change-name__save-button ${isOpen ? "show" : "hide"}`}
          callbackFunction={saveNameSettings}
        />
        <Button
          buttonText="Cancel"
          buttonType="button"
          className={`change-name__cancel-button ${isOpen ? "show" : "hide"}`}
          callbackFunction={toggleNameSettings}
        />
        <Button
          buttonText="Edit name"
          buttonType="button"
          className={`change-name__button ${isOpen ? "hide" : "show"}`}
          callbackFunction={toggleNameSettings}
        />
      </div>
    </>
  );
}
