import Head from "next/head";
import React from "react";

/**
 *This page will show when the application itself fails
 */
export default function Error500(): JSX.Element {
  return (
    <>
      <Head>
        {/*     Meta tags     */}
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="The Argent Bank page website is undergoing to some issues. We apologize for the inconvenience."
        />

        {/* Title */}
        <title>Page Issue</title>
      </Head>
      <section className="error-500">
        <h1 className="error-500__title">Error 500</h1>
        <p className="error-500__paragraph">
          The server had an internal error (ㆆ_ㆆ)
        </p>
      </section>
    </>
  );
}
