import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";

const root = ReactDOM.createRoot(document.getElementById("app")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
