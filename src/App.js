import React from "react";
import "./App.css";
import {
    createMuiTheme,
    ThemeProvider,
    AppBar,
    Toolbar,
    Container,
    TextField,
    makeStyles,
    CssBaseline
} from "@material-ui/core";
import { HomePage } from "./pages/HomePage";
import { dark } from "@material-ui/core/styles/createPalette";

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
                main: "#d90004"
            },
            secondary: {
                main: "#2e2c2c"
            },
            type: "dark"
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
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
