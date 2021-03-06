import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { Router } from "react-router";

import { Router } from "react-router-dom";

import ScrollReset from "src/components/ScrollReset";
import Routes from "src/routes";
import { createBrowserHistory } from "history";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";
import theme from "src/theme";
import { SnackbarProvider } from "notistack";

export const history = createBrowserHistory();

export default function App() {
  let thm = theme;
  thm = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={createMuiTheme(thm)}>
      <CssBaseline />
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <SnackbarProvider maxSnack={1}>
        <Router history={history}>
          <ScrollReset />
          <Routes />
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
