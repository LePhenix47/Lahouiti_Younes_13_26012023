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
            <Link href="/sign-up/">Sign-up</Link>
          </li>
          <li className="header__list-item">
            <Link href="/">Log-out</Link>
          </li>
          <li className="header__list-item">
            <Link href="/user">Tony</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
