import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./components/Router/Router";
import "./index.css";
// import "/apps.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App />     */}
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
);
