import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DataContextProvider from "./contexts/dataContext";
import { ThemeProvider } from "@material-ui/core/styles";
import customTheme from "./customTheme";
import axios from "axios";

axios.defaults.baseURL = "https://35.217.91.119:8000/api";

ReactDOM.render(
  <DataContextProvider>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </DataContextProvider>,
  document.getElementById("root")
);
