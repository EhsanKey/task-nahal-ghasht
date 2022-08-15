import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import theme from "./mul/theme";
import cacheRtl from "./mul/cacheRtl";
import { CacheProvider } from "@emotion/react";
//Styles
import "./styles/index.css";
import "./styles/fonts.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CacheProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
