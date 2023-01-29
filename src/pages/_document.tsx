//Next
import { Html, Head, Main, NextScript } from "next/document";

/*
 */
/**
 *The _document file is a file for the structure in the entire app

 *This file should *only be changed if you want to*:

 *  -Add a meta tag to every single page

 *  -Add a class to the body

 *  -Change the langage of the website

 *
 */
export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        {/* Color scheme meta tag */}
        <meta name="color-scheme" content="dark light" />

        {/*
         <!--Page logo--> 
        */}
        <link rel="icon" type="image/png" href="/images/svg/icon.svg" />

        {/* Icons     */}
        <script
          src="https://kit.fontawesome.com/904e9ee361.js"
          crossOrigin="anonymous"
        ></script>

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
