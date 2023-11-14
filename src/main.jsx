import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./styles/global";
import { Router } from "./Router";
import { ContextProvider } from "./hooks/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <ContextProvider > 
    <Router />
    </ContextProvider>
  </React.StrictMode>
);
