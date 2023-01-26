//Next
import type { AppProps } from "next/app";

//Components
import PageLayout from "../components/PageLayout/PageLayout";

//SASS utils
import "../sass/main.scss";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
