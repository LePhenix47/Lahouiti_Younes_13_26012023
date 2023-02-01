import React from "react";

export default function ApiError({
  message,
}: {
  message: string;
}): JSX.Element {
  return (
    <div className="server-error">
      <h2 className="server-error__status">Oops! There was an error:</h2>
      <p className="server-error__message">{message}</p>
    </div>
  );
}
