import React from "react";

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="footer">
      <small className="footer__small" data-testid="small">
        Copyright © 2020-{currentYear} - ArgentBank
      </small>
    </footer>
  );
}
