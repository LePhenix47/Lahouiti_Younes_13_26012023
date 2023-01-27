//Next

import Link from "next/link";

//SASS

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <Link href="/" className="header__logo">
        ARGENT<span>BANK</span>
      </Link>
      <nav className="header__navigation-bar">
        <ul className="header__unordered-list">
          <li className="header__list-item">
            <Link href="/sign-in/">
              <i
                aria-hidden
                className="fa fa-user-circle header__sign-in-logo"
              ></i>
              Sign-in
            </Link>
          </li>
          <li className="header__list-item">
            {/* <Link href="/">
              <i className="fa fa-sign-out"></i> Log-out
            </Link>
          </li>
          <li className="header__list-item">
            <Link href="/user">
              <i className="fa fa-user-circle header__sign-in-logo"></i> Tony
            </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
