//Next
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

//Utils
import CookieService from "@/utils/services/cookies.service";
import { log } from "@/utils/functions/helper-functions";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/redux/features/log-in/log-in.actions";

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

  log({ userIsLoggedIn });

  //We're going to use the router hook to get the path the user is in
  const route: NextRouter = useRouter();

  //We create contextualized constants to make the code more inteligible
  const HOME_PAGE: string = "/";
  const LOGIN_PAGE: string = "/sign-in";
  const PROFILE_PAGE: string = "/profile";

  //We create constants to contextualize structural conditions
  const isHomeOrLoginPage: boolean =
    route.asPath === HOME_PAGE || route.asPath === LOGIN_PAGE;

  const isUserPage: boolean = route.asPath === PROFILE_PAGE;

  //We manage the jwt with our cookie service
  const cookieService: CookieService = new CookieService();

  /**
   * Function that deletes the `JSON Web Token` (JWT) from the cookies and logs out the user
   */
  function logUserOut(): void {
    dispatch(logOut(true));

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
            className={`header__list-item ${
              isHomeOrLoginPage ? "show" : "hide"
            }`}
          >
            <Link href="/sign-in">
              <i
                aria-hidden
                className="fa fa-user-circle header__sign-in-logo"
              ></i>
              Sign-in
            </Link>
          </li>
          <li className={`header__list-item ${isUserPage ? "show" : "hide"}`}>
            <Link href="/profile">
              <i className="fa fa-user-circle header__sign-in-logo"></i> User
            </Link>
          </li>
          <li className={`header__list-item ${isUserPage ? "show" : "hide"}`}>
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
