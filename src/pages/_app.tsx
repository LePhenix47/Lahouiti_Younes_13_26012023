//Next
import type { AppProps } from "next/app";

//Components
import PageLayout from "../components/PageLayout/PageLayout";

//SASS
//Utils and other
import "../sass/main.scss";

//Components styles
import "../components/Header/Header.style.scss";
import "../components/PageLayout/PageLayout.style.scss";
import "../components/Footer/Footer.style.scss";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
