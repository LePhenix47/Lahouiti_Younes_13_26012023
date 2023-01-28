//Next
import { log } from "@/utils/functions/helperFunctions";
import CookieService from "@/utils/services/cookies.service";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

/**
 * Header of the page
 */
export default function Header(): JSX.Element {
  //We're going to use the router hook to get the path the user is in
  const route: NextRouter = useRouter();

  //We create contextualized constants to make the code more inteligible
  const HOME_PAGE: string = "/";
  const LOGIN_PAGE: string = "/sign-in";
  const USER_PAGE: string = "/user";

  //We create constants to contextualize structural conditions
  const isHomeOrLoginPage: boolean =
    route.asPath === HOME_PAGE || route.asPath.includes(LOGIN_PAGE);

  const isUserPage: boolean = route.asPath.includes(USER_PAGE);

  //We manage the jwt with our cookie service
  const cookieService: CookieService = new CookieService();

  /**
   * Function that deletes the JSON Web Token from the cookies and logs out the user
   */
  function deleteJWT(): void {
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
            <Link href="/user">
              <i className="fa fa-user-circle header__sign-in-logo"></i> Tony
            </Link>
          </li>
          <li className={`header__list-item ${isUserPage ? "show" : "hide"}`}>
            <Link
              href="/"
              onClick={() => {
                deleteJWT();
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
