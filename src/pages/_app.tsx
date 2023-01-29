//Next
import type { AppProps } from "next/app";

//Redux
//React-Redux
import { Provider as ReduxProvider } from "react-redux";

//Store
import { store } from "../redux/utils/store/store";

//TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

//Components
import PageLayout from "../components/PageLayout/PageLayout";

//SASS
import "../sass/main.scss";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/**
 * Root component where all the pages will pass through
 *
 * This file should be changed *only if*:
 *
 * -You want to set a page layout
 *
 * -You want to add a provider for a global state (for React, Redux, TanStackQuery...)
 *
 * This file **must not** be nested inside a React Fragment
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ReduxProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
