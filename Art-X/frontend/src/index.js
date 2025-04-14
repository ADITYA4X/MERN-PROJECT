import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Suspense>
      <App />
      <Toaster
        toastOptions={{
          position: "top-center",
          style: {
            border: "0.5px dotted gray",
            padding: "16px",
            background: "black",
            color: "white",
          },
        }}
      />
    </Suspense>
  </Provider>
);
