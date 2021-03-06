import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "nprogress/nprogress.css";
import "src/assets/index.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import { CartProvider } from "src/cart_context";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <CartProvider>
      <App />
    </CartProvider>
  </StateProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
