import React from "react";

export default function ApiSuccess({
  message,
  data = null,
}: {
  message: string;
  data: any | null;
}): JSX.Element {
  return (
    <div className="server-success">
      <h2 className="server-success__status">Success!</h2>
      <p className="server-success__message">{message}</p>
    </div>
  );
}
