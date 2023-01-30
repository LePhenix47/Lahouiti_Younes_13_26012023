//Next
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";

//Components
import Button from "../../components/Button/Button";

//Utils
import { log } from "../../utils/functions/helper-functions";

//Redux
import { useDispatch } from "react-redux";
import { logIn, logOut } from "@/redux/features/log-in/log-in.actions";

/**
 * Sign-in page
 *
 * Route: `/sign-in/`
 */
export default function SignIn(): JSX.Element {
  const router: NextRouter = useRouter();

  //We EXPORT the value of the logging state
  const dispatch = useDispatch();

  //Should use the useRef() hook here to get the values of the inputs

  /**
   * Functions that sends the form to the Back-end
   */
  function sendForm(event: any): void {
    //We call in the API
    log({ event });

    // ...

    dispatch(logIn(true));

    //We redirect the user to the user page
    router.push("/user/");
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
                />
              </div>
              <div className="sign-in__label-input-container sign-in__label-input-container-checkbox">
                <input
                  type="checkbox"
                  id="remember"
                  className="sign-in__input-checkbox"
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
      </section>
    </>
  );
}
