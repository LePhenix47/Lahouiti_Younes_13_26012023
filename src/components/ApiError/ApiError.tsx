import React from "react";

export default function ApiError({
  status,
  message,
}: {
  status: number;
  message: string;
}): JSX.Element {
  return (
    <div className="sign-in__server-error">
      <h2 className="sign-in__server-error-status">Error {status}:</h2>
      <p className="sign-in__server-error-message">{message}</p>
    </div>
  );
}
