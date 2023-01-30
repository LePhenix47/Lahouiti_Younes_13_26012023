//Next
import type { AppProps } from "next/app";

//Redux
//React-Redux
import { Provider as ReduxProvider } from "react-redux";

//Store
import { store } from "../redux/utils/store/store";

//TanStack Query
/**
 * To view a more detailed reason as to why we need these,
 * check out the doc about how to use TanStack Query in a Next.js app using SSR (Server-side rendering):
 *
 * https://tanstack.com/query/latest/docs/react/guides/ssr
 */
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";

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
  /**
   * This `queryClient` constant ensures that data is not shared between different users and requests, while still only creating the QueryClient once per component lifecycle.
   */
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReduxProvider store={store}>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ReduxProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
