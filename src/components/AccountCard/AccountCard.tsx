import { formatCurrencyValue } from "@/utils/functions/helper-functions";
import React from "react";
import Button from "../Button/Button";

/**
 * Card for a user's account
 */
export default function AccountCard({
  type,
  balance,
  cardClass,
}: {
  type: string;
  balance: number;
  cardClass: string;
}): JSX.Element {
  const formattedCurrency: string = formatCurrencyValue(balance);

  return (
    <div className={cardClass}>
      <div className={`${cardClass}-text`}>
        <h3 className={`${cardClass}-title`}>Argent Bank {type}</h3>
        <p className={`${cardClass}-balance`}>{formattedCurrency}</p>
        <p className={`${cardClass}-phrase`}>Available Balance</p>
      </div>
      <div className={`${cardClass}-button-container`}>
        <Button
          buttonText="View transactions"
          buttonType="button"
          className={`${cardClass}-button`}
          callbackFunction={null}
        />
      </div>
    </div>
  );
}
