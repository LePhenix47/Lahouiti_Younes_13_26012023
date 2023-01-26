import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <small data-testid="small">
        Copyright © 2020-{currentYear} Argent Bank
      </small>
    </footer>
  );
}
