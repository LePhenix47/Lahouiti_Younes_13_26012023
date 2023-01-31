import React from "react";

export default function ApiSuccess({
  message,
  data = null,
}: {
  message: string;
  data: any | null;
}): JSX.Element {
  return (
    <div className="sign-in__server-success">
      <h2 className="sign-in__server-success-status">Success!</h2>
      <p className="sign-in__server-success-message">
        {message}
        {/* <br />
        <br />
        {data} */}
      </p>
    </div>
  );
}
