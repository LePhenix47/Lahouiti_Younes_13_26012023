//Utils
import { buttonTypes } from "../../utils/types/button-types";

/**
 * Button with default styling
 */
export default function Button({
  buttonText,
  className,
  buttonType,
  callbackFunction,
}: {
  buttonText: string;
  className: string | undefined;
  buttonType: buttonTypes;
  callbackFunction: any | undefined | null;
}) {
  return (
    <button
      className={`${className} button`}
      type={buttonType}
      onClick={(e) => {
        e.preventDefault();
        !!callbackFunction && callbackFunction(e);
      }}
      data-testid={`${className} button`}
    >
      {buttonText}
    </button>
  );
}
