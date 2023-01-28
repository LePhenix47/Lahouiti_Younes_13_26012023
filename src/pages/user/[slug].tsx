//Next
import Button from "@/components/Button/Button";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";

//Utils
import { log } from "../../utils/functions/helperFunctions";

//This is the page of the user
export default function User(): JSX.Element {
  const urlPath: NextRouter = useRouter();

  //
  const userId: string | string[] | undefined = urlPath.query.slug;

  // log({ urlPath }, urlPath.query.slug);

  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="index, follow" />
        <meta name="description" content="This is the your bank account page" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="User page" />
        <meta
          property="og:description"
          content="This is the your bank account page"
        />
        <meta property="og:image" content="/images/svg/icon.svg" />

        <meta property="og:url" content="www.argent-bank.com/user/*" />

        {/*
         <!--Title--> 
         */}
        <title>{userId}</title>

        {/*
         <!--Page logo--> 
        */}
        <link rel="icon" type="image/png" href="/images/svg/icon.svg" />
      </Head>
      <section className="user">
        <div className="user__container">
          <div className="user__name-settings">
            <h1 className="user__title">
              Welcome back
              <br />
              Firstname Lastname!
            </h1>
            <Button
              buttonText="Edit name"
              buttonType="button"
              className="user__button"
              callbackFunction={undefined}
            />
          </div>

          <div className="user__accounts">
            <h2 className="user__subtitle">Accounts</h2>
          </div>
        </div>
      </section>
    </>
  );
}
