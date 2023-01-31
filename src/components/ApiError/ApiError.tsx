import React from "react";

export default function ApiError({
  message,
}: {
  message: string;
}): JSX.Element {
  return (
    <div className="sign-in__server-error">
      <h2 className="sign-in__server-error-status">
        Oops! There was an error:
      </h2>
      <p className="sign-in__server-error-message">{message}</p>
    </div>
  );
}
