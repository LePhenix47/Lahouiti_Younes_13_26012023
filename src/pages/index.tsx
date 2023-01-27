//Next
import SpinLoader from "../components/SpinLoader/SpinLoader";
import Head from "next/head";

//Utils
//Variables
import { slogans } from "../utils/variables/slogans";
import Advantage from "../components/Advantage/Advantage";

//Home page
export default function Home(): JSX.Element {
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
      <section className="main-page">
        <div className="main-page__banner">
          <section className="main-page__slogan-window">
            <h1 className="main-page__slogan-title">
              No fees.
              <br />
              No minimum deposit.
              <br />
              High interest rates.
            </h1>
            <p className="main-page__slogan-paragrapgh">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
      </section>
      <section className="main-page__advantages">
        {slogans.map(({ image, title, text }, index) => {
          return (
            <Advantage
              image={image}
              title={title}
              text={text}
              key={`${index}-${title}`}
            />
          );
        })}
      </section>
    </>
  );
}
