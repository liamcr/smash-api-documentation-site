import React from "react";
import { Endpoints } from "../components/Endpoints";
import { Paper, makeStyles, useMediaQuery } from "@material-ui/core";
import { Types } from "../components/Types";
import { TableOfContents } from "../components/TableOfContents";

const useStyles = makeStyles({
  paper: {
    width: "62%",
    margin: "32px auto",
    padding: 24
  },
  paperSmallScreen: {
    width: "95%",
    margin: "32px auto",
    padding: 24
  }
});

export function Documentation() {
  const classes = useStyles();

  const smallScreen = useMediaQuery("(max-width: 730px)");

  return (
    <Paper
      className={smallScreen ? classes.paperSmallScreen : classes.paper}
      elevation={1}
    >
      <TableOfContents />
      <Endpoints />
      <Types />
    </Paper>
  );
}
