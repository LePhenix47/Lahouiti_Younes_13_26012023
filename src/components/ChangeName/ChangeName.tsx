import React, { useState } from "react";
import Button from "@/components/Button/Button";

export default function ChangeName() {
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

  return (
    <>
      <div className={`user__name-inputs-buttons ${isOpen ? "show" : "hide"}`}>
        <h1 className="user__title">
          Welcome back
          <br />
          {isOpen ? "" : "Firstname Lastname!"}
        </h1>
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
        <Button
          buttonText="Edit name"
          buttonType="button"
          className={`user__button ${isOpen ? "hide" : "show"}`}
          callbackFunction={toggleNameSettings}
        />
      </div>
    </>
  );
}
