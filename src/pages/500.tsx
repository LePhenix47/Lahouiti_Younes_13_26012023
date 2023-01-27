import React from "react";

//This page will show when the application itself fails
export default function Error500(): JSX.Element {
  return (
    <section className="error-500">
      <h1 className="error-500__title">Error 500</h1>
      <p className="error-500__paragraph">
        The server had an internal error (ㆆ_ㆆ)
      </p>
    </section>
  );
}
