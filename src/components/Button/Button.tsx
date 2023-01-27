//Utils
import { buttonTypes } from "../../utils/types/button-types";

export default function Button({
  className,
  buttonType,
  callbackFunction,
}: {
  className: string | undefined;
  buttonType: buttonTypes;
  callbackFunction: any | undefined;
}) {
  return (
    <button
      className={`${className} button`}
      type={buttonType}
      onClick={(e) => {
        e.preventDefault();
        callbackFunction();
      }}
      data-testid="button"
    >
      Sign In
    </button>
  );
}
