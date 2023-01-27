import Button from "@/components/Button/Button";
import Head from "next/head";
import React from "react";

export default function SignIn(): JSX.Element {
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
                <input type="text" id="username" className="sign-in__input" />
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
              className="sign-in__button"
              buttonType="submit"
              callbackFunction={(e: any) => {
                e.preventDefault();
              }}
            />
          </div>
        </form>
      </section>
    </>
  );
}
