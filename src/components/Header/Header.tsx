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
          <li className="header__list-item"></li>
          <li className="header__list-item"></li>
          <li className="header__list-item"></li>
        </ul>
      </nav>
    </header>
  );
}
