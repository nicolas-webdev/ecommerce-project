//React関連
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//REDUX関連
import { Provider } from "react-redux";
import store from "./redux/store";

//PWA用
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

//Module
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();
reportWebVitals();
