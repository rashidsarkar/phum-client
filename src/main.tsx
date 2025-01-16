import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("app")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
