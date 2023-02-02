import React from "react";
//Next
import Image from "next/image";

//Images
import svgCheckIcon from "../../../public/images/svg/error-icon.svg";

export default function ApiError({
  message,
}: {
  message: string;
}): JSX.Element {
  return (
    <div className="server-error">
      <h2 className="server-error__status">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="server-error__svg"
        >
          <g>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
            ></circle>
            <path
              d="M 70 25 L 30 75"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
            ></path>
            <path
              d="M 30 25 L 70 75"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
            ></path>
          </g>
        </svg>
        Oops! There was an error:
      </h2>
      <p className="server-error__message">{message}</p>
    </div>
  );
}
