//React
import { logIn, logOut } from "@/redux/features/log-in/log-in.actions";

//Next
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";

//Components
import Button from "../../components/Button/Button";

//Utils
import { log } from "../../utils/functions/helper-functions";
import ApiService from "../../utils/services/api.service";
import CookieService from "@/utils/services/cookies.service";

//Redux
import { useDispatch } from "react-redux";
import { MutableRefObject, useRef } from "react";

//TanStack Query
import { useMutation } from "@tanstack/react-query";

//Components
import ApiError from "@/components/ApiError/ApiError";
import ApiSuccess from "@/components/ApiSuccess/ApiSuccess";
import SpinLoader from "@/components/SpinLoader/SpinLoader";
import { Timeout } from "@/utils/services/timeout.service";

/**
 * Sign-in page
 *
 * Route: `/sign-in/`
 */
export default function SignIn(): JSX.Element {
  //We get the router
  const router: NextRouter = useRouter();

  //We EXPORT the value of the logging state
  const dispatch = useDispatch();

  //API service to call the API
  const apiService = new ApiService();

  //Should use the useRef() hook here to get the values of the inputs by their reference
  const emailInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const passwordInputRef: MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  const rememberCheckboxRef: MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  /**
   * Makes the POST request to send the values of the form fields to the Back-End
   */
  const logInFormMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return apiService.postLogin(email, password);
    },
    //Will execute before mutating
    onMutate: () => {
      log("Sending data to the Back-End");
    },
    //Will execute if the fetch request worked
    onSuccess: (data: any, variables: any, context: any) => {
      log("SUCCESS!", {
        data,
        variables,
        context,
      });

      const cookieCreator: CookieService = new CookieService();

      const timeoutCreator: Timeout = new Timeout();

      const statusIsOk: boolean = data.status === 200;
      if (statusIsOk) {
        let sendUserToProfilePageFonction = () => {
          cookieCreator.setCookie("jwt", data.body.token);
          dispatch(logIn(true));
          router.push("/profile/");
        };

        let sendUserToProfilePage = timeoutCreator.addTimeout(
          sendUserToProfilePageFonction,
          1_500
        );
      }
    },
    onError: (error: unknown, variables: any, context: any) => {
      log("FAIL", error);
    },
  });

  /**
   * Function that sends the form to the Back-end
   */
  function sendForm(event: any): void {
    //We get the values of the inputs
    const email: string | undefined = emailInputRef?.current?.value;

    const password: string | undefined = passwordInputRef?.current?.value;

    const checkedCheckbox: boolean | undefined =
      rememberCheckboxRef?.current?.checked;

    //@ts-ignore
    logInFormMutation.mutate({ email, password });

    log({ event }, { email, password, checkedCheckbox });
  }

  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Sign in to your ArgentBank account by entering your username along with your password."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sign-in page" />
        <meta
          property="og:description"
          content="Sign in to your ArgentBank account by entering your username along with your password."
        />
        <meta property="og:image" content="/images/svg/icon.svg" />

        <meta property="og:url" content="www.argent-bank.com/sign-up" />

        {/*
         <!--Title--> 
         */}
        <title>Sign In</title>

        {/*
         <!--Page logo--> 
        */}
        <link rel="icon" type="image/png" href="/images/svg/icon.svg" />
      </Head>
      <section className="sign-in">
        <form action="#" className="sign-in__form">
          <fieldset className="sign-in__fieldset">
            <legend className="sign-in__legend">
              <i
                aria-hidden
                className="fa fa-user-circle sign-in__legend-logo"
              ></i>
              <br />
              Sign In
            </legend>

            <div className="sign-in__inputs-container">
              <div className="sign-in__label-input-container">
                <label htmlFor="username" className="sign-in__label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="sign-in__input"
                  autoComplete="username"
                  ref={emailInputRef}
                />
              </div>
              <div className="sign-in__label-input-container">
                <label htmlFor="password" className="sign-in__label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="sign-in__input"
                  autoComplete="current-password"
                  ref={passwordInputRef}
                />
              </div>
              <div className="sign-in__label-input-container sign-in__label-input-container-checkbox">
                <input
                  type="checkbox"
                  id="remember"
                  className="sign-in__input-checkbox"
                  ref={rememberCheckboxRef}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
            </div>
          </fieldset>

          <div className="sign-in__button-container">
            <Button
              buttonText="Sign In"
              className="sign-in__button"
              buttonType="submit"
              callbackFunction={sendForm}
            />
          </div>
        </form>

        {logInFormMutation.isLoading && <SpinLoader width={100} />}

        <div className="sign-in__server-response">
          {logInFormMutation.isSuccess && (
            <ApiSuccess
              message="You'll be redirected in a few seconds"
              data={null}
            />
          )}

          {logInFormMutation.isError && (
            <ApiError
              //@ts-ignore
              message={logInFormMutation?.error?.message}
            />
          )}
        </div>
      </section>
    </>
  );
}
