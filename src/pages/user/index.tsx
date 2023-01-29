//Next
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";

//Components
import AccountCard from "@/components/AccountCard/AccountCard";
import Button from "../../components/Button/Button";

//Utils
import { log } from "../../utils/functions/helper-functions";
import { savingsData } from "../../utils/variables/savings-data";
import { useState } from "react";

//Mocks

//This is the page of the user
/**
 * User page
 *
 * Route: `/user/`
 *  */
export default function User(): JSX.Element {
  //Local state to open/close the
  const [isOpen, setIsOpen] = useState<boolean>(false);
  /**
   * Toggles the settings for the name of the user
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

  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="index, follow" />
        <meta name="description" content="This is the your bank account page" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="User page" />
        <meta
          property="og:description"
          content="This is the your bank account page"
        />
        <meta property="og:image" content="/images/svg/icon.svg" />

        <meta property="og:url" content="www.argent-bank.com/user/*" />

        {/*
         <!--Title--> 
         */}
        <title>User</title>

        {/*
         <!--Page logo--> 
        */}
        <link rel="icon" type="image/png" href="/images/svg/icon.svg" />
      </Head>
      <section className="user">
        <div className="user__container">
          <div className="user__name-settings">
            <h1 className="user__title">
              Welcome back
              <br />
              {isOpen ? "" : "Firstname Lastname!"}
            </h1>
            <div
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
            />
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
