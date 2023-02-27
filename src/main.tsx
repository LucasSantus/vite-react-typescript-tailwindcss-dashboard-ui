import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/globals.css";
import { Dashboard } from "./pages/Dashboard";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
