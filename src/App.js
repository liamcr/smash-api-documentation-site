import React from "react";
import "./App.css";
import {
  createMuiTheme,
  ThemeProvider,
  AppBar,
  Toolbar,
  makeStyles,
  CssBaseline
} from "@material-ui/core";
import Logo from "./assets/smashAPILogo.png";
import { HomePage } from "./pages/HomePage";
import { Documentation } from "./pages/Documentation";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  logoContainer: {
    height: 48
  },
  logo: {
    height: "100%"
  }
}));

function App() {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ff4444"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <div className={classes.logoContainer}>
            <img src={Logo} className={classes.logo} alt="API Logo" />
          </div>
        </Toolbar>
      </AppBar>

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/docs">
            <Documentation />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
