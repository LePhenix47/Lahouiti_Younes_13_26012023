import React from "react";

/**
 * Card for one of the account of the user
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
  return <div className={cardClass}>AccountCard</div>;
}
