//Next
import type { AppProps } from "next/app";

//Components
import PageLayout from "../components/PageLayout/PageLayout";

//SASS

//Components styles
import "../components/Header/Header.style.scss";
import "../components/PageLayout/PageLayout.style.scss";
import "../components/Footer/Footer.style.scss";
import "../components/SpinLoader/SpinLoader.style.scss";

//Utils and other
import "../sass/main.scss";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
