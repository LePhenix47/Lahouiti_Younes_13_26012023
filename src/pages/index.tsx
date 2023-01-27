//Next
import Head from "next/head";

//Utils
//Variables
import { slogans } from "../utils/variables/slogans";

//Components
import Advantage from "../components/Advantage/Advantage";
import SpinLoader from "../components/SpinLoader/SpinLoader";

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
          content="What would you like the power to do? For you and your family, your business and your community. At ArgentBank, our purpose is to help make financial lives better through the power of every connection."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home page" />
        <meta
          property="og:description"
          content="What would you like the power to do? For you and your family, your business and your community. At ArgentBank, our purpose is to help make financial lives better through the power of every connection."
        />
        <meta property="og:image" content="/images/svg/icon.svg" />

        <meta property="og:url" content="www.argent-bank.com" />

        {/*
         <!--Title--> 
         */}
        <title>Home page</title>

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
            <h2 className="main-page__slogan-subtitle">
              Open a savings account with Argent Bank today!
            </h2>
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
