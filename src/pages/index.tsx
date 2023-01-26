//Next
import Head from "next/head";

//Home page
export default function Home() {
  return (
    <>
      {/*   
      Head
*/}

      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Bienvenue dans la page d'accueil de Argent Bank!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Accueil" />
        <meta
          property="og:description"
          content="Bienvenue dans la page d'accueil de Argent Bank!"
        />
        <meta property="og:image" content="/images/svg/icon.svg" />

        <meta property="og:url" content="www.argent-bank.com" />

        {/*
         <!--Title--> 
         */}
        <title>Accueil</title>

        {/*
         <!--Page logo--> 
        */}
        <link rel="icon" type="image/png" href="/images/svg/icon.svg" />
      </Head>
      <h1>P13</h1>
    </>
  );
}
