import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/Store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
