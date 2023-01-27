import Head from "next/head";
import React from "react";

//This page will show when the user attempts to enter page that does not exist
export default function Error404(): JSX.Element {
  return (
    <>
      <Head>
        {/*     Meta tags     */}
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="The Argent Bank page you are trying to reach hasn't been found. We apologize for the inconvenience."
        />

        {/* Title */}
        <title>Page not found</title>
      </Head>

      <section className="error-404">
        <h1 className="error-404__title">Error 404</h1>
        <p className="error-404__paragraph">ಠ_ಠ</p>
        <br />
        <p className="error-404__explanation">
          There are several possible reasons you are unable to reach the page
          you want:
        </p>
        <ul className="error-404__unordered-list">
          <li className="error-404__list-item">
            The link you used is outdated.
          </li>
          <li className="error-404__list-item">
            The Web address you entered is incorrect.
          </li>
          <li className="error-404__list-item">
            The page you want no longer exists.
          </li>
        </ul>
      </section>
    </>
  );
}
