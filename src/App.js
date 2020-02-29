import React from "react";
import "./App.css";
import {
  createMuiTheme,
  ThemeProvider,
  AppBar,
  Toolbar,
  makeStyles
} from "@material-ui/core";
import Logo from "./assets/smashAPILogo.png";
import { HomePage } from "./pages/HomePage";

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
      <AppBar position="sticky">
        <Toolbar>
          <div className={classes.logoContainer}>
            <img src={Logo} className={classes.logo} alt="API Logo" />
          </div>
        </Toolbar>
      </AppBar>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
