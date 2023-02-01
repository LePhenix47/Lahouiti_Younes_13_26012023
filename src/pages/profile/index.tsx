//React
import { useEffect, useState } from "react";

//Next
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";

//Components
import AccountCard from "@/components/AccountCard/AccountCard";
import Button from "../../components/Button/Button";

//Utils
import { log } from "../../utils/functions/helper-functions";
import { savingsData } from "../../utils/variables/savings-data";
import CookieService from "@/utils/services/cookies.service";
import ApiService from "@/utils/services/api.service";

//Redux
//React-Redux
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import ChangeName from "@/components/ChangeName/ChangeName";

//This is the page of the user
/**
 * User page
 *
 * Route: `/profile/`
 *  */
export default function Profile(): JSX.Element {
  // log({ jsonWebToken });
  //We IMPORT the value of the logging state of the user when logging in
  const userIsLoggedIn: boolean = useSelector((state: any) => {
    return state.isLoggedIn;
  });

  //We're going to use the router hook to get the current to redirect the user
  //if they're not logged in
  const router: NextRouter = useRouter();

  //Local state to open/close the settings to change the name
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    //Make an API request here

    setIsOpen(!isOpen);
  }

  let jsonWebToken: string | undefined = undefined;

  //We make the POST request
  const apiService: ApiService = new ApiService();

  const userProfileMutation = useMutation({
    mutationFn: (jwt: string) => {
      return apiService.postProfile(jwt);
    },
    onMutate: () => {},
    onSuccess: (data: any, variables: any) => {
      log("SUCCESS, USER INFOS:", data, variables);
    },
    onError: (error: any, variables: any) => {
      log("FAILED TO RETRIEVE USER INFOS", error, variables);
    },
  });

  const patchNamesMutation = useMutation({
    //@ts-ignore
    mutationFn: (jwt: string, newFirstName: string, newLastName: string) => {
      return apiService.putProfile(jwt, newFirstName, newLastName);
    },
    onMutate: () => {},
    onSuccess: (data: any, variables: any) => {
      log("SUCCESS, USER INFOS:", data, variables);
    },
    onError: (error: any, variables: any) => {
      log("FAILED TO RETRIEVE USER INFOS", error, variables);
    },
  });

  //We cannot use the push() method of the router to redirect the user to the sign-in page
  //if the user isn't logged in because of the SSR (push is client side only)
  useEffect(() => {
    //If the user isn't logged in we redirect them to the sign-in page
    //ERROR TO FIX
    const userIsNotLoggedIn: boolean = !userIsLoggedIn;
    if (userIsNotLoggedIn) {
    }

    //We recover the jwt inside the browser"s cookies
    const cookieCreator: CookieService = new CookieService();

    jsonWebToken = cookieCreator.getCookieByName("jwt")?.value;

    log(jsonWebToken);

    //@ts-ignore
    if (!jsonWebToken) {
      router.push("/sign-in/");
    } else {
      userProfileMutation.mutate(jsonWebToken);
    }
  }, [jsonWebToken]);

  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="index, follow" />
        <meta name="description" content="This is the your bank account page" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Profile page" />
        <meta
          property="og:description"
          content="This is the your bank account page"
        />
        <meta property="og:image" content="/images/svg/icon.svg" />

        <meta property="og:url" content="www.argent-bank.com/user/*" />

        {/*
         <!--Title--> 
         */}
        <title>Profile page</title>

        {/*
         <!--Page logo--> 
        */}
        <link rel="icon" type="image/png" href="/images/svg/icon.svg" />
      </Head>
      <section className="user">
        <div className="user__container">
          <div className="user__name-settings">
            {/* <div
              className={`user__name-inputs-buttons ${
                isOpen ? "show" : "hide"
              }`}
            >
              <input
                type="text"
                className={`user__input ${isOpen ? "show" : "hide"}`}
              />
              <input
                type="text"
                className={`user__input ${isOpen ? "show" : "hide"}`}
              />
              <Button
                buttonText="Save"
                buttonType="button"
                className={`user__save-button ${isOpen ? "show" : "hide"}`}
                callbackFunction={saveNameSettings}
              />
              <Button
                buttonText="Cancel"
                buttonType="button"
                className={`user__cancel-button ${isOpen ? "show" : "hide"}`}
                callbackFunction={toggleNameSettings}
              />
            </div>
            <Button
              buttonText="Edit name"
              buttonType="button"
              className={`user__button ${isOpen ? "hide" : "show"}`}
              callbackFunction={toggleNameSettings}
            /> */}
            <ChangeName />
          </div>

          <div className="user__accounts">
            <h2 className="user__subtitle">Accounts</h2>

            <div className="user__accounts-container">
              {savingsData.map(({ type, balance }, index) => {
                return (
                  <AccountCard
                    type={type}
                    balance={balance}
                    cardClass="user__account-card"
                    key={`${index}-${type}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Next.js function that returns data to the component when using Server Side Rendering
 */
// // export async function getServerSideProps() {
// //   return {
// //     props: {},
// //   };
// }
