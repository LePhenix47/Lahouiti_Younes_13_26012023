//Next
import type { AppProps } from "next/app";

//Redux
//React-Redux
import { Provider } from "react-redux";

//Store
import { store } from "../redux/utils/store/store";

//Components
import PageLayout from "../components/PageLayout/PageLayout";

//SASS
import "../sass/main.scss";

/**
 * Root component where all the pages will pass through
 *
 * This file should be changed *only if*:
 *
 * -You want to set a page layout
 *
 * -You want to add a provider for a global state (for React, Redux, TanStackQuery...)
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </Provider>
    </>
  );
}
