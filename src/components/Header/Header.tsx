//Next
import Link from "next/link";

//Utils
import CookieService from "@/utils/services/cookies.service";
import { log } from "@/utils/functions/helper-functions";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "@/redux/features/log-in/log-in.actions";
import { setFirstName } from "@/redux/features/first-name/first-name.actions";
import { setLastName } from "@/redux/features/last-name/last-name.actions";

/**
 * Header of the page
 */
export default function Header(): JSX.Element {
  //We EXPORT the value of the logging state when logging out
  const dispatch = useDispatch();

  //We IMPORT the value of the logging state of the user when logging in
  const userIsLoggedIn = useSelector((state: any) => {
    return state.isLoggedIn;
  });

  const userFirstName = useSelector((state: any) => {
    return state.firstName;
  });

  log({ userIsLoggedIn });

  //We manage the jwt with our cookie service
  const cookieService: CookieService = new CookieService();

  /**
   * Function that deletes the `JSON Web Token` (JWT) from the cookies and logs out the user
   */
  function logUserOut(): void {
    //Logs out and resets the first and last name
    dispatch(logIn(false));
    dispatch(setFirstName(""));
    dispatch(setLastName(""));

    cookieService.deleteCookieByName("jwt");
  }

  return (
    <header className="header">
      <Link href="/" className="header__logo">
        ARGENT<span>BANK</span>
      </Link>
      <nav className="header__navigation-bar">
        <ul className="header__unordered-list">
          <li
            className={`header__list-item ${!userIsLoggedIn ? "show" : "hide"}`}
          >
            <Link href="/sign-in">
              <i
                aria-hidden
                className="fa fa-user-circle header__sign-in-logo"
              ></i>
              Sign-in
            </Link>
          </li>
          <li
            className={`header__list-item ${userIsLoggedIn ? "show" : "hide"}`}
          >
            <Link href="/profile">
              <i className="fa fa-user-circle header__sign-in-logo"></i>
              {userFirstName}
            </Link>
          </li>
          <li
            className={`header__list-item ${userIsLoggedIn ? "show" : "hide"}`}
          >
            <Link
              href="/"
              onClick={() => {
                logUserOut();
              }}
            >
              <i className="fa fa-sign-out"></i> Log-out
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
