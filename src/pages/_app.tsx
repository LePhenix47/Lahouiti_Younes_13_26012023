//Next
import type { AppProps } from "next/app";

//Components
import PageLayout from "../components/PageLayout/PageLayout";

//SASS
import "../sass/main.scss";

/**
 * Component where all the other components will pass through
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
