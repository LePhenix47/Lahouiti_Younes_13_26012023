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

//Redux
import { useDispatch } from "react-redux";
import { MutableRefObject, useRef, useState } from "react";

//TanStack Query
import { useMutation } from "@tanstack/react-query";

//Components
import ApiError from "@/components/ApiError/ApiError";
import ApiSuccess from "@/components/ApiSuccess/ApiSuccess";
import SpinLoader from "@/components/SpinLoader/SpinLoader";

/**
 * Sign-in page
 *
 * Route: `/sign-in/`
 */
export default function SignIn(): JSX.Element {
  let [serverResponse, setServerResponse] = useState<any | null>(null);
  //We get the router
  const router: NextRouter = useRouter();

  //We EXPORT the value of the logging state
  const dispatch = useDispatch();

  //API service to call the API
  const apiService = new ApiService();

  //Should use the useRef() hook here to get the values of the inputs
  const emailInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const passwordInputRef: MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  const rememberCheckboxRef: MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  const logInFormMutation = useMutation({
    //@ts-ignore
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return apiService.postLogin(email, password);
    },
    onMutate: () => {
      log("Sending data to the Back-End");
    },
    onSettled: (data: any, error: any, variables: any, context: any) => {
      log("Received a response!", {
        data,
      });

      setServerResponse(data);
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

    const fieldsAreCorrectlyFilled: boolean = !!email && !!password;

    if (!fieldsAreCorrectlyFilled) {
      const error = { status: 400, message: "Please fill in the form fields" };
      setServerResponse(error);
      return;
    }

    log({ event }, { email, password, checkedCheckbox });

    //@ts-ignore
    logInFormMutation.mutate({ email, password });

    // ...

    // dispatch(logIn(true));

    //We redirect the user to the user page
    // router.push("/user/");
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

        {!logInFormMutation.isLoading && logInFormMutation.data && (
          <div className="sign-in__server-response">
            {logInFormMutation.status === "error" ? (
              <ApiError
                status={logInFormMutation.data.status}
                message={logInFormMutation.data.message}
              />
            ) : (
              <ApiSuccess
                status={logInFormMutation.data.status}
                message={logInFormMutation.data.message}
                data={logInFormMutation.data.body.token}
              />
            )}
          </div>
        )}
      </section>
    </>
  );
}
