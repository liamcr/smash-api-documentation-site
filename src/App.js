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
import { HomePage } from "./pages/HomePage";
import { Documentation } from "./pages/Documentation";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  appBarButton: {
    color: "rgba(0, 0, 0, 0.54)"
  },
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

  const [mode, setMode] = useState(
    localStorage.getItem("smashAPITheme")
      ? localStorage.getItem("smashAPITheme")
      : "light"
  );

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
      localStorage.setItem("smashAPITheme", "dark");
      setMode("dark");
    } else {
      localStorage.setItem("smashAPITheme", "light");
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
              <img src={Logo} className={classes.logo} alt="API Logo" />
            </ButtonBase>
          </div>

          <IconButton
            aria-label="Toggle light/dark theme"
            className={classes.appBarButton}
            onClick={toggleMode}
          >
            {mode === "light" ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
          <Button className={classes.appBarButton} href="/docs">
            Documentation
          </Button>
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
