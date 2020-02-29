import React from "react";
import "./App.css";
import {
  createMuiTheme,
  ThemeProvider,
  AppBar,
  Toolbar,
  makeStyles
} from "@material-ui/core";
import { HomePage } from "./pages/HomePage";

const useStyles = makeStyles(theme => ({
  title: {
    ...theme.typography.subtitle1,
    fontSize: "24pt"
  }
}));

function App() {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ff0000"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar>
          <div className={classes.title}>Smash Ultimate API</div>
        </Toolbar>
      </AppBar>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
