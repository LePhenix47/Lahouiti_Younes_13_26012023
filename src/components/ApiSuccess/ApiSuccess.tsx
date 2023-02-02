import React from "react";

//Next
import Image from "next/image";

//Images
import svgCheckIcon from "../../../public/images/svg/success-icon.svg";

export default function ApiSuccess({
  message,
  data = null,
}: {
  message: string;
  data: any | null;
}): JSX.Element {
  return (
    <div className="server-success">
      <h2 className="server-success__status">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="server-success__svg"
        >
          <g>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              stroke-dasharray="392"
              stroke-dashoffset="200"
            ></circle>
            <path
              d="M 25 45 L 50 70 L 90 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
            ></path>
          </g>
        </svg>
        Success!
      </h2>
      <p className="server-success__message">{message}</p>
    </div>
  );
}
