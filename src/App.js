import React, { useState } from "react";
import "./App.css";
import {
  createMuiTheme,
  ThemeProvider,
  AppBar,
  Toolbar,
  makeStyles,
  CssBaseline,
  Button,
  ButtonBase,
  IconButton
} from "@material-ui/core";
import { Brightness4, Brightness7 } from "@material-ui/icons";
import Logo from "./assets/smashAPILogo.png";
import LogoWhite from "./assets/smashAPILogoWhite.png";
import { HomePage } from "./pages/HomePage";
import { Documentation } from "./pages/Documentation";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  logoContainer: {
    height: 48,
    flexGrow: 1
  },
  logoButton: {
    height: "100%"
  },
  logo: {
    maxHeight: "100%",
    maxWidth: "100%"
  }
}));

function App() {
    const classes = useStyles();
  
  const [mode, setMode] = useState("light");

  const theme = createMuiTheme({
    palette: {
      type: mode,
      primary: {
        main: "#ff4444"
      }
    }
  });

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <div className={classes.logoContainer}>
            <ButtonBase
              className={classes.logoButton}
              disableTouchRipple
              href="/"
            >
              <img
                src={mode === "light" ? Logo : LogoWhite}
                className={classes.logo}
                alt="API Logo"
              />
            </ButtonBase>
          </div>

          <IconButton aria-label="Toggle light/dark theme" onClick={toggleMode}>
            {mode === "light" ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
          <Button href="/docs">Documentation</Button>
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
