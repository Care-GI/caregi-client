import "../styles/Spinner.css";
import { Provider } from "react-redux";

import "@styles/Global.css";
import store from "@store/store";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
