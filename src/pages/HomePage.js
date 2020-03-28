import React from "react";
import {
  TextField,
  makeStyles,
  Button,
  CircularProgress,
  Card,
  CardContent,
  Typography,
  useMediaQuery
} from "@material-ui/core";
import { HomeHeader } from "../components/HomeHeader.js";

const useStyles = makeStyles(theme => ({
  title: {
    ...theme.typography.subtitle1,
    fontSize: "24pt"
  },
  jsonArea: {
    overflow: "scroll",
    padding: "10px",
    resize: "none",
    width: "100%",
    color:
      localStorage.getItem("smashAPITheme") === "light"
        ? "black"
        : "whitesmoke",
    backgroundColor: "transparent",
    border: "none",
    disabled: "true",
    height: "500px",
    outline: "none"
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    height: "500px"
  },
  query: {
    display: "block",
    font: "inherit",
    fontSize: "1rem"
  },
  queryCont: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    width: "fit-content",
    margin: "auto",
    padding: "10px"
  },
  body: {
    width: "90%",
    margin: "32px auto"
  },
  root: {
    minWidth: 275,
    minHeight: 275,
    width: "100%",
    maxHeight: 500,
    height: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px"
  },
  jsonCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 275,
    height: "fit-content",
    maxHeight: 500
  }
}));

export function HomePage() {
  const classes = useStyles();

  const [response, setResponse] = React.useState(false);
  const [waiting, setWaiting] = React.useState(false);
  const [init, setInit] = React.useState(true);

  const sendQuery = () => {
    let query = document.getElementById("queryText").value;
    if (query.length === 0) {
      return;
    }
    let sampleReq = new XMLHttpRequest();
    let responseJSON = "";
    let baseUrl = "https://api.smashultimate.ca/";
    let url = baseUrl + query;

    sampleReq.open("GET", url, true);
    sampleReq.onload = function() {
      responseJSON = JSON.parse(this.response);
      responseJSON = JSON.stringify(responseJSON, undefined, 4);
      setResponse(responseJSON);
      setWaiting(false);
    };
    sampleReq.onreadystatechange = () => {
      if (sampleReq.readyState === 4) {
        //if complete
        if (sampleReq.status === 200) {
          //check if "OK" (200)
          //success
        } else {
          setWaiting(false);
          setResponse("404 page not found");
        }
      }
    };
    setWaiting(true);
    setResponse(false);
    sampleReq.send();
  };

  const keyDownHandler = e => {
    if (e.keyCode === 13) {
      sendQuery();
    }
  };

  let test = "";
  let test2 = "";
  if (response) {
    test = response;

    test2 = (
      <textarea
        id="jsonText"
        label="Result"
        className={classes.jsonArea}
        value={test}
      ></textarea>
    );
  }

  let wait = "";
  if (waiting) {
    wait = <CircularProgress />;
  }

  if (init) {
    test = require("../custom/homepage.json");

    test2 = (
      <textarea
        id="jsonText"
        label="Result"
        className={classes.jsonArea}
        value={test}
      ></textarea>
    );

    setResponse(JSON.stringify(test, undefined, 4));
    setInit(false);
  }
  return (
    <div className={classes.body}>
      <HomeHeader />
      <div className={classes.queryCont}>
        <p className={classes.query}>https://api.smashultimate.ca/</p>
        <TextField
          onKeyDown={keyDownHandler}
          id="queryText"
          label="sampleEndpoint"
          variant="standard"
          defaultValue="moves?ids=1"
        ></TextField>
        <Button
          color="primary"
          onClick={sendQuery}
          style={{ marginLeft: "10px" }}
          variant="contained"
        >
          Submit
        </Button>
      </div>
      <div className={classes.jsonCont}>
        <Card className={classes.root}>
          <CardContent className={classes.root}>
            {test2}
            {wait}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
