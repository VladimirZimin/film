import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "redux/store";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";

import "modern-normalize/modern-normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter basename="/">
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
