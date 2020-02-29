import React from "react";
import { Endpoints } from "../components/Endpoints";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    width: "62%",
    margin: "32px auto",
    padding: 24
  }
});

export function Documentation() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={1}>
      <Endpoints />
    </Paper>
  );
}
